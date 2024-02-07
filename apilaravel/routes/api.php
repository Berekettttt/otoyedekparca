<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\RegisterController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [LoginController::class, 'login']);
Route::post('/users', [LoginController::class, 'store']);
Route::get('/users/{id}', [LoginController::class, 'show']);
Route::put('/users/{id}', [LoginController::class, 'update']);
Route::delete('/users/{id}', [LoginController::class, 'destroy']);

Route::post('/products', [ProductController::class, 'products']);
Route::get('/products/all', [ProductController::class, 'getAllProducts']);
Route::get('/products/{id}', [ProductController::class, 'show']);


Route::post('/register', [RegisterController::class, 'register']);
Route::post('/register/store', [RegisterController::class, 'store']); 
Route::get('/register/{id}', [RegisterController::class, 'show']);

