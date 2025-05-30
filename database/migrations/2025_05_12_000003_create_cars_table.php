<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id('id_samochodu');
            $table->json('zdjecia')->nullable();
            $table->string('marka', 64);
            $table->string('model', 64);
            $table->integer('ilosc_koni');
            $table->integer('rocznik');
            $table->string('kolor', 32);
            $table->decimal('cena_za_dzien', 10, 2);
            $table->boolean('dostepny')->default(true);
            $table->string('typ', 32);
            $table->string('rodzaj', 32);
            $table->integer('drzwi');
            $table->integer('pasazerowie');
            $table->integer('ocena')->nullable();
            $table->integer('ilosc_ocen')->nullable();
            $table->timestamps();

        });
    }
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
}; 