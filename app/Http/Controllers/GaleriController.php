<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class GaleriController extends Controller
{
    public function index(){
        $galeri = DB::table('gallery')->where('tipe', '=', 'galeri')->get();
        return view('user.menu.galeri',compact('galeri'));
    }
}
