<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ormas extends Model
{
    protected $table = 'ormas';
    protected $fillable = [
        'id',
        'nama',
        'ketua',
        'pendiri',
        'alamat',
        'status',
        'kategori'
    ];
}
