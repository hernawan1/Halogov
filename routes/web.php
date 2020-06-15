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
Route::get('/berita', 'BeritaController@index')->name('berita');
Route::get('/detail-berita/{id}', 'BeritaController@show')->name('detail-berita');
Route::get('/event', 'EventController@index')->name('event');
Route::get('/detail-event/{id}', 'EventController@show')->name('detail-event');
Route::get('/galeri', 'GaleriController@index')->name('galeri');
Route::get('/kontak','HomeController@kontak')->name('kontak');
Route::get('/aplikasi','HomeController@aplikasi')->name('aplikasi');
Route::get('/form-pengajuan','HomeController@form')->name('form-pengajuan');
Route::get('/login', 'LoginController@login')->name('login');



//Admin
Route::get('/admin/beranda', 'AdminController@index')->name('beranda');
Route::get('/admin/formtp4d', 'MapsController@maps')->name('formtp4d');
Route::get('/admin/mapsall', 'MapsController@viewmaps')->name('viewmaps');
Route::get('/admin/tabeltp4d', 'MapsController@tabelmaps')->name('tabelmaps');
Route::get('/admin/LokasiTP4D/{id}','MapsController@routemaps')->name('lokasitp4d');
Route::get('/admin/viewmapall', 'MapsController@viewmaps')->name('viewmapsall');
Route::post('/admin/addtp4d', [
    'uses' => 'MapsController@create',
    'as' => 'tp4d.tambah'
]);
Route::get('/firebase', 'FirebaseController@index')->name('coba');



