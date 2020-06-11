@extends('index')
@section('galeri')
<div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h2 class="page-title">Galeri Proyek TP4D</h2>
                        <ul class="page-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Galeri</a></li>
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
                        <span class="subtitle">Galeri</span>
                        <h3 class="title">Galeri Proyek TP4D</h3>
                        <p>Galeri proyek ini merupakan hasil perkembangan proyek dari pelaksanaan TP4D yang didampingi oleh Tim TP4D Kejari Bangkalan</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="recent-case-filter-03">
                        
                        <div class="recent-case-filter-03">
                     @foreach($galeri as $g)
                            <div class="col-lg-4 col-md-6 case-masonry-03  criminal">
                                <div class="single-case-item-02">
                                    <div class="thumb">
                                        <img src="icon.png" alt="recent case">
                                        <div class="hover">
                                        <h4 class="title"><a href="#">{{$g->deskripsi}}</a></h4>
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
    <section class="legal-support-area gray-bg padding-top-115 padding-bottom-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="title-wrap">
                        <h3 class="title">Mengapa sebuah proyek didampingi oleh Tim TP4D</h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="paragraph-wrap">
                        <p>If you are accused of committing a crime, you will need the very best criminal defense
                            attorneys in Fresno. We are especially skilled in the following practice area. you will need
                            the very best criminal defense attorneys</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-icon-box-02">
                        <div class="icon">
                            <i class="flaticon-balance"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Expert Attorneys</h4>
                            <span class="subtitle">With Extensive High Skill</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-icon-box-02">
                        <div class="icon">
                            <i class="flaticon-auction-1"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Case Dismissed </h4>
                            <span class="subtitle">within few days we will</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-icon-box-02">
                        <div class="icon">
                            <i class="flaticon-courthouse"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Court Performan </h4>
                            <span class="subtitle">are high then others </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- call to action area end -->
</body>
@endsection