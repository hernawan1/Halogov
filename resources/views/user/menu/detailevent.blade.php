@extends('index')

@section('detail-event')
<div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Event Details</h2>
                        <ul class="page-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Event Details</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="page-content practice-details padding-top-120 padding-bottom-105">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="practice-details-content-area">
                    <div class="thumb">
                        <img src="icon.png" alt="practice image">
                    </div>
                    <div class="content-wrap">
                        <h4 class="title">{{$data->judul}}</h4>
                      
                                <a href="#"><i class="fa fa-calendar" style="color:#2ad4ca"></i> {{$data->tanggal}}</a>
                                <a href="#"><i class="fa fa-map-marker" style="color:#2ad4ca"></i> {{$data->tempat}}</a>
                               <br>
                               <br>
                  
                          <p>{{$data->isi}}</p>
                       </div>
                </div>
            </div>
            <div class="col-lg-4">
                    <div class="widget-area">
                        <div class="widget widget_search">
                            <form action="" class="search-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <button class="submit-btn" type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="widget widget_recent_posts">
                            <h4 class="widget-title">Recent Post</h4>
                            <ul class="recent_post_item">
                            @foreach($recent as $r)
                                <li class="single-recent-post-item">
                                    <div class="thumb">
                                        <img src="{{ asset('images/'.$r->gambar) }}" alt="recent post">
                                    </div>

                                    <div class="content">
                                        <h4 class="title"><a href="{{$r->id}}">{{$r->judul}}</a></h4>
                                        <span class="time"><i class="fa fa-calendar"></i> {{$r->tanggal}}</span>
                                    </div>
                                </li>
                              @endforeach  
                     
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>

    <!-- footer area end -->



    <!-- back to top area start -->
    <div class="back-to-top">
        <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
    <!-- back to top area end -->

    <!-- preloader area start -->@endsection