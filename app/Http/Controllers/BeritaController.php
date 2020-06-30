<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use Validator;
use Alert;
use File;

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
    //admin
    public function berita()
    {
        $data = DB::table('berita')->where('tipe','=','ind')->get();
        return view('admin.menu.berita',compact('data'));
    }
    public function tambahberita()
    {
        return view('admin.menu.tambahberita');
    }
    public function uploadImage(Request $request)
    {
    //JIKA ADA DATA YANG DIKIRIMKAN
    if ($request->hasFile('upload')) {
        $file = $request->file('upload'); //SIMPAN SEMENTARA FILENYA KE VARIABLE
        $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME); //KITA GET ORIGINAL NAME-NYA
        //KEMUDIAN GENERATE NAMA YANG BARU KOMBINASI NAMA FILE + TIME
        $fileName = $fileName . '_' . time() . '.' . $file->getClientOriginalExtension();

        $file->move(public_path('uploads'), $fileName); //SIMPAN KE DALAM FOLDER PUBLIC/UPLOADS

        //KEMUDIAN KITA BUAT RESPONSE KE CKEDITOR
        $ckeditor = $request->input('CKEditorFuncNum');
        $url = asset('uploads/' . $fileName); 
        $msg = 'Image uploaded successfully'; 
        //DENGNA MENGIRIMKAN INFORMASI URL FILE DAN MESSAGE
        $response = "<script>window.parent.CKEDITOR.tools.callFunction($ckeditor, '$url', '$msg')</script>";

        //SET HEADERNYA
        @header('Content-type: text/html; charset=utf-8'); 
        return $response;
        }
        
    }
    public function create(Request $request)
    {
            $image = $request->file('image');

            $new_name = rand() . '.' . $image->getClientOriginalExtension();

            $image->move(public_path('images'), $new_name);

            $berita = new \App\Berita;
            $berita->tanggal = $request->tanggal;
            $berita->kategori = $request->kategori;
            $berita->judul = $request->judul;
            $berita->isi = $request->isi;
            $berita->gambar = $new_name;
            $berita->tipe = $request->tipe;
            $berita->admin_posting = $request->admin_posting;
            $berita->save();
            Alert::success('Tambah Berita Berhasil', 'Sukses');
            return redirect()->route('berita');
    }
    public function destroy($id)
        {
            $gambar =  DB::table('berita')->where('id',$id)->first();
            File::delete('images/'.$gambar->gambar);
            DB::table('berita')->where('id',$id)->delete();
            return redirect()->route('berita');
        
        }
    public function edit($id){
        $data = DB::table('berita')->where('id',$id)->get();
        return view('admin.menu.editberita',['data'=>$data]);
    }
    public function update(Request $request)
    {
        $image = $request->file('image');
        if($image!=null){
            $new_name = rand() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $new_name);
            $gambar =  DB::table('berita')->where('id',$request->id)->first();
            File::delete('images/'.$gambar->gambar);
        $form_data = array(
            
        
        'tanggal'         => $request->tanggal,
        'kategori'        => $request->kategori,
        'judul'           => $request->judul,
        'isi'             => $request->isi,
        'gambar'          => $new_name,
        'tipe'            => $request->tipe,
        'admin_posting'   => $request->admin_posting,
        );
        
        DB::table('berita')->where('id',$request->id)->update($form_data);
    
        return redirect()->route('berita')->with(['success' => 'Data is successfully updated']);}
        else{
            $form_data = array(
            
        
                'tanggal'         => $request->tanggal,
                'kategori'        => $request->kategori,
                'judul'           => $request->judul,
                'isi'             => $request->isi,
                'tipe'            => $request->tipe,
                'admin_posting'   => $request->admin_posting,
            );
            DB::table('berita')->where('id',$request->id)->update($form_data);
            return redirect()->route('berita')->with(['success' => 'Data is successfully updated']);
        }
    }
    public function showhome(){
    $beritahome = \App\Berita::paginate(3);
    return response()->json($beritahome);
    }
    public function showslider(){
        $beritaslide = \App\Berita::paginate(5);
        return response()->json($beritaslide);
    }
    public function showall()
    {
        $beritall = \App\Berita::all();
        return response()->json($beritall);
    }
}
