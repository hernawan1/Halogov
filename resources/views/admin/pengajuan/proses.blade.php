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
<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="row">
                <h1 class="m-0 text-dark">Tabel Tilang Pengajuan</h1>
                <div class="box">
                    <div class="box-body ">
                        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
                        <table id="example" class="table table-bordered table-striped">
                            <thead style="background: #00A65A;color: #fff;">
                                <tr>
                                    <th>No</th>
                                    <th>Nomer Tilang</th>
                                    <th>Nama Pelanggar</th>
                                    <th>Bukti</th>
                                    <th>Nomer STNK</th>
                                    <th>Tanggal Sidang</th>
                                    <th>Pasal</th>
                                    <th>Denda</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                        $x=1;
                    ?>
                                @foreach($dataproses as $proses)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$proses->no_tilang}}</td>
                                    <td>{{$proses->nama_pelanggar}}</td>
                                    <td>{{$proses->bukti}}</td>
                                    <td>{{$proses->no_stnk}}</td>
                                    <td>{{$proses->tglsi}}</td>
                                    <td>{{$proses->pasal}}</td>
                                    <td>Rp.{{number_format($proses->denda, 2)}}</td>
                                    <td>{{$proses->status}}</td>
                                    <td>
                                        <button class="btn btn-success" style="padding:3px 6px;" data-toggle="modal"
                                            data-target="#modalEdit{{$proses->id}}"><i class="">Antar</i></button>
                                    </td>
                                    <div id="modalEdit{{$proses->id}}" class="modal fade" role="dialog"
                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close"
                                                        data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">Apakah Anda Setuju Mengatarkan Tilang ini</h4>
                                                </div>
                                                <div class="modal-body">
                                               
                                                    <form action="{{route('actionantar', ['id'=>$proses->id])}}" method="post"
                                                        enctype="multipart/form-data">
                                                        {{csrf_field()}}
                                                        <!-- /.box-body -->
                                                        <div class="box-body">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"
                                                                    id="exampleFormControlInput1" name="status"
                                                                    value="Antar" readonly>
                                                            </div>
                                                        </div>
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
                                <?php $x++; ?>
                                @endforeach

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>Nomer Tilang</th>
                                    <th>Nama Pelanggar</th>
                                    <th>Bukti</th>
                                    <th>Nomer STNK</th>
                                    <th>Tanggal Sidang</th>
                                    <th>Pasal</th>
                                    <th>Denda</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
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
