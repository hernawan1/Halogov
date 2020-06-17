<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Validator;
use Alert;
use File;
class TeamController extends Controller
{
    public function index(){
        $data = DB::table('team')->get();
        return view('admin.menu.team',compact('data'));
    }
    public function tambahteam(Request $request){
        $image = $request->file('image');

        $new_name = rand() . '.' . $image->getClientOriginalExtension();

        $image->move(public_path('images'), $new_name);

        $team = new \App\Team;
        $team->nama_team = $request->nama;
        $team->posisi = $request->posisi;
        $team->gambar = $new_name;
        $team->quote = $request->quote;
        $team->save();
        Alert::success('Tambah Team Berhasil', 'Sukses');
        return redirect()->route('team');
    }
    public function destroy($id){
        $gambar =  DB::table('team')->where('id',$id)->first();
	    File::delete('images/'.$gambar->gambar);
        DB::table('team')->where('id',$id)->delete();
        return redirect()->route('team');
    }
    public function update(Request $request){
        $image = $request->file('image');
        if($image!=null){
        $new_name = rand() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $new_name);
        $gambar =  DB::table('team')->where('id',$request->id)->first();
        File::delete('images/'.$gambar->gambar);
        $form_data = array(
            'nama_team'         => $request->nama,
            'posisi'       => $request->posisi,
            'gambar'       =>$new_name,
            'quote'        =>$request->quote
          );
          
          DB::table('team')->where('id',$request->id)->update($form_data);
       
          return redirect()->route('team')->with(['success' => 'Data is successfully updated']);
        }
        else{
            $form_data = array(
                'nama_team'         => $request->nama,
                'posisi'       => $request->posisi,
                'quote'        =>$request->quote
              );
              
              DB::table('team')->where('id',$request->id)->update($form_data);
           
              return redirect()->route('team')->with(['success' => 'Data is successfully updated']);
        }
    }
}
