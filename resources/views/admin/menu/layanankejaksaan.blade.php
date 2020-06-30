@extends('admin.index')
@section('layanankejaksaan')
<style>
    .content-wrapper {
        min-height: 100%;
        background-color: #ffff;
        z-index: 800;
    }

    .headormas {
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        background-color: #f5f5f5;
        border-radius: 4px;
    }

    .bg-konfirm {
        background-color: #06C36C;
    }

    .bg-proses {
        background-color: #00CCD9;
    }

    .bg-tolak {
        background-color: #F86767;
    }

    .small-boxs {
        border-radius: 5px;
        position: relative;
        display: block;
        height: 150px;
        margin-bottom: 20px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .small-boxs>.inner {
        padding: 10px;
    }

    .small-boxs>.small-boxs-footer {
        position: relative;
        text-align: center;
        padding: 3px 0;
        color: #fff;
        color: rgba(255, 255, 255, 0.8);
        display: block;
        z-index: 10;
        background: rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }

    .small-boxs>.small-boxs-footer:hover {
        color: #fff;
        background: rgba(0, 0, 0, 0.15);
    }

    .small-boxs h3 {
        font-size: 38px;
        margin: 0 0 10px 0;
        white-space: nowrap;
        color: #ffff;
        padding: 0;
        font-weight: bold;
    }

    .small-boxs p {
        font-size: 42px;
        color: #ffff;
        margin-top: 20px;
    }

    .small-boxs p>small {
        display: block;
        color: #f9f9f9;
        font-size: 13px;
        margin-top: 5px;
    }

    .small-boxs h3,
    .small-boxs p {
        z-index: 5;
    }

    .small-boxs .icon {
        -webkit-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
        position: absolute;
        top: -10px;
        right: 10px;
        z-index: 0;
        font-size: 90px;
        color: rgba(0, 0, 0, 0.15);
    }

    .small-boxs:hover {
        text-decoration: none;
        color: #f9f9f9;
    }

    .small-boxs:hover .icon {
        font-size: 95px;
    }

    @media (max-width: 767px) {
        .small-boxs {
            text-align: center;
        }

        .small-boxs .icon {
            display: none;
        }

        .small-boxs p {
            font-size: 12px;
        }
    }

    .nav-tabss {
        border-bottom: 1px solid transparent;
    }

</style>
<link rel="stylesheet" href="{{asset('includes/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css')}}">
<div class="content-header">
    <div class="container-fluid">
        <div>
            <div class="col-sm-12">
                <h1 class="m-0 text-dark">Layanan Kejaksaan</h1>
            </div><!-- /.col -->
            <div class="row">
                <div class="col-sm-12">
                    <ol class="headormas float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Layanan Kejaksaan</a></li>
                    </ol>
                </div>
            </div>
            <!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<section class="content">
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-lg-6 col-6">
                <!-- small box -->
                <a class="small-boxs bg-konfirm" href="{{route('pageantartilang')}}">
                    <div class="inner">
                        <h3>Antar Tilang</h3>
                        <p>{{$jumantar}}</p>
                    </div>
                </a>
            </div>
            <!-- ./col -->
            <div class="col-lg-6 col-6">
                <!-- small box -->
                <div class="small-boxs bg-proses">
                    <div class="inner">
                        <h3>Antar Barang Bukti</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <!-- /.row (main row) -->
        <div class="row">
            <section class="content-header">
                <section class="content-header" style="margin-bottom: 10px">
                    <h1>
                        List Tabel Tilang
                    </h1>
                </section>
            </section>
            <div class="row">
                <div class="col-xs-12">
                    <div style="padding-left:30px;padding-right:30px">
                        <div align="right">
                            <button class="btn btn-md btn-success" data-toggle="modal" data-target="#modalberkas"
                                style="padding:6px 6px; margin:0px 0px 10px 0px;">Tambah Tilang</button></div>
                        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
                        <table id="example" class="table table-bordered table-striped">
                            <thead style="background: #00A65A;color: #fff;">
                                <tr>
                                    <th>No</th>
                                    <th>No Tilang</th>
                                    <th>Nama Pelanggar</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Bukti</th>
                                    <th>No STNK</th>
                                    <th>Tanggal Pelanggaran</th>
                                    <th>Tanggal Sidang</th>
                                    <th>Lokasi Pengambilan</th>
                                    <th>Pasal</th>
                                    <th>Denda</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $x=1;
                                ?>
                                @foreach($data_tilang as $tilang)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$tilang->no_tilang}}</td>
                                    <td>{{$tilang->nama_pelanggar}}</td>
                                    <td>{{$tilang->jenkel}}</td>
                                    <td>{{$tilang->bukti}}</td>
                                    <td>{{$tilang->no_stnk}}</td>
                                    <td>{{$tilang->tglpel}}</td>
                                    <td>{{$tilang->tglsi}}</td>
                                    <td>{{$tilang->lokasi}}</td>
                                    <td>{{$tilang->pasal}}</td>
                                    <td>{{$tilang->denda}}</td>
                                    <td>
                                        <button class="btn btn-success" style="padding:3px 6px;" data-toggle="modal"
                                            data-target="#modalEdit{{$tilang->id}}"><i class="fa fa-edit"></i></button>
                                    </td>
                                    <div id="modalEdit{{$tilang->id}}" class="modal fade" role="dialog"
                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close"
                                                        data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">Edit Data Tilang</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <form action="{{route('editlay', ['id'=>$tilang->id])}}"
                                                        method="post">
                                                        {{csrf_field()}}
                                                        <div class="box-body">
                                                            <div class="form-group">
                                                                <label>No Tilang</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="no_tilang" value="{{$tilang->no_tilang}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Nama Pelanggar</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="nama_pelanggar" value="{{$tilang->nama_pelanggar}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="exampleInputEmail1">Jenis Kelamin</label>
                                                                <select name="jenkel" type="text" class="form-control"
                                                                    id="jenkel" placeholder="Masukkan Jenis Kelamin"
                                                                    required>
                                                                    <option value="{{$tilang->jenkel}}">{{$tilang->jenkel}}</option>
                                                                    <option value="laki-laki">Laki-laki</option>
                                                                    <option value="perempuan">Perempuan</option>
                                                                </select>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Bukti</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="bukti" value="{{$tilang->bukti}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>No STNK</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="no_stnk" value="{{$tilang->no_stnk}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="exampleFormControlInput1">Tanggal
                                                                    Pelanggaran</label>
                                                                <input type="date" class="form-control" name="tglpel"
                                                                    placeholder="Tanggal" value="{{$tilang->tglpel}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="exampleFormControlInput1">Tanggal
                                                                    Sidang</label>
                                                                <input type="date" class="form-control" name="tglsi"
                                                                    placeholder="Tanggal" value="{{$tilang->tglsi}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Lokasi Pengambilan</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="lokasi" value="{{$tilang->lokasi}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Pasal</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="pasal" value="{{$tilang->pasal}}">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Denda</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="denda" value="{{$tilang->denda}}">
                                                            </div>
                                                        </div>
                                                        <!-- /.box-body -->

                                                        <div class="box-footer">
                                                            <input type="submit" class="btn btn-success" name="simpan"
                                                                value="Simpan">
                                                            <button type="button" class="btn btn-secondary btn-md"
                                                                data-dismiss="modal">Cancel</button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </tr>
                                @endforeach
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>No Tilang</th>
                                    <th>Nama Pelanggar</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Bukti</th>
                                    <th>No STNK</th>
                                    <th>Tanggal Pelanggaran</th>
                                    <th>Tanggal Sidang</th>
                                    <th>Lokasi Pengambilan</th>
                                    <th>Pasal</th>
                                    <th>Denda</th>
                                    <th>Aksi</th>
                                </tr>
                            </tfoot>
                        </table>
                        <!-- /.box -->
                    </div>
                    <div id="modalberkas" class="modal fade" role="dialog" aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Tambah Data Tilang</h4>
                                </div>
                                <div class="modal-body">
                                    <form action="{{route('addtilang')}}" method="post" enctype="multipart/form-data">
                                        {{csrf_field()}}
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label>No Tilang</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="no_tilang">
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Pelanggar</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="nama_pelanggar">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Jenis Kelamin</label>
                                                <select name="jenkel" type="text" class="form-control" id="jenkel"
                                                    placeholder="Masukkan Jenis Kelamin" required>
                                                    <option value="">OPTION</option>
                                                    <option value="laki-laki">Laki-laki</option>
                                                    <option value="perempuan">Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Bukti</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="bukti">
                                            </div>
                                            <div class="form-group">
                                                <label>No STNK</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="no_stnk">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Tanggal Pelanggaran</label>
                                                <input type="date" class="form-control" name="tglpel"
                                                    placeholder="Tanggal">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Tanggal Sidang</label>
                                                <input type="date" class="form-control" name="tglsi"
                                                    placeholder="Tanggal">
                                            </div>
                                            <div class="form-group">
                                                <label>Lokasi Pengambilan</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="lokasi">
                                            </div>
                                            <div class="form-group">
                                                <label>Pasal</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="pasal">
                                            </div>
                                            <div class="form-group">
                                                <label>Denda</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="denda">
                                            </div>
                                        </div>
                                        <!-- /.box-body -->

                                        <div class="box-footer">
                                            <input type="submit" class="btn btn-success" name="simpan" value="Simpan">
                                            <button type="button" class="btn btn-secondary btn-md"
                                                data-dismiss="modal">Cancel</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- /.col -->
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>
@endsection
