@extends('admin.index')
@section('video')
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
            Tabel Video 
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
                    <div align="right">
                    <button class="btn btn-md btn-success"
                    data-toggle="modal" data-target="#modalTambah" style="padding:6px 6px; margin:0px 0px 10px 0px;">Tambah Video</button></div>
                        <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#showModal"><i class="fa fa-plus"></i> Tambah Data</button> -->
                        <table id="example" class="table table-bordered table-striped">
                            <thead style="background: #00A65A;color: #fff;">
                                <tr>
                                    <th>No</th>
                                    <th>Deskripsi</th>
                                    <th>Video</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $x=1;
                                ?>
                                @foreach($data as $d)
                                <tr>
                                    <td><?=$x?></td>
                                    <td>{{$d->deskripsi}}</td>
                                    <?php $ubah = str_replace("watch?v=","embed/",$d->nama);?>
                                    <td><center><iframe style="width:50%;"src="<?php echo $ubah;?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center></td>
                                    <td>
                                               <button class="btn btn-danger"
                                                style="padding:3px 6px;" data-toggle="modal" data-target="#exampleModal{{$d->id}}"><i class="fa fa-trash-o"></i></button>
                                    </td>
                                    <div id="exampleModal{{$d->id}}" class="modal fade" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h4 class="modal-title">Konfirmasi</h4>
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    
                                                </div>
                                                <div class="modal-body">
                                                    <a align="center" style="margin:0; font-size:20px;">Anda Yakin Ingin Menghapus Data Ini?</a>
                                                </div>
                                                <div class="modal-footer">
                                                    <a href="hapusvideo/{{$d->id}}"><button type="button" name="ok_button"  class="btn btn-success btn-md">Hapus</button></a>
                                                    <button type="button" class="btn btn-secondary btn-md" data-dismiss="modal">Cancel</button>
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
                                    <th>video</th>
                                    <th>Aksi</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <div id="modalTambah" class="modal fade" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title">Tambah Video</h4>  
                                                </div>
                                                <div class="modal-body">
                                                <form action="{{route('addvideo')}}" method="post" enctype="multipart/form-data">
                                                {{csrf_field()}}
                                                    <div class="box-body">
                                                        <div class="form-group">
                                                            <label>Deskripsi Video</label>
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" name="deskripsi" >
                                                        
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Link youtube</label>
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" name="link" >
                                                        
                                                        </div>
                                                        <input type="hidden" name="tipe" value="video">
                                                    </div>
                                                    <!-- /.box-body -->

                                                    <div class="box-footer">
                                                    <input type="submit" class="btn btn-success" name="simpan" value="Simpan">
                                                    <button type="button" class="btn btn-secondary btn-md" data-dismiss="modal">Cancel</button>
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
</section>
@endsection