@extends('admin.index')
@section('edit-berita')
<script src="/pathto/js/sweetalert.js"></script>
@include('sweet::alert')
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
             Berita 
         </h1>
         <ol class="breadcrumb">
             <li><a href="home"><i class="fa fa-dashboard"></i> Home</a></li>
             <li class="active"></li>
         </ol>
     </section>
     <section class="content-header">
         <div class="row">
             <div class="col-xs-12">
                 <div class="box">
                     <div class="box-body ">
                        @foreach($data as $d)
                         <form action="{{route('updateberita',$d->id)}}" method="POST" enctype="multipart/form-data">
                             {{csrf_field()}}
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Tanggal</label>
                                 <input type="hidden" class="form-control" name="id" placeholder="id" value="{{$d->id}}">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Tanggal</label>
                                 <input type="date" class="form-control" name="tanggal" placeholder="Tanggal" value="{{$d->tanggal}}">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Kategori</label>
                                 <input type="text" class="form-control" name="kategori" placeholder="Kategori" value="{{$d->kategori}}">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Judul</label>
                                 <input type="text" class="form-control" name="judul" placeholder="judul" value="{{$d->judul}}">
                             </div>
                             <div class="form-group">
                                 <input type="hidden" class="form-control" name="tipe"  value="ind" >
                             </div><div class="form-group">
                                 <input type="hidden" class="form-control" name="admin_posting" value="admin">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlTextarea1">Isi</label>
                                 <textarea class="form-control" name="isi" id="content" rows="8" value="{{$d->isi}}"></textarea>
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Gambar</label>
                                 <input type="file" class="form-control" name="image" value="{{$d->gambar}}">
                             </div>
                             
                             <input type="submit" class="btn btn-success" style="width:100%;" name="simpan" value="Simpan">
                         </form>
                         @endforeach
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
 </section>
 <script src="https://cdn.ckeditor.com/4.13.1/standard/ckeditor.js"></script>
 <script>
      	//HUBUNGKAN CKEDITOR DENGAN TEXTAREA YANG BERNAMA CONTENT
        //ADAPUN KONFIGURASI UPLOAD URLNYA MENGARAH KE ROUTE POST.IMAGE
        CKEDITOR.replace('content', {
            filebrowserUploadMethod: 'form'
        });
    </script>
    <link rel="stylesheet" type="text/css" href="/pathto/css/sweetalert.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
@endsection