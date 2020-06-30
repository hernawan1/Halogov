<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class LayananKejaksaanController extends Controller
{
    public function layanankejaksaan(){
        $datatilang = \App\Tilang::all();
        $coun = \App\Antartilang::all()->count();
        return view('admin.menu.layanankejaksaan',['data_tilang'=>$datatilang,'jumantar'=>$coun]);
    }
    public function pagetilang(){
        return view('user.menu.ambiltilang');
    }
    public function pageantartilang(){
        $cnproses = \App\AntarTilang::where('status','=','proses')->count();
        $cnselesai = \App\AntarTilang::where('status','=','Antar')->count();
        $dataproses = \App\AntarTilang::where('status','=','proses')->get();
        $dataselesai = \App\AntarTilang::where('status','=','Antar')->get();
        return view('admin.menu.antartilang',['cnproses'=>$cnproses,'cnselesai'=>$cnselesai,'dataproses'=>$dataproses,'dataselesai'=>$dataselesai]);
    }
    public function actionantar(Request $request,$id){
        $action = \App\AntarTilang::find($id)->update($request->all());
        return redirect()->route('pageantartilang');
    }
    public function editlayanan(Request $request, $id){
        $edit = \App\Tilang::find($id)->update($request->all());
        return redirect()->route('layanankejaksaan');
    }
    public function addtilang(Request $request){
        $tamtil = new \App\Tilang;
        $tamtil->no_tilang = $request->no_tilang;
        $tamtil->nama_pelanggar = $request->nama_pelanggar;
        $tamtil->jenkel = $request->jenkel;
        $tamtil->bukti = $request->bukti;
        $tamtil->no_stnk = $request->no_stnk;
        $tamtil->tglpel = $request->tglpel;
        $tamtil->tglsi = $request->tglsi;
        $tamtil->lokasi = $request->lokasi;
        $tamtil->pasal = $request->pasal;
        $tamtil->denda = $request->denda;
        $tamtil->save();
        return redirect()->route('layanankejaksaan');
    }
    public function cektilangweb(Request $request){
        $cektil = \App\Tilang::where('no_tilang', $request->no_tilang)->get();
        // return $cektil;
        // return response()->json(["data" =>$cektil]);
        return view('user.menu.coba',['cektil'=>$cektil]);
    }
    public function cektilang(Request $request){
        $cektil = \App\Tilang::where('no_tilang', $request->no_tilang)->get();
        // return $cektil;
        return response()->json(["data" =>$cektil]);
        // return view('user.menu.coba',['cektil'=>$cektil]);
    }
    public function antartilangweb(Request $request){
        $antartil = new \App\Antartilang;
        $antartil->no_tilang = $request->no_tilang;
        $antartil->nama_pelanggar = $request->nama_pelanggar;
        $antartil->jenkel = $request->jenkel;
        $antartil->bukti = $request->bukti;
        $antartil->no_stnk = $request->no_stnk;
        $antartil->tglpel = $request->tglpel;
        $antartil->tglsi = $request->tglsi;
        $antartil->lokasi = $request->lokasi;
        $antartil->pasal = $request->pasal;
        $antartil->denda = $request->denda;
        $antartil->alamat = $request->alamat;
        $antartil->status = "proses";
        $antartil->save();
        $delet = DB::table('tilang')->where('no_tilang', $request->no_tilang)->delete();
        return redirect()->route('test');
    }
    public function antartilang(Request $request){
        $antartil = new \App\Antartilang;
        $antartil->no_tilang = $request->no_tilang;
        $antartil->nama_pelanggar = $request->nama_pelanggar;
        $antartil->jenkel = $request->jenkel;
        $antartil->bukti = $request->bukti;
        $antartil->no_stnk = $request->no_stnk;
        $antartil->tglpel = $request->tglpel;
        $antartil->tglsi = $request->tglsi;
        $antartil->lokasi = $request->lokasi;
        $antartil->pasal = $request->pasal;
        $antartil->denda = $request->denda;
        $antartil->alamat = $request->alamat;
        $antartil->status = "proses";
        $antartil->save();
        $delet = DB::table('tilang')->where('no_tilang', $request->no_tilang)->delete();
        return response()->json($hapus);
    }
}
