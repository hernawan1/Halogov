<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        return view('index');
    }
    public function home()
    {
        return view('user.menu.home');
    }
    public function mengenal()
    {
        return view('user.menu.mengenal-tp4d');
    }
    public function mekanisme()
    {
        return view('user.menu.mekanisme');
    }
    public function struktur()
    {
        return view('user.menu.struktur');
    }
    public function berita()
    {
        return view('user.menu.berita');
    }
    public function detailberita()
    {
        return view('user.menu.detailberita');
    }
    public function event()
    {
        return view('user.menu.event');
    }
    public function detailevent()
    {
        return view('user.menu.detailevent');
    }
    public function galeri()
    {
        return view('user.menu.galeri');
    }
    public function aplikasi()
    {
        return view('user.menu.aplikasi');
    }
    public function kontak()
    {
        return view('user.menu.kontak');
    }
    public function form()
    {
        return view('user.menu.formpengajuan');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    
}
