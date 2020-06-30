<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ambil Tilang</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->

    <!-- Theme style -->
    <link rel="stylesheet" href="includes/dist/css/AdminLTE.min.css">

    <link rel=icon href=favicon.ico sizes="20x20" type="image/png">
    <!-- animate -->
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
    <!-- bootstrap -->
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <!-- magnific popup -->
    <link rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <!-- owl carousel -->
    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <!-- fontawesome -->
    <link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <!-- flaticon -->
    <link rel="stylesheet" href="{{asset('assets/css/flaticon.css')}}">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <!-- responsive Stylesheet -->
    <link rel="stylesheet" href="{{asset('assets/css/responsive.css')}}">



    <!-- Google Font -->
</head>

<body class="hold-transition skin-blue layout-top-nav">
        <div class="wrapper">
            <div class="content-wrapper">
                <section class="content">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="box">
                                <div class="box-body ">
                                    <form action="{{route('coba')}}" method="get">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Masukkan Nomer Tilang</label>
                                            <input type="text" class="form-control" name="no_tilang"
                                                placeholder="Nomer Tilang">
                                        </div>
                                        <input type="submit" class="btn" style="width:100%;background-color:#00CCD9;color:#ffff;" name="simpan"
                                            value="Cek Tilang">
                                    </form>

                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->
                            <!-- /.col -->
                        </div>
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.container -->
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
        <script src="{{asset('assets/js/jquery-2.2.4.min.js')}}"></script>
        <!-- popper -->
        <script src="{{asset('assets/js/popper.min.js')}}"></script>
        <!-- bootstrap -->
        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
        <!-- magnific popup -->
        <script src="{{asset('assets/js/jquery.magnific-popup.js')}}"></script>
        <!-- wow -->
        <script src="{{asset('assets/js/wow.min.js')}}"></script>
        <!-- owl carousel -->
        <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
        <!-- waypoint -->
        <script src="{{asset('assets/js/waypoints.min.js')}}"></script>
        <!-- counterup -->
        <script src="{{asset('assets/js/jquery.counterup.min.js')}}"></script>
        <!-- imageloaded -->
        <script src="{{asset('assets/js/imagesloaded.pkgd.min.js')}}"></script>
        <!-- isotope -->
        <script src="{{asset('assets/js/isotope.pkgd.min.js')}}"></script>
        <!-- main js -->
        <script src="{{asset('assets/js/main.js')}}"></script>
</body>

</html>
