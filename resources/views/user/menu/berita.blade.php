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
                <div class="col-lg-12">
                @foreach($data as $b)
                    <div class="blog-classic-item-01 margin-bottom-30 is-sticky">
                        <div class="thumbnail">
                            <img src="{{ asset('images/'.$b->gambar) }}" alt="blog">
                        </div>
                        <div class="content">
                            <h4 class="title"><a href="#">{{$b->judul}}</a></h4>
                            <ul class="post-meta">
                                <li><a href="#"><i class="fa fa-calendar"></i>  {{$b->tanggal}}</a></li>
                                <li><a href="#"><i class="fa fa-user"></i> {{$b->admin_posting}}</a></li>
                               
                            </ul>
                            <p>{{substr($b->isi,0,100)}}...
                            </p>
                            <a href="detail-berita/{{$b->id}}" class="readmore">Read More</a>
                        </div>
                              
                    </div>
               @endforeach
                </div>
                
            </div>
        </div>
    </div>

    @endsection