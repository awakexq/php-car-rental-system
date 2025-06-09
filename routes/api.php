<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\RentalController;

Route::post('/register', [AuthController::class, 'register']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/cars', [CarController::class, 'index']);
Route::post('/cars', [CarController::class, 'store']);
Route::delete('/cars/{id}', [CarController::class, 'destroy']);
Route::get('/cars/bestsellers', [CarController::class, 'getBestsellers']);
Route::get('/cars/{id}/rentals', [RentalController::class, 'getCarRentals']);

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/user/rentals', [RentalController::class, 'getUserRentals']);
    Route::resource('rentals', RentalController::class);
}); 

