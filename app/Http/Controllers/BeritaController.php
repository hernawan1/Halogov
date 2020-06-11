<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
class BeritaController extends Controller
{
    public function index(){
        $berita = DB::table('berita')->where('tipe','=','ind')->get();
        return view('user.menu.berita',compact('berita'));
    }
    public function detail(){
        $detailberita = DB::table('berita')->get();
        return view('user.menu.detailberita');
    }
}
