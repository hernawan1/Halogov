@extends('admin.index')
@section('loktp4d')
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

    /* .gm-style-iw {
width: 1000px; 
height: 1000px;
} */

</style>

<section class="content-header">
    <section class="content-header" style="margin-bottom: 10px">
        <h1>
            MAPS TP4D
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
                        <div id="map" style="width:100%;height: 500px;margin-top: 20px;margin-bottom: 20px;"></div>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <script>
        function initialize() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                // -7.0777326!4d113.287085
                center: {
                    lat: -7.0777326,
                    lng: 113.287085
                }
            });
            setMarkers(map);
        }
        var lap = {!!json_encode($lok)!!}
        console.log(lap);

        function setMarkers(map) {
            var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };
            for (var i = 0; i < lap.length; i++) {
                var ll = lap[i];
                var marker = new google.maps.Marker({
                    position: {
                        lat: ll[0],
                        lng: ll[1]
                    },
                    map: map,
                    icon: "{{asset('icon.png')}}",
                    shape: shape,
                });
            }
        }

    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAENypRbRWuuk8K18OvYOlupreDWpGvBWY&callback=initialize">
    </script>
@endsection