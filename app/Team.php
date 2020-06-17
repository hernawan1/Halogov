<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'team';
    protected $fillable = [
        'id',
        'nama_team',
        'posisi',
        'gambar',
        'quote',
    ];
}