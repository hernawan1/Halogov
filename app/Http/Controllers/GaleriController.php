<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Alert;
use File;

class GaleriController extends Controller
{
    public function index(){
        $galeri = DB::table('gallery')->where('tipe', '=', 'galeri')->get();
        return view('user.menu.galeri',compact('galeri'));
    }
    //admin
    public function foto()
    {
        $data = DB::table('gallery')->where('tipe','=','galeri')->get();
        return view('admin.menu.foto',compact('data'));
    }
    public function tambahfoto(Request $request)
    {
        $image = $request->file('image');

        $new_name = rand() . '.' . $image->getClientOriginalExtension();

        $image->move(public_path('images'), $new_name);

        $galeri = new \App\Galeri;
        $galeri->deskripsi = $request->deskripsi;
        $galeri->nama= $new_name;
        $galeri->tipe= $request->tipe;
        $galeri->save();
        Alert::success('Tambah Foto Berhasil', 'Sukses');
        return redirect()->route('foto');
    }
    public function hapusfoto($id)
    {
        $gambar =  DB::table('gallery')->where('id',$id)->first();
	    File::delete('images/'.$gambar->nama);
        DB::table('gallery')->where('id',$id)->delete();
        return redirect()->route('foto');
    }
    public function editfoto(Request $request)
    {
        $image = $request->file('image');
        if($image!=null){
        $new_name = rand() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $new_name);
        $gambar =  DB::table('gallery')->where('id',$request->id)->first();
        File::delete('images/'.$gambar->nama);
        $form_data = array(
            'deskripsi'         => $request->deskripsi,
            'nama'              => $new_name,
          );
          
          DB::table('gallery')->where('id',$request->id)->update($form_data);
       
          return redirect()->route('foto')->with(['success' => 'Data is successfully updated']);
        }
        else{
            $form_data = array(
                'deskripsi'         => $request->deskripsi,
              );
              
              DB::table('gallery')->where('id',$request->id)->update($form_data);
           
              return redirect()->route('foto')->with(['success' => 'Data is successfully updated']);
        }
    }
    public function video()
    {
        $data = DB::table('gallery')->where('tipe','=','video')->get();
        
        return view('admin.menu.video',compact('data'));
    }
    public function tambahvideo(Request $request)
    {

        $galeri = new \App\Galeri;
        $link= $request->link;
        $yt = str_replace("https://youtu.be/","https://www.youtube.com/embed/",$link);
        $galeri->deskripsi = $request->deskripsi;
        $galeri->nama= $yt;
        $galeri->tipe= $request->tipe;
        $galeri->save();
        Alert::success('Tambah Video Berhasil', 'Sukses');
        return redirect()->route('video');
    }
    public function hapusvideo($id)
    {
        DB::table('gallery')->where('id',$id)->delete();
        return redirect()->route('video');
    }
}
