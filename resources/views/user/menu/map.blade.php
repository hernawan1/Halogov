@extends('index')
@section('map')

 
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAENypRbRWuuk8K18OvYOlupreDWpGvBWY&callback=initialize" type="text/javascript" >
        </script>
<!-- Theme style -->
<style>
  .heading{
      padding: 10px 10px;
      border-radius: 2px;
      color: #FFF;
      background: #6aadf1;
      margin-bottom:10px;
      font-size: 1.5em;
      text-align:center;
  }

  /* .gm-style-iw {
width: 1000px; 
height: 1000px;
} */
  
</style>
  <div class="breadcrumb-area">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="breadcrumb-inner">
                      <h2 class="page-title">Maps Proyek TP4D</h2>
                      <ul class="page-list">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Maps</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <section class="content">
      <div class="row">
            <div id="map" style="width:100%;height: 500px;margin-left: 30px;margin-right:30px;margin-top: 20px;margin-bottom: 20px;"></div>
      </div>
          <!-- /.box-body -->
    <!-- /.row -->
  </section>
  <!-- /.content -->
</div>

<!-- Modal -->


<script>

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// The maximum width of the info window is set to 200 pixels.


function initialize() {
  
  var bounds = new google.maps.LatLngBounds();
  var infoWindow = new google.maps.InfoWindow;
  var mapOptions = { mapTypeId: google.maps.MapTypeId.ROADMAP}
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // addMarker(-7.313069, 112.728345, 'Lokasi: Disini');
  
  @foreach ($laporan as $pin)
  @php 
  $tgl_lapor = date('d M Y',strtotime($pin->jadwal));
  echo ("addMarker( $pin->lat, $pin->lng)");
  @endphp
  @endforeach
  
  function addMarker(lat, lng) {
            var lokasi = new google.maps.LatLng(lat, lng);
            bounds.extend(lokasi);
            var marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    position: lokasi,
                    clickable: true,
                    icon:'icon.png'
                
            });       
            map.fitBounds(bounds);
            bindInfoWindow(marker, map, infoWindow, info, keg, pen, jad, nil);
         }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  
  // Menampilkan informasi pada masing-masing marker yang diklik
  function bindInfoWindow(marker, map, infoWindow, html) {
          google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
          });
        }
}
 google.maps.event.addDomListener(window, 'load', initialize);

</script>


@endsection