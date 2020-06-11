@extends('index')

@section('berita')


<div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Berita</h2>
                        <ul class="page-list">
                            <li><a href="#">Beranda</a></li>
                            <li><a href="#">Berita</a></li>
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
                @foreach($berita as $b)
                    <div class="blog-classic-item-01 margin-bottom-30 is-sticky">
                        <div class="thumbnail">
                            <img src="icon.png" alt="blog">
                        </div>
                        <div class="content">
                            <h4 class="title"><a href="#">{{$b->judul}}</a></h4>
                            <ul class="post-meta">
                                <li><a href="#"><i class="fa fa-calendar"></i>{{$b->tanggal}}</a></li>
                                <li><a href="#"><i class="fa fa-user"></i> {{$b->admin_posting}}</a></li>
                               
                            </ul>
                            <p>{{$b->isi}}
                            </p>
                            <a href="detail-berita" class="readmore">Read More</a>
                        </div>
                              
                    </div>
               @endforeach
                </div>
                <div class="col-lg-4">
                    <div class="widget-area">
                        <div class="widget widget_recent_posts">
                            <h4 class="widget-title">Recent Post</h4>
                            <ul class="recent_post_item">
                            @foreach($berita as $b)
                                <li class="single-recent-post-item">
                                    <div class="thumb">
                                        <img src="icon.png"  alt="recent post">
                                    </div>
                                    <div class="content">
                                        <h4 class="title"><a href="detail-berita">{{$b->judul}}</a></h4>
                                        <span class="time"><i class="fa fa-calendar"></i>{{$b->tanggal}}</span>
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

    @endsection