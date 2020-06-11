<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maps extends Model
{
    protected $table = 'lokasi';
    protected $fillable = [
        'nama',
        'lat',
        'lng',
    ];

}
