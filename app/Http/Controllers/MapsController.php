<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maps;
use DB;
use Alert;

class MapsController extends Controller
{
    public function index(){
        $laporan = DB::table('maps')
        ->select('lat','lng')
        ->get();
        $marker = [];
        $i = 0;
        foreach($laporan as $lpr){
            $marker[$i]=[$lpr->lat,$lpr->lng];
            $i++;
        }
        // return $marker;       
        return view('user.menu.map', ['lpr'=>$marker]);
    }
    public function viewmaps(){
        $tp4dmaps = DB::table('maps')
        ->select('lat','lng')
        ->get();
        $locs = [];
        $i = 0;
        foreach($tp4dmaps as $tpmap){
            $locs[$i]=[$tpmap->lat,$tpmap->lng];
            $i++;
        }
        // return $locs;
        return view('admin.menu.maptp4d', ['locs'=>$locs]);
    }
    public function maps(){
        return view('admin.menu.tp4d');
    }
    public function tabelmaps(){
        $tabelmaps = \App\Maps::all();
        return view('admin.menu.tabeltp4d',['data_tabelmaps'=>$tabelmaps]);
    }
    public function create(Request $request){
        $map = new \App\Maps;
        $map->nama = $request->nama;
        $map->instansi = $request->instansi;
        $map->nama_kegiatan = $request->nama_kegiatan;
        $map->nilai = $request->nilai;
        $map->lat = $request->lat;
        $map->lng = $request->lng;
        $map->save();
        // Alert::success('pesan yang ingin disampaikan', 'Judul Pesan');
        // return view('admin.menu.tp4d');
        return redirect()->back();
    }
    public function routemaps($id){
        $routemaps = DB::table('maps')
        ->select('lat','lng')
        ->where('idmaps', $id)
        ->get();
        $lok = [];
        $i = 0;
        foreach($routemaps as $rtmaps){
            $lok[$i]=[$rtmaps->lat,$rtmaps->lng];
            $i++;
        }
        // return $lok;
        return view('admin.menu.lokasitp4d', ['lok'=>$lok]);
    }
}
