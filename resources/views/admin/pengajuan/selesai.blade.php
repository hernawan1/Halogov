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
                <h1 class="m-0 text-dark">Tabel Antar Tilang</h1>
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
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                        $x=1;
                    ?>
                                @foreach($dataselesai as $selesai)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$selesai->no_tilang}}</td>
                                    <td>{{$selesai->nama_pelanggar}}</td>
                                    <td>{{$selesai->bukti}}</td>
                                    <td>{{$selesai->no_stnk}}</td>
                                    <td>{{$selesai->tglsi}}</td>
                                    <td>{{$selesai->pasal}}</td>
                                    <td>Rp.{{number_format($selesai->denda, 2)}}</td>
                                    <td>{{$selesai->status}}</td>
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
