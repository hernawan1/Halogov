<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = 'user';
    protected $fillable = [
        'id',
        'username',
        'uid',
        'nickname',
        'password',
        'gambar',
        'token',
        'level',
    ];
}
