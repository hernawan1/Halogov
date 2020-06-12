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
        ->select('lat', 'lng')
        ->where('pengajuan_form.status', '=', 'Approve')->get();
        $marker = [];
        $i = 0;
        foreach($laporan as $lpr){
            $marker[$i]=[$lpr->lat,$lpr->lng];
            $i++;
        }
        // return $marker;
        return view('user.menu.map', ['lpr'=>$marker]);
    }
}
