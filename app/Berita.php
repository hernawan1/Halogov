<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    protected $table = 'berita';
    protected $fillable = [
        'tanggal',
        'kategori',
        'judul',
        'isi',
        'gambar',
        'tipe',
        'admin_posting'
    ];
}
