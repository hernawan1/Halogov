@extends('admin.index')
@section('tabeltp4d')
<!-- DataTables -->
<link rel="stylesheet" href="{{asset('includes/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css')}}">
<!-- Content Header (Page header) -->
<!-- Theme style -->
<style>
    .heading {
        padding: 10px 10px;
        border-radius: 2px;
        color: #FFF;
        background: #6aadf1;
        margin-bottom: 10px;
        font-size: 1.5em;
        text-align: center;
    }

</style>
<section class="content-header">
    <section class="content-header" style="margin-bottom: 10px">
        <h1>
            Tabel Maps TP4D
        </h1>
        <ol class="breadcrumb">
            <li><a href="home"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active"></li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-body ">
                        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
                        <table id="example" class="table table-bordered table-striped">
                            <thead style="background: #00A65A;color: #fff;">
                                <tr>
                                    <th>No</th>
                                    <th>Nama Penanggung Jawab</th>
                                    <th>Instansi</th>
                                    <th>Nama kegiatan</th>
                                    <th>Nilai</th>
                                    <th>Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $x=1;
                                ?>
                                @foreach($data_tabelmaps as $tbmaps)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$tbmaps->nama}}</td>
                                    <td>{{$tbmaps->instansi}}</td>
                                    <td>{{$tbmaps->nama_kegiatan}}</td>
                                    <td>Rp.{{ number_format($tbmaps->nilai, 2) }}</td>
                                    <td>
                                        <a href="{{route('lokasitp4d', ['id' => $tbmaps->idmaps])}}"><button class="btn btn-danger"
                                                style="padding:3px 6px;"><i class="fa fa-edit"></i>Lihat
                                                Lokasi</button></a>
                                    </td>
                                </tr>
                                <?php $x++; ?>
                                @endforeach
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Instansi</th>
                                    <th>Nama kegiatan</th>
                                    <th>Nilai</th>
                                    <th>Lokasi</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
    <!-- Default Size -->
    <!-- end Modal -->

    @endsection
