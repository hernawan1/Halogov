    
    @extends('index')

@section('event')<!-- //. search Popup -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Event</h2>
                        <ul class="page-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Event</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- case content area start  -->
    <div class="case-content-area padding-top-115 padding-bottom-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title desktop-center margin-bottom-55">
                        <span class="subtitle">Event</span>
                        <h3 class="title">Event Kami</h3>
                        <p>Event yang diadakan oleh kejaksaan bangkalan </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="recent-case-filter-03">
                        <div class="recent-case-filter-03">
                        @foreach($data as $d)
                            <div class="col-lg-4 col-md-6 case-masonry-03  real dispute">
                                <div class="single-case-item-02">
                                    <div class="thumb">
                                        <img src="{{ asset('images/'.$d->gambar) }}" alt="recent case">
                                        <div class="hover">
                                        <a href="detail-event/{{$d->id}}"> <h4 class="title">{{$d->judul}}</h4></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- case content area end -->

    <!-- legal support area start  -->
    <!-- call to action area end -->

    <!-- footer area start -->
   
    <div class="back-to-top">
        <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
    <!-- back to top area end -->

    <!-- preloader area start -->@endsection