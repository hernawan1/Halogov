<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tilang extends Model
{
    protected $table = 'tilang';
    protected $fillable = [
        'id',
        'no_tilang',
        'nama_pelanggar',
        'jenkel',
        'bukti',
        'no_stnk',
        'tglpel',
        'tglsi',
        'lokasi',
        'pasal',
        'denda'
    ];
}
