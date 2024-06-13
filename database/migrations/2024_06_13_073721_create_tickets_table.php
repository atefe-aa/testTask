<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', static function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('topic_id');
            $table->longText('body');
            $table->timestamps();

            $table->foreign('topic_id')->on('topics')->references('topic_id')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
