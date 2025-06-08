<?php
use App\Models\Car;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\PasswordController;
Route::get('/', function () {
    return Inertia::render('main');
})->name('main');

Route::get('/currentoffer', function () {
    return Inertia::render('currentoffer');
})->name('currentoffer');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/currentoffer/{id}', function ($id) {
    $car = Car::find($id);
    return Inertia::render('pickedoffer', ['car' => $car]);
})->name('pickedoffer');

Route::middleware(['auth'])->group(function () {
    Route::get('/add-car', function () {
        if (auth()->user()->role !== 'ADMIN') {
            abort(403);
        }
        return Inertia::render('add-car');
    })->name('add-car');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::put('/password', [PasswordController::class, 'update'])->name('password.update');
    Route::get('account', function () {
        return Inertia::render('account');
    })->name('account');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
