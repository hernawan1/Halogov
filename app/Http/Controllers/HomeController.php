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

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    
}
