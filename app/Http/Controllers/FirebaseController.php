<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;

class FirebaseController extends Controller
{
    public function index(){
        $firebase = (new Factory)
            ->withServiceAccount('\halogov-cf6ef-6b8441dcc86a.json')
            ->create();
        $database = $firebase->getDatabase();
        $ref = $database->getReference('messages');
        $key->push()->getKey();

        return $key;
    }
}
