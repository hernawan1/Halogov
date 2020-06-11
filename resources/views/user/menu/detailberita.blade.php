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
                            <img src="icon.png" alt="blog details image">
                        </div>
                        <h2 class="title">halo halo</h2>
                        <ul class="post-meta">
                            <li><a href="#"><i class="fa fa-calendar"></i>20 desember 2020</a></li>
                            <li><a href="#"><i class="fa fa-user"></i>admin</a></li>
                        </ul>
                        <p>halo test 123</p>
                      </div>
                    <div class="blog-details-footer">
                        <div class="left">
                            <ul class="tags">
                                <li class="title">Tags: </li>
                                <li> <a href="#" rel="tag">format-link</a>, <a href="E.html" rel="tag">likewise</a></li>
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
                            <form action="https://www.irtech.biz/TF/attorg/blog.html" class="search-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <button class="submit-btn" type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="widget widget_recent_posts">
                            <h4 class="widget-title">Recent Post</h4>
                            <ul class="recent_post_item">
                                <li class="single-recent-post-item">
                                    <div class="thumb">
                                        <img src="" alt="recent post">
                                    </div>
                                    <div class="content">
                                        <h4 class="title"><a href="">test</a></h4>
                                        <span class="time"><i class="fa fa-calendar"></i>25 desember 2019</span>
                                    </div>
                                </li>
                     
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