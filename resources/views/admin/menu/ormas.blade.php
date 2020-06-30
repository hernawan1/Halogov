@extends('admin.index')
@section('ormas')
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
        background-color: #F9B917;
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
                <h1 class="m-0 text-dark">Ormas</h1>
            </div><!-- /.col -->
            <div class="row">
                <div class="col-sm-12">
                    <ol class="headormas float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Ormas</a></li>
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
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-boxs bg-konfirm">
                    <div class="inner">
                        <h3>Terkonfirmasi</h3>
                        <p>{{$totter}}</p>
                    </div>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-boxs bg-proses">
                    <div class="inner">
                        <h3>Proses</h3>
                        <p>{{$totpro}}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-boxs bg-tolak">
                    <div class="inner">
                        <h3>Tolak</h3>
                        <p>{{$tottol}}</p>
                    </div>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
            <div class="container-fluid">
                <ul class="nav nav-tabs">
                    <li class="active background-color: #01B764;"><a data-toggle="tab" href="#home">Agama</a></li>
                    <li><a data-toggle="tab" href="#menu1">Kemudaan</a></li>
                    <li><a data-toggle="tab" href="#menu2">Wanita</a></li>
                    <li><a data-toggle="tab" href="#menu3">Profesi</a></li>
                    <li><a data-toggle="tab" href="#menu4">Fungsi</a></li>
                </ul>
                <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        @include('admin.datatabel.agama')
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        @include('admin.datatabel.kemudaan')
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        @include('admin.datatabel.wanita')
                    </div>
                    <div id="menu3" class="tab-pane fade">
                        @include('admin.datatabel.profesi')
                    </div>
                    <div id="menu4" class="tab-pane fade">
                        @include('admin.datatabel.fungsi')
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row (main row) -->
        <div class="row">
            <section class="content-header">
                <section class="content-header" style="margin-bottom: 10px">
                    <h1>
                        Tabel Berkas
                    </h1>
                </section>
            </section>
            <div class="row">
                <div class="col-xs-12">
                    <div style="padding-left:30px;padding-right:30px">
                        <div align="right">
                            <button class="btn btn-md btn-success" data-toggle="modal" data-target="#modalberkas"
                                style="padding:6px 6px; margin:0px 0px 10px 0px;">Tambah Berkas</button></div>
                        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
                        <table id="example" class="table table-bordered table-striped">
                            <thead style="background: #00A65A;color: #fff;">
                                <tr>
                                    <th>No</th>
                                    <th>Deskripsi</th>
                                    <th>File PDF</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $x=1;
                                ?>
                                @foreach($data_berkas as $berkas)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$berkas->deskripsi}}</td>
                                    <td>
                                       <a href="{{ url('/berkas/'.$berkas->berkas) }}">{{$berkas->berkas}}<a>
                                    </td>
                                    <td>
                                        <button class="btn btn-success" style="padding:3px 6px;" data-toggle="modal"
                                            data-target="#modalEdit"><i class="fa fa-edit"></i></button>
                                        <button class="btn btn-danger" style="padding:3px 6px;" data-toggle="modal"
                                            data-target="#exampleModal"><i class="fa fa-trash-o"></i></button>
                                    </td>
                                    <div id="modalEdit" class="modal fade" role="dialog"
                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close"
                                                        data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">Edit Foto</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <form action="editfoto/" method="post"
                                                        enctype="multipart/form-data">
                                                        {{csrf_field()}}
                                                        <div class="box-body">
                                                            <div class="form-group">
                                                                <label>Deskripsi Gambar</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="deskripsi"
                                                                    value="">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Gambar</label>
                                                                <input type="file" name="image" multiple>
                                                                <p class="help-block">Upload Gambar Dari Komputer Anda
                                                                </p>
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
                                    <div id="exampleModal" class="modal fade" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">Konfirmasi</h4>
                                                    <button type="button" class="close"
                                                        data-dismiss="modal">&times;</button>

                                                </div>
                                                <div class="modal-body">
                                                    <a align="center" style="margin:0; font-size:20px;">Anda Yakin Ingin
                                                        Menghapus Data Ini?</a>
                                                </div>
                                                <div class="modal-footer">
                                                    <a href="hapusfoto/"><button type="button" name="ok_button"
                                                            class="btn btn-success btn-md">Hapus</button></a>
                                                    <button type="button" class="btn btn-secondary btn-md"
                                                        data-dismiss="modal">Cancel</button>
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
                                    <th>Deskripsi</th>
                                    <th>File PDF</th>
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
                                    <h4 class="modal-title">Tambah Berkas</h4>
                                </div>
                                <div class="modal-body">
                                    <form action="{{route('addberkas')}}" method="post" enctype="multipart/form-data">
                                        {{csrf_field()}}
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label>Deskripsi Berkas</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                                    name="deskripsi">

                                            </div>
                                            <div class="form-group">
                                                <label>Berkas</label>
                                                <input type="file" name="berkas" multiple>
                                                <p class="help-block">Upload Berkas Dari Komputer Anda</p>
                                            </div>
                                            <input type="hidden" name="tipe" value="berkas">
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
