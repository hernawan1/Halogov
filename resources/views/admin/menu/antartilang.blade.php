@extends('admin.index')
@section('antartilang')
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
                <h1 class="m-0 text-dark">Antar Tilang</h1>
            </div><!-- /.col -->
            <div class="row">
                <div class="col-sm-12">
                    <ol class="headormas float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Antar Tilang</a></li>
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
                <a class="small-boxs bg-proses" data-toggle="tab" href="#home">
                    <div class="inner">
                        <h3>Proses</h3>
                        <p>{{$cnproses}}</p>
                    </div>
                </a>
            </div>
            <!-- ./col -->
            <div class="col-lg-6 col-6">
                <!-- small box -->
                <a class="small-boxs bg-konfirm"  data-toggle="tab" href="#menu1">
                    <div class="inner">
                        <h3 data-toggle="tab" href="#menu1">Selesai</h3>
                        <p>{{$cnselesai}}</p>
                    </div>
                </a>
            </div>
            <!-- ./col -->
        </div>
        <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
                @include('admin.pengajuan.proses')
            </div>
            <div id="menu1" class="tab-pane fade">
                @include('admin.pengajuan.selesai')
            </div>
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <!-- /.row (main row) -->
    </div><!-- /.container-fluid -->
</section>
@endsection
