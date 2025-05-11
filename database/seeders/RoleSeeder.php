<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('roles')->insert([
            [
                'nazwa' => 'admin',
                'opis' => 'Administrator systemu',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nazwa' => 'user',
                'opis' => 'Zwykły użytkownik',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
} 