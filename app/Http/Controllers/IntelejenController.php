<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use File;

class IntelejenController extends Controller
{
    public function ormas(){
        $tabelagama = \App\Ormas::all()->where('kategori','=','agama');
        $tabelkemudaan = \App\Ormas::all()->where('kategori','=','kemudaan');
        $tabelwanita = \App\Ormas::all()->where('kategori','=','wanita');
        $tabelprofesi= \App\Ormas::all()->where('kategori','=','profesi');
        $tabelfungsi= \App\Ormas::all()->where('kategori','=','fungsi');
        $berkas = \App\Berkas::all();
        $totpro = DB::table('ormas')->where('status','=','proses')
        ->count();
        $totter = DB::table('ormas')->where('status','=','terkonfirmasi')
        ->count();
        $tottol = DB::table('ormas')->where('status','=','tolak')
        ->count();
        return view('admin.menu.ormas',['data_ormas'=>$tabelagama, 'data_kemudaan'=>$tabelkemudaan, 'data_wanita'=>$tabelwanita, 'data_profesi'=>$tabelprofesi, 'data_fungsi'=>$tabelfungsi,'data_berkas'=>$berkas,'totpro'=>$totpro,'totter'=>$totter,'tottol'=>$tottol]);
    }
    public function addormas(Request $request){
        $ors = new \App\Ormas;
        $ors->nama = $request->nama;
        $ors->ketua = $request->ketua;
        $ors->pendiri = $request->pendiri;
        $ors->alamat = $request->alamat;
        $ors->status = $request->status;
        $ors->kategori = $request->kategori;
        $ors->save();
        return redirect()->route('ormas');
    }
    public function editormas(Request $request, $id){
        $edit = \App\Ormas::find($id)->update($request->all());
        return redirect()->route('ormas');
    }
    public function hapusormas($id)
    {
        DB::table('ormas')->where('id',$id)->delete();
        return redirect()->route('ormas');
    }
    public function addberkas(Request $request)
    {
        $berkas = $request->file('berkas');

        $new_name = rand() . '.' . $berkas->getClientOriginalExtension();

        $berkas->move(public_path('berkas'), $new_name);

        $berkas = new \App\Berkas;
        $berkas->deskripsi = $request->deskripsi;
        $berkas->berkas= $new_name;
        $berkas->tipe= $request->tipe;
        $berkas->save();
        return redirect()->route('ormas');
    }

    //TOTAL KATEGORI
    public function prosesor(){
        $totpro = DB::table('ormas')->where('status','=','proses')
        ->count();
        return response()->json($totpro);
    }
    public function tersor(){
        $totter = DB::table('ormas')->where('status','=','terkonfirmasi')
        ->count();
        return response()->json($totter);
    }
    public function tolor(){
        $tottol = DB::table('ormas')->where('status','=','tolak')
        ->count();
        return response()->json($tottol);
    }
    //AGAMA
    public function oragama(){
        $orgama = \App\Ormas::where('status', '=', 'terkonfirmasi')->where('kategori','=','agama')->paginate(3);
        return response()->json($orgama);
    }
    public function allagama(){
        $allagama = \App\Ormas::all()->where('status', '=', 'terkonfirmasi')->where('kategori','=','agama');
        return response()->json($allagama);
    }
    //BERKAS
    public function showberkas(){
        $shberkas = \App\Berkas::all();
        return response()->json($shberkas);
    }
}
