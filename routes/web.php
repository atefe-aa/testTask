<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\TopicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('download-pdf/{id}', [ProductController::class, 'downloadPdf']);


Route::get('topic', [TopicController::class, 'index']);

