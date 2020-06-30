<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Antartilang extends Model
{
    protected $table = 'antartilang';
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
        'denda',
        'alamat',
        'status'
    ];
}
