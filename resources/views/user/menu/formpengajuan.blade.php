
@extends('index')
@section('form-pengajuan')
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Form Pemohon</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    
    <!-- Theme style -->
    <link rel="stylesheet" href="includes/dist/css/AdminLTE.min.css">


    <!-- Google Font -->
    </head>
<body class="hold-transition skin-blue layout-top-nav">
<div class="wrapper">

    <header class="main-header">
        <nav class="navbar navbar-static-top">
            <div class="container">
               
                
            </div>
        </nav>
    </header>
    <div class="content-wrapper">
        <div class="container">
            <section class="content-header">
                <h1>
                    Form Pengajuan

                </h1>

            </section>

            <!-- Main content -->
            <section class="content">
                <div class="callout callout-info">
                    <h4>Tip!</h4>

                    <p>Data Yang anda masukkan pastikan sesuai dan sudah benar!!</p>
                </div>

                <!-- DataTables -->
              
                <!-- Theme style -->
       
     
    
    
            <section class="content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="box">
                            <div class="box-body ">
                                <form action="" method="post">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Instansi Pemohon</label>
                                        <input type="text" class="form-control" name="a" placeholder="Instansi Pemohon">
                                    </div>


                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Nama Kegiatan</label>
                                    <textarea class="form-control" name="b" rows="3"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Nilai Kegiatan</label>
                                    <input type="number" class="form-control" name="c" placeholder="Nilai Kegiatan">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Jadwal Sosialisai / Presentasi Permasalahan</label>
                                    <input type="date" class="form-control" name="d" placeholder="Jadwal Sosialisai / Presentasi Permasalahan">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Bentuk Pengawalan & pengamanan</label>
                                    <input type="text" class="form-control" name="e" placeholder="Bentuk Pengawalan & pengamanan">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Nama Penanggung Jawab</label>
                                    <input type="text" class="form-control" name="f" placeholder="Nama Penanggung Jawab">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Telp</label>
                                    <input type="number" class="form-control" name="g" placeholder="Telp">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1">email</label>
                                    <input type="email" class="form-control" name="h" placeholder="Email">
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlFile1">File Lampiran</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                </div>

                                <input type="submit" class="btn btn-info" style="width:100%" name="simpan" value="Simpan">
                            </form>

                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
            </div>

        <!-- /.content -->
        </div>
        </section>
        <!-- <script>
            $(function () {
                $('#example').DataTable({
                    'paging'      : true,
                    'lengthChange': false,
                    'searching'   : true,
                    'ordering'    : true,
                    'info'        : true,
                    'autoWidth'   : false
                })
            })
        </script>

        <?php
            if (@$_POST['simpan']){
                include "config/koneksi.php";
                $a = $_POST['a'];
                $b = $_POST['b'];
                $c = $_POST['c'];
                $d = $_POST['d'];
                $e = $_POST['e'];
                $f = $_POST['f'];
                $g = $_POST['g'];
                $h = $_POST['h'];
    
                mysqli_query($konek,"INSERT INTO pengajuan_form VALUES ('','$a','$b','$c','$d','$e','$f','$g','$h','kosong','Belum Disetujui','')");
    
                ?>
                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script><script type="text/javascript">setTimeout(function () {swal("Sukses","Silahkan menunggu notifikasi dari email jika sudah di asetujui..","success").then( function(val) {window.location.href = "<?=$url;?>daftar.php";});}, 200);  </script>
                <?php
            }
    
            ?> -->
                <!-- /.box -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /.content-wrapper -->
    
</div>
<!-- ./wrapper -->

<!-- jQuery 3 -->
<script src="includes/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="includes/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="includes/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="includes/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="includes/dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="includes/dist/js/demo.js"></script>
</body>
</html>
@endsection