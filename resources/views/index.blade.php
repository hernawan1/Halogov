<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Halo Government</title>
    <!-- favicon -->
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

</head>

<body>
    <!-- //. search Popup -->
    <div class="header-style-01">
        @include('user.menu')
        <!-- navbar area end -->
    </div>
  
    
    <!-- top lawyer area start -->
    
    <!-- top lawyer area end -->
    @yield('home')
    @yield('mengenal')
    @yield('mekanisme')
    @yield('struktur')
    @yield('map')
    @yield('berita')
    @yield('detail-berita')
    @yield('galeri')
    <!-- footer area start -->
    <footer class="footer-area">
        @include('user.footer')
    </footer>
    <!-- footer area end -->



    <!-- back to top area start -->
    <div class="back-to-top">
        <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
    <!-- back to top area end -->

    <!-- preloader area start -->
    <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div class="cancel-preloader">
                <a href="#">Cancel Preloader</a>
            </div>
            <div class="spinner">
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle class="length" fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
                </svg>
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
                </svg>
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
                </svg>
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
                </svg>
            </div>
        </div>
    </div>
    <!-- preloader area end -->

    <!-- jquery -->
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