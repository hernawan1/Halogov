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
            <div align="right">
                <button class="btn btn-md btn-success" data-toggle="modal" data-target="#modalfungsi"
                    style="padding:6px 6px; margin:0px 0px 10px 0px;">Tambah Ormas</button></div>
            <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
            <table id="example" class="table table-bordered table-striped">
                <thead style="background: #00A65A;color: #fff;">
                    <tr>
                        <th>No</th>
                        <th>Nama Ormas</th>
                        <th>Ketua Ormas</th>
                        <th>Pendiri Ormas</th>
                        <th>Alamat Ormas</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $x=1;
                    ?>
                    @foreach($data_fungsi as $fungsi)
                    <tr>
                        <td><?=$x?></td>
                        <td>{{$fungsi->nama}}</td>
                        <td>{{$fungsi->ketua}}</td>
                        <td>{{$fungsi->pendiri}}</td>
                        <td>{{$fungsi->alamat}}</td>
                        <td>{{$fungsi->status}}</td>
                        <td>
                            <button class="btn btn-success" style="padding:3px 6px;" data-toggle="modal"
                                data-target="#modalEditfungsi{{$fungsi->id}}"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger" style="padding:3px 6px;" data-toggle="modal"
                                data-target="#modalHapusFungsi"><i class="fa fa-trash-o"></i></button>
                        </td>
                        <div id="modalEditfungsi{{$fungsi->id}}" class="modal fade" role="dialog"
                            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Edit Foto</h4>
                                    </div>
                                    <div class="modal-body">
                                        <form action="{{route('editormas', ['id'=>$fungsi->id])}}" method="post" enctype="multipart/form-data">
                                            {{csrf_field()}}
                                            <div class="box-body">
                                                <div class="form-group">
                                                    <label>Nama Ormas</label>
                                                    <input type="text" class="form-control"
                                                        id="exampleFormControlInput1" name="nama"
                                                        value="{{$fungsi->nama}}">
                                                </div>
                                                <div class="form-group">
                                                    <label>Ketua Ormas</label>
                                                    <input type="text" class="form-control"
                                                        id="exampleFormControlInput1" name="ketua"
                                                        value="{{$fungsi->ketua}}">
                                                </div>
                                                <div class="form-group">
                                                    <label>Nama Pendiri</label>
                                                    <input type="text" class="form-control"
                                                        id="exampleFormControlInput1" name="pendiri"
                                                        value="{{$fungsi->pendiri}}">
                                                </div>
                                                <div class="form-group">
                                                    <label>Alamat Ormas</label>
                                                    <input type="text" class="form-control"
                                                        id="exampleFormControlInput1" name="alamat"
                                                        value="{{$fungsi->alamat}}">
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Status</label>
                                                    <select name="status" type="text" class="form-control" id="jenkel"
                                                        placeholder="Masukkan Jenis Kelamin" required>
                                                        <option value="">{{$fungsi->status}}</option>
                                                        <option value="proses">Proses</option>
                                                        <option value="terkonfirmasi">Terkonfirmasi</option>
                                                        <option value="tolak">Tolak</option>
                                                    </select>
                                                </div>
                                                <input type="hidden" name="kategori" value="fungsi">
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
                        <div id="modalHapusFungsi" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Konfirmasi</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <a align="center" style="margin:0; font-size:20px;">Anda Yakin Ingin
                                            Menghapus Data Ini?</a>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="{{route('hapusormas', ['id'=>$fungsi->id])}}"><button type="button" name="ok_button"
                                                class="btn btn-success btn-md">Hapus</button></a>
                                        <button type="button" class="btn btn-secondary btn-md"
                                            data-dismiss="modal">Cancel</button>
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
                        <th>Nama Ormas</th>
                        <th>Ketua Ormas</th>
                        <th>Pendiri Ormas</th>
                        <th>Alamat Ormas</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div id="modalfungsi" class="modal fade" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Tambah Ormas</h4>
                    </div>
                    <div class="modal-body">
                        <form action="{{route('addormas')}}" method="post" enctype="multipart/form-data">
                            {{csrf_field()}}
                            <div class="box-body">
                                <div class="form-group">
                                    <label>Nama Ormas</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="nama">
                                </div>
                                <div class="form-group">
                                    <label>Ketua Ormas</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="ketua">
                                </div>
                                <div class="form-group">
                                    <label>Pendiri Ormas</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        name="pendiri">
                                </div>
                                <div class="form-group">
                                    <label>Alamat Ormas</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="alamat">
                                </div>
                                <div class="form-group">
                                    <label>Nama Pendiri</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="nama">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Status</label>
                                    <select name="status" type="text" class="form-control" id="jenkel"
                                        placeholder="Masukkan Jenis Kelamin" required>
                                        <option value="">OPTION</option>
                                        <option value="proses">Proses</option>
                                        <option value="terkonfirmasi">Terkonfirmasi</option>
                                        <option value="tolak">Tolak</option>
                                    </select>
                                </div>
                                <input type="hidden" name="kategori" value="fungsi">
                            </div>
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
        <!-- /.col -->
    </div>
    <!-- /.row -->
</section>
<!-- /.content -->
<!-- Default Size -->
<!-- end Modal -->
