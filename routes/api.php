<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//API BERITA
Route::get('showhome', 'BeritaController@showhome');
Route::get('showslider', 'BeritaController@showslider');
Route::get('showall', 'BeritaController@showall');
//API INTELEJEN
Route::get('prosesor', 'IntelejenController@prosesor');
Route::get('tersor', 'IntelejenController@tersor');
Route::get('tolor', 'IntelejenController@tolor');
Route::get('oragama', 'IntelejenController@oragama');
Route::get('allagama', 'IntelejenController@allagama');
Route::get('shberkas', 'IntelejenController@showberkas');

//Tilang
Route::post('cektilang', 'LayananKejaksaanController@cektilang');

//Firebase
Route::post('createuser','FirebaseController@createuser');
