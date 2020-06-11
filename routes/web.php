<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/', 'HomeController@home')->name('home');
Route::get('/home', 'HomeController@home')->name('home');
Route::get('/mengenal-tp4d', 'HomeController@mengenal')->name('mengenal');
Route::get('/mekanisme-tp4d', 'HomeController@mekanisme')->name('mekanisme');
Route::get('/strukturorganisasi', 'HomeController@struktur')->name('struktur');
Route::get('/map', 'MapsController@index')->name('map');
Route::get('/firebase', 'FirebaseController@index')->name('coba');



