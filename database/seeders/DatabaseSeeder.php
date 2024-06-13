<?php

namespace Database\Seeders;

use App\Models\Ticket;
use App\Models\Topic;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Topic::factory(10)->create();
        Ticket::factory(100)->create();
    }
}
