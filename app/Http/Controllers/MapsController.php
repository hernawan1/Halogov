<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maps;
use DB;

class MapsController extends Controller
{
    public function index(){
        $laporan = DB::table('lokasi')
        ->join('pengajuan_form', 'lokasi.id_pengajuan','=','pengajuan_form.id')
        ->where('pengajuan_form.status', '=', 'Approve')->get();
        return view('user.menu.map', compact('laporan'));
    }
}
