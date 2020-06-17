<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin HaloGoverment</title>

    <!-- GALERI -->

    <link rel="stylesheet" href="../includes/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
    <link rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">

    <link rel="stylesheet" href="{{asset('includes/css/open-iconic-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('includes/css/animate.css')}}">

    <link rel="stylesheet" href="{{asset('includes/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('includes/css/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset('includes/css/magnific-popup.css')}}">

    <link rel="stylesheet" href="{{asset('includes/css/aos.css')}}">

    <link rel="stylesheet" href="{{asset('includes/css/ionicons.min.css')}}">

    <link rel="stylesheet"
        href="{{asset('includes/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <link rel="stylesheet" href="{{asset('includes/css/jquery.timepicker.css')}}">


    <link rel="stylesheet" href="{{asset('inc;udes/css/flaticon.css')}}">
    <link rel="stylesheet" href="{{asset('includes/css/icomoon.css')}}">

    <link rel="stylesheet" href="{{asset('includes/style.css')}}">
    <!-- end Galeri -->

    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/font-awesome/css/font-awesome.min.css')}}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/Ionicons/css/ionicons.min.css')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('includes/dist/css/AdminLTE.min.css')}}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{asset('includes/dist/css/skins/_all-skins.min.css')}}">
    <!-- Morris chart -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/morris.js/morris.css')}}">
    <!-- jvectormap -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/jvectormap/jquery-jvectormap.css')}}">
    <!-- Date Picker -->
    <link rel="stylesheet"
        href="{{asset('includes/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{asset('includes/bower_components/bootstrap-daterangepicker/daterangepicker.css')}}">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="{{asset('includes/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css')}}">

    <!-- DataTables -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>


    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>

    <script>
        function autosave(column, id) {
            $.ajax({
                url: "autosave.php",
                type: "POST",
                data: 'column=' + column + '&editval=' + $(".ed").val() + '&id=' + id,
                success: function (data) {
                    $(".ed").css("background", "#2ecc71");
                }
            });
        }

    </script>
</head>

<body class="hold-transition skin-green sidebar-mini"
    style="width:93%;margin:0px auto;background: url(../resources/boxed-bg.jpg) repeat fixed;box-shadow: 0 10px 20px rgba(0,0,0,0.35), 0 6px 6px rgba(0,0,0,0.23);">
    <div class="wrapper">
        <header class="main-header">
            @include('admin.master.header')
        </header>

        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                @include('admin.master.sidebar')
            </section>
            <!-- /.sidebar -->
        </aside>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @yield('beranda')
            @yield('addtp4d')
            @yield('maptp4d')
            @yield('tabeltp4d')
            @yield('loktp4d')
            @yield('berita')
            @yield('tambah-berita')
            @yield('edit-berita')
            @yield('foto')
            @yield('video')
            @yield('team')
        </div>

        <footer class="main-footer">
            @include('admin.master.footer')
        </footer>
    </div>
    <script>
        $(function () {
            //Add text editor
            $("#compose-textarea").wysihtml5();
        });

    </script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
    @include('sweet::alert') -->
</body>
<!-- Galeri -->

<script src="{{asset('includes/js/jquery.min.js')}}"></script>
<script src="{{asset('includes/js/jquery-migrate-3.0.1.min.js')}}"></script>
<script src="{{asset('includes/js/jquery.waypoints.min.js')}}"></script>
<script src="{{asset('includes/js/jquery.stellar.min.js')}}"></script>
<script src="<{{asset('includes/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('includes/js/jquery.magnific-popup.min.js')}}"></script>
<script src="{{asset('includes/js/aos.js')}}"></script>
<script src="{{asset('includes/js/scrollax.min.js')}}"></script>
<script src="{{asset('includes/js/main.js')}}"></script>

<!--  -->

<script src="{{asset('includes/bower_components/jquery/dist/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{asset('includes/bower_components/jquery-ui/jquery-ui.min.js')}}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);

</script>
<!-- Bootstrap 3.3.7 -->
<script src="{{asset('includes/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- Morris.js charts -->
<script src="{{asset('includes/bower_components/raphael/raphael.min.js')}}"></script>
<script src="{{asset('includes/bower_components/morris.js/morris.min.js')}}"></script>
<!-- Sparkline -->
<script src="{{asset('includes/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js')}}"></script>
<!-- jvectormap -->
<script src="{{asset('includes/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')}}"></script>
<script src="{{asset('includes/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')}}"></script>
<!-- jQuery Knob Chart -->
<script src="{{asset('includes/bower_components/jquery-knob/dist/jquery.knob.min.js')}}"></script>
<!-- daterangepicker -->
<script src="{{asset('includes/bower_components/moment/min/moment.min.js')}}"></script>
<script src="{{asset('includes/bower_components/bootstrap-daterangepicker/daterangepicker.js')}}"></script>
<!-- datepicker -->
<script src="{{asset('includes/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')}}"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="{{asset('includes/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js')}}"></script>
<!-- Slimscroll -->
<script src="{{asset('includes/bower_components/jquery-slimscroll/jquery.slimscroll.min.js')}}"></script>
<!-- FastClick -->
<script src="{{asset('includes/bower_components/fastclick/lib/fastclick.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('includes/dist/js/adminlte.min.js')}}"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{asset('includes/dist/js/pages/dashboard.js')}}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{asset('includes/dist/js/demo.js')}}"></script>

<!-- DataTables -->
<script src="{{asset('includes/bower_components/datatables.net/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('includes/datatables.net-bs/js/dataTables.bootstrap.min.js')}}"></script>


<script>
    //Date picker
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    })

</script>

<script>
    //Date picker
    $('#datepicker1').datepicker({
        autoclose: true
    })

</script>

<script>
    //Date picker
    $('#datepicker2').datepicker({
        autoclose: true
    })

</script>

<!-- <script src="https://cdn.ckeditor.com/ckeditor5/12.1.0/classic/ckeditor.js"></script>
<script>
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
   </script> -->
   <script src="https://cdn.ckeditor.com/4.13.1/standard/ckeditor.js"></script>
 
<!-- Ckeditor -->
<!-- <script> -->

<!-- // tinymce.init({
//   selector: "textarea",  // change this value according to your HTML
//   plugins: "image",
//   menubar: "file | insert | edit",
//   toolbar: "link| undo redo ",
//   image_dimensions: false
// });

tinymce.init({
  selector: '#tiny',  // change this value according to the HTML
  plugins: "image,fullscreen,",
  menubar: "insert | edit | format",
  toolbar: [
    'undo redo | styleselect | bold italic Underline | image',
    'alignleft aligncenter alignright alignjustify| fullscreen'
  ]
}); -->



<!-- </script>
 -->

<script>
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.addCss('.cke_editable { font-size: 15px; padding: 2em; }');
    CKEDITOR.replace('editor1', {

        toolbar: [{
                name: 'document',
                items: ['Print']
            },
            {
                name: 'clipboard',
                items: ['Undo', 'Redo']
            },
            {
                name: 'styles',
                items: ['Format', 'Font', 'FontSize']
            },
            {
                name: 'colors',
                items: ['TextColor', 'BGColor']
            },
            {
                name: 'align',
                items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
            },
            {
                name: 'mode',
                items: ['Source']
            },
            '/',
            {
                name: 'basicstyles',
                items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
            },
            {
                name: 'links',
                items: ['Link', 'Unlink']
            },
            {
                name: 'paragraph',
                items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
            },
            {
                name: 'insert',
                items: ['Image', 'Table']
            },
            {
                name: 'tools',
                items: ['Maximize']
            },

            {
                name: 'editing',
                items: ['Scayt']
            }
        ],

        extraAllowedContent: 'h3{clear};h2{line-height};h2 h3{margin-left,margin-top}',

        // Adding drag and drop image upload.
        extraPlugins: 'print,format,font,colorbutton,justify,uploadimage,image2,devtools',


        uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

        // Configure your file manager integration. This example uses CKFinder 3 for PHP.
        filebrowserBrowseUrl: '{{asset('
        includes / kcfinder / browse.php ? type = files ')}}',
        filebrowserImageBrowseUrl : '{{asset('
        includes / kcfinder / browse.php ? type = images ')}}',
        filebrowserUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = files ')}}',
        filebrowserImageUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = images ')}}',
        filebrowserFlashBrowseUrl : '{{asset('
        includes / kcfinder / browse.php ? type = flash ')}}',
        filebrowserFlashUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = flash ')}}',

        height : 560,

        removeDialogTabs: 'image:advanced;link:advanced'
    });

</script>

<script>
    CKEDITOR.addCss('.cke_editable { font-size: 15px; padding: 2em; }');



    CKEDITOR.replace('editor2', {

        toolbar: [{
                name: 'document',
                items: ['Print']
            },
            {
                name: 'clipboard',
                items: ['Undo', 'Redo']
            },
            {
                name: 'styles',
                items: ['Format', 'Font', 'FontSize']
            },
            {
                name: 'colors',
                items: ['TextColor', 'BGColor']
            },
            {
                name: 'align',
                items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
            },
            {
                name: 'mode',
                items: ['Source']
            },
            '/',
            {
                name: 'basicstyles',
                items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
            },
            {
                name: 'links',
                items: ['Link', 'Unlink']
            },
            {
                name: 'paragraph',
                items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
            },
            {
                name: 'insert',
                items: ['Image', 'Table']
            },
            {
                name: 'tools',
                items: ['Maximize']
            },
            {
                name: 'editing',
                items: ['Scayt']
            }
        ],

        extraAllowedContent: 'h3{clear};h2{line-height};h2 h3{margin-left,margin-top}',

        // Adding drag and drop image upload.
        extraPlugins: 'print,format,font,colorbutton,justify,uploadimage,image2',

        uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

        // Configure your file manager integration. This example uses CKFinder 3 for PHP.
        filebrowserBrowseUrl: '{{asset('
        includes / kcfinder / browse.php ? type = files ')}}',
        filebrowserImageBrowseUrl : '{{asset('
        includes / kcfinder / browse.php ? type = images ')}}',
        filebrowserUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = files ')}}',
        filebrowserImageUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = images ')}}',
        filebrowserFlashBrowseUrl : '{{asset('
        includes / kcfinder / browse.php ? type = flash ')}}',
        filebrowserFlashUploadUrl : '{{asset('
        includes / kcfinder / upload.php ? type = flash ')}}',

        height : 560,

        removeDialogTabs: 'image:advanced;link:advanced'
    });

</script>

</html>
