<!-- Left side column. contains the logo and sidebar -->
<!-- Sidebar user panel -->
<div class="user-panel">
    <div class="pull-left image">
        <img src="../images/logo-kejaksaan.png" class="img-circle" alt="User Image">
    </div>
    <div class="pull-left info">
        <p>Administrator</p>
        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
    </div>
</div>
<!-- search form -->
<!-- /.search form -->
<!-- sidebar menu: : style can be found in sidebar.less -->
<ul class="sidebar-menu" data-widget="tree">
    <li class="header">MAIN NAVIGATION</li>
    <li class="{{ (request()->is('admin/beranda')) ? 'active' : '' }}">
        <a href="{{route('beranda')}}">
            <i class="fa fa-dashboard"></i> <span>Beranda</span>
        </a>
    </li>
    <li class="treeview">
        <a href="#">
            <i class="fa fa-user-secret" aria-hidden="true"></i> <span>Inteljen</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-book"></i>
                    <span>Konten</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="admin/about-us"><i class="fa fa-circle-o"></i> About Us</a></li>
                    <li><a href="admin/our-team"><i class="fa fa-circle-o"></i> Team </a></li>
                </ul>
            </li>
            <li class="">
                <a href="admin/berita"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Berita</a>
                </a>
            </li>
            <li class="treeview">
                <a href="admin/event"><i class=" fa fa-send"></i>
                    <span>Event</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="admin/about-us"><i class="fa fa-circle-o"></i>PAKEM</a></li>
                    <li><a href="admin/our-team"><i class="fa fa-circle-o"></i>GAKKUMDU</a></li>
                    <li><a href="admin/about-us"><i class="fa fa-circle-o"></i>Layanan Kejaksaan</a></li>
                    <li><a href="admin/our-team"><i class="fa fa-circle-o"></i>ORMAS</a></li>
                    <li><a href="admin/about-us"><i class="fa fa-circle-o"></i>Jaksa Masuk Sekolah</a></li>
                    <li><a href="admin/our-team"><i class="fa fa-circle-o"></i>Jaksa Menyapa</a></li>
                    <li><a href="admin/our-team"><i class="fa fa-circle-o"></i>Layanan Hukum</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-picture-o"></i>
                    <span>Galeri</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="admin/galeri"><i class="fa fa-circle-o"></i> Foto</a></li>
                    <li><a href="admin/video"><i class="fa fa-circle-o"></i>Video</a></li>
                </ul>
            </li>

        </ul>
    </li>
    <li class="header">Data Partner </li>
    <li class="">
        <a href="admin/form-pengajuan">
            <i class="fa fa-file-text-o" aria-hidden="true"></i><span>Form Pengajuan</span>
            <span class="pull-right-container"></span>
        </a>
    </li>
    <li class="treeview {{ (request()->is(['admin/formtp4d','admin/mapsall','admin/tabeltp4d'])) ? 'active' : '' }}">
        <a href="#">
            <i class="fa fa-map-marker" aria-hidden="true"></i> <span>MAP Proyek TP4D</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
            <li class="">
                <a href="{{route('formtp4d')}}"><i class="fa fa-map-marker" aria-hidden="true"></i>Tambah Lokasi</a>
                </a>
            </li>
            <li class="">
                <a href="{{route('tabelmaps')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Lihat Lokasi</a>
                </a>
            </li>
            <li class="">
                <a href="{{route('viewmaps')}}"><i class=" fa fa-send"></i> Semua Lokasi </a>
            </li>
        </ul>
    </li>

    <li class="">
        <a href="admin/pemantauan-proyek"><i class="fa fa-eye" aria-hidden="true"></i>
            <span>Pemantauan Proyek</span>
            <span class="pull-right-container">
            </span>
        </a>
    </li>
    <li class="">
        <a href="admin/user-partner">
            <i class="fa fa-user" aria-hidden="true"></i> <span>User Partner </span>
            <span class="pull-right-container"></span>
        </a>
    </li>

    <li class="header">Pengaturan Akun</li>
    <li class="">
        <a href="admin/user">
            <i class="fa fa-user-circle" aria-hidden="true"></i> <span>User Akun</span>
            <span class="pull-right-container"></span>
        </a>
    </li>
</ul>
