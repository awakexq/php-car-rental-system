<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class RentalController extends Controller
{
    public function index(): JsonResponse
    {
        $rentals = Rental::with(['user', 'car'])->get();
        return response()->json($rentals);
    }

    public function store(Request $request): JsonResponse
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->validate([
            'car_id' => 'required|exists:cars,id_samochodu',
            'rental_start' => 'required|date|after:now',
            'rental_end' => 'required|date|after:rental_start',
        ]);

        
        $isCarAvailable = !Rental::where('car_id', $request->car_id)
            ->where(function($query) use ($request) {
                $query->whereBetween('rental_start', [$request->rental_start, $request->rental_end])
                    ->orWhereBetween('rental_end', [$request->rental_start, $request->rental_end]);
            })
            ->exists();

        if (!$isCarAvailable) {
            return response()->json(['message' => 'Samochód jest niedostępny w wybranym terminie'], 422);
        }

        
        $car = Car::where('id_samochodu', $request->car_id)->firstOrFail();
        $days = Carbon::parse($request->rental_start)->diffInDays(Carbon::parse($request->rental_end)) + 1;
        $totalPrice = $car->cena_za_dzien * $days;

        $rental = Rental::create([
            'user_id' => Auth::id(),
            'car_id' => $request->car_id,
            'rental_start' => $request->rental_start,
            'rental_end' => $request->rental_end,
            'total_price' => $totalPrice,
            'status' => 'pending',
            'notes' => $request->notes
        ]);

        return response()->json($rental, 201);
    }

    public function show(Rental $rental): JsonResponse
    {
        if (!Auth::check() || $rental->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        return response()->json($rental->load(['user', 'car']));
    }

    public function update(Request $request, Rental $rental): JsonResponse
    {
        if (!Auth::check() || $rental->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->validate([
            'status' => 'sometimes|required|in:pending,active,completed,cancelled',
            'notes' => 'sometimes|string'
        ]);

        $rental->update($request->only(['status', 'notes']));

        return response()->json($rental);
    }

    public function destroy(Rental $rental): JsonResponse
    {
        if (!Auth::check() || $rental->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $rental->delete();
        return response()->json(null, 204);
    }

    public function getUserRentals(): JsonResponse
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        try {
            $rentals = Rental::with(['car' => function($query) {
                    $query->select('id_samochodu', 'marka', 'model', 'zdjecia');
                }])
                ->where('user_id', Auth::id())
                ->orderBy('created_at', 'desc')
                ->get();

            
            \Log::info('User rentals:', [
                'user_id' => Auth::id(),
                'rentals' => $rentals->toArray()
            ]);

            return response()->json($rentals);
        } catch (\Exception $e) {
            \Log::error('Error fetching user rentals: ' . $e->getMessage());
            return response()->json(['message' => 'Wystąpił błąd podczas pobierania wypożyczeń'], 500);
        }
    }

    public function getCarRentals($carId): JsonResponse
    {
        try {
            $now = Carbon::now();
            $rentals = Rental::where('car_id', $carId)
                ->where('rental_end', '>', $now)
                ->where('status', '!=', 'cancelled')
                ->orderBy('rental_start', 'asc')
                ->get(['rental_start', 'rental_end']);

            return response()->json($rentals);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Wystąpił błąd podczas pobierania wypożyczeń'], 500);
        }
    }
}