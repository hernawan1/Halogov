<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class EventController extends Controller
{
    public function index(){
        $data = DB::table('event')->where('tipe','=','ind')->get();
        return view('user.menu.event',compact('data'));
    }
    public function show($id){
        $data = DB::table('event')->where('id',$id)->first();
        $recent = DB::table('event')->where('tipe','=','ind')->limit(4)->inRandomOrder()->get();
        return view('user.menu.detailevent',compact('data','recent'));
    }
}
