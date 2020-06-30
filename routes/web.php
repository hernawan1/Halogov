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

//user
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
Route::get('/admin/berita', 'BeritaController@berita')->name('berita');
Route::get('/admin/tambahberita', 'BeritaController@tambahberita')->name('tambah-berita');
Route::post('/admin/addberita', 'BeritaController@create')->name('addberita');
Route::get('/admin/hapusberita/{id}', 'BeritaController@destroy')->name('hapusberita');
Route::get('/admin/editberita/{id}', 'BeritaController@edit')->name('editberita');
Route::post('/admin/updateberita/{id}', 'BeritaController@update')->name('updateberita');
Route::get('/admin/foto', 'GaleriController@foto')->name('foto');
Route::post('/admin/addfoto', 'GaleriController@tambahfoto')->name('addfoto');
Route::get('/admin/hapusfoto/{id}', 'GaleriController@hapusfoto')->name('hapusfoto');
Route::post('/admin/editfoto/{id}', 'GaleriController@editfoto')->name('editfoto');
Route::get('/admin/video', 'GaleriController@video')->name('video');
Route::post('/admin/addvideo', 'GaleriController@tambahvideo')->name('addvideo');
Route::get('/admin/hapusvideo/{id}', 'GaleriController@hapusvideo')->name('hapusvideo');
Route::get('/admin/team', 'TeamController@index')->name('team');
Route::post('/admin/addteam', 'TeamController@tambahteam')->name('addteam');
Route::get('/admin/hapusteam/{id}', 'TeamController@destroy')->name('hapusteam');
Route::post('/admin/editteam/{id}', 'TeamController@update')->name('editteam');
Route::get('/firebase', 'FirebaseController@index')->name('coba');

//Intelejen
Route::get('/intelejen/ormas', 'IntelejenController@ormas')->name('ormas');
Route::post('/admin/tambahormas', 'IntelejenController@addormas')->name('addormas');
Route::get('/admin/agama', 'IntelejenController@agama')->name('agama');
Route::post('/admin/berkas', 'IntelejenController@addberkas')->name('addberkas');
Route::get('/admin/layanankejaksaan', 'LayananKejaksaanController@layanankejaksaan')->name('layanankejaksaan');
Route::post('/admin/addtilang', 'LayananKejaksaanController@addtilang')->name('addtilang');
Route::get('/admin/antartilang','LayananKejaksaanController@pageantartilang')->name('pageantartilang');
Route::post('/antar/{id}','LayananKejaksaanController@actionantar')->name('actionantar');
Route::post('/edit/{id}','LayananKejaksaanController@editlayanan')->name('editlay');
Route::post('/editormas/{id}',  'IntelejenController@editormas')->name('editormas');
Route::get('/hapusormas/{id}', 'IntelejenController@hapusormas')->name('hapusormas');

//Coba
Route::get('/test', 'layananKejaksaanController@pagetilang')->name('test');
Route::get('/coba', 'LayananKejaksaanController@cektilangweb')->name('coba');
Route::post('/coba2','LayananKejaksaanController@antartilang')->name('coba2');

