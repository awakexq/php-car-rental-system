<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rentals', function (Blueprint $table) {
            $table->id('id_wypozyczenia');
            $table->foreignId('id_osoby')->constrained('users', 'id_osoby');
            $table->foreignId('id_samochodu')->constrained('cars', 'id_samochodu');
            $table->date('data_od');
            $table->date('data_do');
            $table->decimal('cena_calkowita', 10, 2);
            $table->timestamps();

            $table->check('data_do >= data_od');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
}; 