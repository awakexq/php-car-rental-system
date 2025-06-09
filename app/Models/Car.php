<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Car extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_samochodu';

    protected $fillable = [
        'marka',
        'model',
        'ilosc_koni',
        'rocznik',
        'kolor',
        'cena_za_dzien',
        'dostepny',
        'typ',
        'rodzaj',
        'drzwi',
        'pasazerowie',
        'ocena',
        'ilosc_ocen',
        'zdjecia'
    ];

    protected $casts = [
        'zdjecia' => 'array',
        'dostepny' => 'boolean',
        'ilosc_koni' => 'integer',
        'rocznik' => 'integer',
        'cena_za_dzien' => 'decimal:2',
        'drzwi' => 'integer',
        'pasazerowie' => 'integer',
        'ocena' => 'integer',
        'ilosc_ocen' => 'integer'
    ];

    public function rentals(): HasMany
    {
        return $this->hasMany(Rental::class, 'car_id', 'id_samochodu');
    }
}
