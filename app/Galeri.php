<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galeri extends Model
{
    protected $table = 'gallery';
    protected $fillable = [
        'id',
        'deksripsi',
        'nama',
        'tipe'
    ];
}
