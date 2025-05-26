<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Car extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_samochodu';

    protected $fillable = [
        'zdjecia',
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
        'ilosc_ocen'
    ];

    protected $casts = [
        'zdjecia' => 'array',
        'dostepny' => 'boolean',
        'cena_za_dzien' => 'decimal:2',
        'rocznik' => 'integer',
        'ilosc_koni' => 'integer',
        'drzwi' => 'integer',
        'pasazerowie' => 'integer',
        'ocena' => 'integer',
        'ilosc_ocen' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function rentals()
    {
        return $this->hasMany(Rental::class, 'id_samochodu');
    }
}
