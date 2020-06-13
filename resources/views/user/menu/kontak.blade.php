@extends('index')
@section('kontak')
<div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Kontak Kami</h2>
                        <ul class="page-list">
                            <li><a href="{{route('home')}}>Beranda</a></li>
                            <li><a href="#">Kontak kami</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="page-content our-attoryney padding-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content-area">
                        <div class="section-title desktop-left margin-bottom-55">
                            <h3 class="title"> Informasi Kontak </h3>
                        </div>
                        <ul class="contact-info-list">
                            <li class="single-info-item">
                                <div class="icon">
                                    <i class="fa fa-home"></i>
                                </div>
                                <div class="content">
                                    <span class="details">Jl. Soekarno Hatta No.22, Wr 05, Mlajah, Kec. Bangkalan,</span> <span class="details">Kabupaten Bangkalan, Jawa Timur 69116</span>
                                   
                                </div>
                            </li>
                            <li class="single-info-item">
                                <div class="icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="content">
                                    <span class="details">Telepon Kantor : 031-3095026</span>
                                    <span class="details">Whatsapp Pengaduan Layanan : 085748165352</span>
                                </div>
                            </li>
                            <li class="single-info-item">
                                <div class="icon">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <div class="content">
                                    <span class="details">info@kejari-bangkalan.go.id</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="righti-content-area">
                        <div class="contact-page-form-wrap">
                            <form action="https://www.irtech.biz/TF/attorg/contact.html" class="contact-page-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="Your Name" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" placeholder="Your Email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" placeholder="Enter Subject" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Submit" class="submit-btn">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="contact-map">
    <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15838.72353643828!2d112.72241020361328!3d-7.046735575316374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7588a04d1c57053!2sKejaksaan%20Negeri%20Bangkalan!5e0!3m2!1sid!2sid!4v1571022623251!5m2!1sid!2sid" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
</div>
@endsection