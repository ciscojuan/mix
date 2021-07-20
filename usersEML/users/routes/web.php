<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* Route::get('/usuarios', [UsuariosController::class, 'index']);

Route::get('/usuarios/form', [UsuariosController::class, 'form']);

Route::get('/usuarios/update',  [UsuariosController::class, 'update']);

Route::get('/usuarios/create',  [UsuariosController::class, 'create']); */

Route::resource('usuarios','\App\Http\Controllers\UsuariosController');

