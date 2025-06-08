<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Car::query();
        
        
        if ($request->has('marka')) {
            $query->where('marka', 'like', '%' . $request->marka . '%');
        }
        
        
        if ($request->has('model')) {
            $query->where('model', 'like', '%' . $request->model . '%');
        }
        
       
        if ($request->has('min_cena')) {
            $query->where('cena_za_dzien', '>=', $request->min_cena);
        }
        if ($request->has('max_cena')) {
            $query->where('cena_za_dzien', '<=', $request->max_cena);
        }
        
        
        if ($request->has('min_rok')) {
            $query->where('rocznik', '>=', $request->min_rok);
        }
        if ($request->has('max_rok')) {
            $query->where('rocznik', '<=', $request->max_rok);
        }
        
        
        if ($request->has('min_konie')) {
            $query->where('ilosc_koni', '>=', $request->min_konie);
        }
        if ($request->has('max_konie')) {
            $query->where('ilosc_koni', '<=', $request->max_konie);
        }
        
        
        if ($request->has('typ')) {
            $query->where('typ', $request->typ);
        }
        
        
        if ($request->has('rodzaj')) {
            $query->where('rodzaj', $request->rodzaj);
        }

        $perPage = $request->query('per_page', 4);
        $cars = $query->paginate($perPage);
        
        return response()->json($cars);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'zdjecia' => 'nullable|array',
            'zdjecia.*' => 'string|max:2048',
            'marka' => 'required|string|max:64',
            'model' => 'required|string|max:64',
            'ilosc_koni' => 'required|integer|min:1',
            'rocznik' => 'required|integer|min:1900|max:' . (date('Y') + 1),
            'kolor' => 'required|string|max:32',
            'cena_za_dzien' => 'required|numeric|min:0',
            'dostepny' => 'boolean',
            'typ' => 'required|string|max:32',
            'rodzaj' => 'required|string|max:32',
            'drzwi' => 'required|integer|min:2|max:6',
            'pasazerowie' => 'required|integer|min:1|max:9',
            'ocena' => 'nullable|integer|min:1|max:5',
            'ilosc_ocen' => 'nullable|integer|min:0'
        ]);

        $car = Car::create($validated);
        
        return response()->json($car, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['message' => 'Car not found'], 404);
        }
        $car->delete();
        return response()->json(['message' => 'Car deleted successfully']);
    }

    public function getBestsellers(): JsonResponse
    {
        $cars = Car::take(3)->get();
        return response()->json($cars);
    }
}
