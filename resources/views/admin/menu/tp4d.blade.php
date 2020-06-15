 @extends('admin.index')
 @section('addtp4d')
 <!-- DataTables -->
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
             Form Lokasi TP4D
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
                         <form action="{{route('tp4d.tambah')}}" method="POST">
                             {{csrf_field()}}
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Nama Penangung Jawab</label>
                                 <input type="text" class="form-control" name="nama" placeholder="Instansi Pemohon">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Nama Instansi</label>
                                 <input type="text" class="form-control" name="instansi" placeholder="Instansi Pemohon">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlTextarea1">Nama Kegiatan</label>
                                 <textarea class="form-control" name="nama_kegiatan" rows="3"></textarea>
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Nilai Kegiatan</label>
                                 <input type="number" class="form-control" name="nilai" placeholder="Nilai Kegiatan">
                             </div>
                             <div class="form-group">
                                 <label for="exampleFormControlInput1">Alamat: </label>
                                 <input type="text" id="searchTextField" name="alamat_dept" class="form-control">
                                 <input type="hidden" name="lat" id="cityLat" value="0" />
                                 <input type="hidden" name="lng" id="cityLng" value="0" />
                             </div>
                             <input type="submit" class="btn btn-info" name="simpan" value="Simpan">
                         </form>
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
 <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
 <!-- <script type="text/javascript">setTimeout(function () {swal("Sukses","Data Berhasil Disimpan","success").then( function(val) {window.location.href = "{{route('tp4d.tambah')}}";});}, 200);  </script> -->
 <script>
     function initialize() {
         var input = document.getElementById('searchTextField');
         var autocomplete = new google.maps.places.Autocomplete(input);
         google.maps.event.addListener(autocomplete, 'place_changed', function () {
             var place = autocomplete.getPlace();
             document.getElementById('cityLat').value = place.geometry.location.lat();
             document.getElementById('cityLng').value = place.geometry.location.lng();
         });
     }
 </script>
 <script
     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAENypRbRWuuk8K18OvYOlupreDWpGvBWY&libraries=places&callback=initialize"
     async defer></script>
 @endsection
