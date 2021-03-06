@extends('index')
@section('detail-berita')
<div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Blog Details</h2>
                        <ul class="page-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Blog Details</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="page-content our-attoryney padding-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog-details-item">
                        <div class="thumb">
                            <img src="{{ asset('images/'.$data->gambar) }}" alt="blog details image">
                        </div>
                        <h2 class="title">{{$data->judul}}</h2>
                        <ul class="post-meta">
                            <li><a href="#"><i class="fa fa-calendar"></i>{{$data->tanggal}}</a></li>
                            <li><a href="#"><i class="fa fa-user"></i>{{$data->admin_posting}}</a></li>
                        </ul>
                        <p>{{$data->isi}}</p>
                      </div>
                    <div class="blog-details-footer">
                        <div class="left">
                            <ul class="tags">
                                <li class="title">Kategori : </li>
                                <li> <a href="#" rel="tag">{{$data->kategori}}</a></li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="social-share">
                                <li class="title">Share:</li>
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            </ul>       
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

    <!-- footer area start -->
    <!-- footer area end -->



    <!-- back to top area start -->
    <div class="back-to-top">
        <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
    <!-- back to top area end -->

    <!-- preloader area start -->
@endsection