<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maps extends Model
{
    protected $table = 'maps';
    protected $fillable = [
        'idmaps',
        'nama',
        'instansi',
        'nama_kegiatan',
        'instansi',
        'nilai',
        'lat',
        'lng'
    ];

}
