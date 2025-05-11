<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            'id_roli' => 1,
            'imie' => 'Admin',
            'nazwisko' => 'Systemowy',
            'email' => 'admin@example.com',
            'telefon' => '123456789',
            'haslo' => Hash::make('admin123'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
} 