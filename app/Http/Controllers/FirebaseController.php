<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use App\Users;
use Response;

class FirebaseController extends Controller
{
    public function createuser(Request $request){
        Users::create([
            "username"=>$request->username,
            "uid"=>$request->uid,
            "nickname"=>$request->nickname,
            "gambar"=>$request->gambar,
            "level"=>$request->level
        ]);
        return response()->json($request->all());
    }
}
