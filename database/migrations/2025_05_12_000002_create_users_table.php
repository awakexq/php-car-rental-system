<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_osoby');
            $table->foreignId('id_roli')->constrained('roles', 'id_roli');
            $table->string('imie', 64);
            $table->string('nazwisko', 64);
            $table->string('email', 128)->unique();
            $table->string('telefon', 15);
            $table->string('haslo');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
}; 