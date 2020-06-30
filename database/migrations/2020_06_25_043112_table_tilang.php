<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TableTilang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tilang', function (Blueprint $table) {
            $table->id('idtilang');
            $table->string('no_tilang');
            $table->string('nama_pelanggar');
            $table->string('jenkel');
            $table->string('bukti');
            $table->date('tglpel');
            $table->date('tglsi');
            $table->string('lokasi');
            $table->string('pasal');
            $table->integer('denda');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tilang');
    }
}
