<?php
use App\Models\Car;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\PasswordController;
Route::get('/', function () {

    $cars = Car::all();

    return Inertia::render('main', ['cars' => $cars]);
})->name('main');

Route::get('/currentoffer', function () {

    $cars = Car::all();

    return Inertia::render('currentoffer', ['cars' => $cars]);
})->name('currentoffer');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/currentoffer/{id}', function ($id) {
    $car = Car::find($id);
    return Inertia::render('pickedoffer', ['car' => $car]);
})->name('pickedoffer');

Route::get('/add-car', function () {
    return Inertia::render('add-car');
})->name('add-car');

// Route::get('/loginpage', function () {
//     return Inertia::render('loginpage');
// })->name('loginpage');

// Route::get('/registerpage', function () {
//     return Inertia::render('registerpage');
// })->name('registerpage');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::put('/password', [PasswordController::class, 'update'])->name('password.update');
    Route::get('account', function () {
        return Inertia::render('account');
    })->name('account');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
