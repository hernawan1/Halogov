<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class BeritaController extends Controller
{
    public function index(){
        $data = DB::table('berita')->where('tipe','=','ind')->get();
        return view('user.menu.berita',compact('data'));
    }
    public function show($id){
        $data = DB::table('berita')->where('id',$id)->first();
        $recent = DB::table('berita')->where('tipe','=','ind')->limit(2)->inRandomOrder()->get();
        return view('user.menu.detailberita',compact('data','recent'));
    }
    
}
