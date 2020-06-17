-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2020 at 04:26 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `halogovernment`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `isi` text DEFAULT NULL,
  `gambar` varchar(150) DEFAULT NULL,
  `tipe` varchar(10) NOT NULL,
  `admin_posting` varchar(50) NOT NULL,
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id`, `tanggal`, `kategori`, `judul`, `isi`, `gambar`, `tipe`, `admin_posting`, `created_at`, `updated_at`) VALUES
(76, '2020-06-09', 'TP4D', 'testing', '<p>asdsadsa</p>', '1241293145.jpg', 'ind', 'admin', '2020-06-17 07:03:00.000000', '2020-06-17 07:03:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `chat_message`
--

CREATE TABLE `chat_message` (
  `chat_message_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `chat_message` mediumtext COLLATE utf8mb4_bin NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `chat_message`
--

INSERT INTO `chat_message` (`chat_message_id`, `to_user_id`, `from_user_id`, `chat_message`, `timestamp`, `status`) VALUES
(1, 2, 1, 'halo vlan', '2019-10-05 08:17:44', 0),
(2, 1, 2, 'din\n', '2019-10-05 08:44:56', 0),
(3, 1, 2, 'd', '2019-10-05 08:49:36', 0),
(4, 1, 2, 'piye2\n', '2019-10-05 08:51:04', 0),
(5, 2, 1, 'oke', '2019-10-05 08:51:22', 0),
(6, 2, 1, 'mantap', '2019-10-05 08:51:28', 2),
(7, 1, 2, 'gaskeun', '2019-10-05 08:51:46', 0),
(8, 2, 1, '😁', '2019-10-05 09:14:05', 0),
(9, 0, 1, 'mantap<br>', '2019-10-05 09:14:38', 0),
(10, 0, 1, '<p><img src=\"upload/review-dewaweb-terbaru.jpg\" class=\"img-thumbnail\" width=\"200\" height=\"160\"></p><br>', '2019-10-05 09:15:43', 2),
(11, 3, 1, 'halo mbak mas\nahlinya ahli', '2019-10-05 09:27:59', 0),
(12, 1, 3, 'asu', '2019-10-05 09:28:13', 2),
(13, 3, 1, 'halo ujc', '2019-10-05 09:28:23', 0),
(14, 1, 3, 'mantap', '2019-10-05 09:28:24', 0),
(15, 0, 1, 'Hlao grup para ahlinya ahli\n\n   ', '2019-10-05 09:29:11', 0),
(16, 0, 3, 'Rerusno', '2019-10-05 09:29:24', 1),
(17, 0, 1, 'Core of the core', '2019-10-05 09:29:49', 0),
(18, 0, 3, '<p><img src=\"upload/IMG_20191003_112824_059.jpg\" class=\"img-thumbnail\" width=\"200\" height=\"160\"></p><br>', '2019-10-05 09:29:59', 1),
(19, 0, 1, '👍👍👍', '2019-10-05 09:30:14', 0),
(20, 0, 3, '🙏🙏🙏', '2019-10-05 09:30:39', 1),
(21, 0, 1, 'Wihh CEO ahlinya ahlo', '2019-10-05 09:30:47', 0),
(22, 0, 1, 'Ceo ahlinya ahli', '2019-10-05 09:30:58', 0),
(23, 0, 1, 'Wihh ono mas FT ahlinya ahli\n\n   ', '2019-10-05 09:35:26', 0),
(24, 3, 2, 'halo bos', '2019-10-05 09:36:08', 0),
(25, 3, 2, 'halo bos', '2019-10-05 09:36:08', 0),
(26, 3, 2, 'didin', '2019-10-05 09:36:12', 0),
(27, 2, 3, 'oi\n\n', '2019-10-05 09:36:25', 0),
(28, 2, 3, 'din', '2019-10-05 09:36:36', 0),
(29, 3, 2, 'mantap', '2019-10-05 09:36:44', 0),
(30, 2, 3, 'balesen', '2019-10-05 09:36:52', 0),
(31, 0, 2, 'Taek mas', '2019-10-05 09:37:20', 2),
(32, 0, 1, 'Opo2 an iki\n\n   ', '2019-10-05 09:37:31', 0),
(33, 0, 3, '<div>\n\n   he din</div><div><br></div>', '2019-10-05 09:38:21', 1),
(34, 0, 3, 'io', '2019-10-05 09:39:37', 2),
(35, 0, 3, 'aku', '2019-10-05 09:40:10', 1),
(36, 0, 2, 'Opo', '2019-10-05 09:40:26', 0),
(37, 0, 3, 'halo<br>', '2019-10-05 09:40:31', 2),
(38, 3, 2, 'mantap', '2019-10-05 09:41:25', 0),
(39, 0, 1, 'Digas gk nubruk ta?', '2019-10-05 09:42:19', 0),
(40, 0, 2, 'Rame ae', '2019-10-05 09:42:41', 0),
(41, 0, 1, 'Hbig gini dftar hak cipta sbg grup ahlinya ahli atau intinya inti 👍👍👍🙊🙊', '2019-10-05 09:44:17', 0),
(42, 1, 2, 'oke', '2019-10-07 07:26:56', 2),
(43, 1, 2, '👌🏼', '2019-10-07 07:28:28', 0),
(44, 1, 2, '👏🏼', '2019-10-07 07:28:48', 0),
(45, 1, 2, 'coi\n', '2019-10-22 10:03:00', 0),
(46, 1, 2, 'coi\n', '2019-10-22 10:03:01', 0),
(47, 1, 2, 'coi\n', '2019-10-22 10:03:01', 0),
(48, 1, 2, 'coi\n', '2019-10-22 10:03:02', 0),
(49, 1, 2, 'coi\n', '2019-10-22 10:03:02', 0),
(50, 1, 2, 'fafas\n', '2019-10-22 10:03:14', 0),
(51, 2, 1, 'ok', '2019-10-22 10:03:24', 2),
(52, 1, 2, 'kok gak ilang\n', '2019-10-22 10:03:34', 0),
(53, 2, 1, 'ok', '2019-10-22 11:36:19', 1),
(54, 2, 1, 'yes', '2019-10-22 11:36:26', 1),
(55, 0, 1, '\n\n   tes', '2019-10-22 11:36:51', 1),
(56, 3, 1, 'lklf', '2020-03-18 07:40:49', 1),
(57, 3, 1, 'lklf', '2020-03-18 07:40:50', 1),
(58, 3, 1, 'lklf', '2020-03-18 07:40:50', 1),
(59, 3, 1, 'lklf', '2020-03-18 07:40:51', 1),
(60, 2, 1, 'kdkd\n', '2020-06-05 03:23:40', 1),
(61, 2, 1, 'kdkd\n', '2020-06-05 03:23:40', 1),
(62, 2, 1, 'kdkd\n', '2020-06-05 03:23:40', 1);

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `waktu` varchar(50) NOT NULL,
  `judul` text NOT NULL,
  `isi` text DEFAULT NULL,
  `gambar` varchar(1500) DEFAULT NULL,
  `tempat` text NOT NULL,
  `tipe` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `tanggal`, `waktu`, `judul`, `isi`, `gambar`, `tempat`, `tipe`) VALUES
(1, '2019-09-17', 'Event', 'Kejari-Bangkalan-mengadakan-event', '', '', 'Kejari Bangkalan', 'ind'),
(2, '2019-09-17', 'Event', 'Kejari-Bangkalan-mengadakan-event', '<p>TP4D</p>\r\n', '', 'Kejari Bangkalan', 'eng');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `foto_konten`
--

CREATE TABLE `foto_konten` (
  `id` int(9) NOT NULL,
  `id_konten` varchar(15) NOT NULL,
  `nama` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `deskripsi` varchar(30) DEFAULT NULL,
  `nama` varchar(100) NOT NULL,
  `tipe` varchar(20) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updated_at` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `deskripsi`, `nama`, `tipe`, `created_at`, `updated_at`) VALUES
(17, 'awkoawk', '313332401.jpg', 'galeri', '2020-06-16 18:53:08.000000', '2020-06-16 18:53:08.000000'),
(19, 'doraemon', 'https://www.youtube.com/watch?v=7RnN5ZbRpWQ', 'video', '2020-06-16 19:00:25.000000', '2020-06-16 19:00:25.000000');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(8) NOT NULL,
  `tahun` varchar(20) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `tahun`, `deskripsi`) VALUES
(1, '2019 - Present', 'Banyuwangi'),
(2, '2018 - Present', 'Lombok'),
(3, '2016 - Present', 'Bali\r\n'),
(4, '2015 - Present', 'Sumenep'),
(5, '2013 - 2015', 'Depok'),
(6, '2011 - Present', 'Flores'),
(7, '2011 - Present', 'Bromo'),
(8, '2006 - 2009', 'Kupang'),
(9, '2006 - 2009', 'Ambon'),
(10, '2006 - 2009', 'Kedungombo, Sragen'),
(11, '1999 - Present', 'Surabaya');

-- --------------------------------------------------------

--
-- Table structure for table `kontak`
--

CREATE TABLE `kontak` (
  `id` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pesan` text NOT NULL,
  `no` varchar(20) DEFAULT NULL,
  `waktu` varchar(30) NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kontak`
--

INSERT INTO `kontak` (`id`, `nama`, `email`, `pesan`, `no`, `waktu`, `status`) VALUES
(11, 'Moch. Fachrudin', 'hallodidin@gmail.com', 'Ingin menanyakan terkait donasi ? rekening berapa yah ?', '', '2019-05-04 03:13:23pm', 0),
(12, 'Betzy Alimanda', 'betzyalimanda@gmail.com', 'Oke', '', '2019-05-04 03:14:38pm', 1),
(13, 'd', 'd@gmail.com', 'd', '', '2019-05-04 03:17:38pm', 1),
(14, 'd', 'd@gmail.com', 'd', '', '2019-05-04 03:18:16pm', 0);

-- --------------------------------------------------------

--
-- Table structure for table `konten`
--

CREATE TABLE `konten` (
  `konten_id` int(10) NOT NULL,
  `id` varchar(100) NOT NULL,
  `tipe` varchar(20) DEFAULT NULL,
  `isi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `konten`
--

INSERT INTO `konten` (`konten_id`, `id`, `tipe`, `isi`) VALUES
(1, 'lihat-lokasi', NULL, NULL),
(15, 'home', NULL, NULL),
(16, 'video', NULL, NULL),
(17, 'berita', NULL, NULL),
(18, 'event', NULL, NULL),
(19, 'galeri', NULL, NULL),
(20, 'detail-berita', NULL, NULL),
(21, 'detail-event', NULL, NULL),
(22, 'contact-us', NULL, NULL),
(23, 'baca-pesan', NULL, NULL),
(24, 'buat-pesan', NULL, NULL),
(25, 'sponsors', NULL, NULL),
(26, 'logout', NULL, NULL),
(29, 'news-detail', NULL, NULL),
(30, 'event-detail', NULL, NULL),
(31, 'form-pengajuan', NULL, NULL),
(32, 'map-tp4d', NULL, NULL),
(33, 'pemantauan-proyek', NULL, NULL),
(34, 'chatting', NULL, NULL),
(35, 'user', NULL, NULL),
(36, 'user-partner', NULL, NULL),
(37, 'about-us', NULL, '<h2 style=\"text-align:center\"><strong>VISI &amp; MISI</strong></h2>\r\n\r\n<p><strong>Visi&nbsp; :</strong></p>\r\n\r\n<p>Kejaksaan sebagai lembaga penegak hukum yang bersih, efektif, efisien, transparan, akuntabel, untuk dapat memberikan pelayanan prima dalam mewujudkan supremasi hukum secara profesional, proporsional dan bermartabat yang berlandaskan keadilan, kebenaran, serta nilai &ndash; nilai kepautan.</p>\r\n\r\n<p><strong>Misi&nbsp; :</strong></p>\r\n\r\n<p>1. Mengoptimalkan pelaksanaan fungsi Kejaksaan dalam pelaksanaa tugas dan wewenang, baik dalam segi kualitas&nbsp;maupun kuantitas penanganan perkara seluruh tindak pidana, penanganan perkara Perdata dan Tata Usaha Negara, serta pengoptimalan kegiatan Intelijen Kejaksaan, secara profesional, proposional dan bermartabat melalui penerapan Standard Operating Procedure (SOP) yang tepat, cermat, terarah, efektif, dan efisien.</p>\r\n\r\n<p>2. Mengoptimalkan&nbsp;peranan bidang Pembinaan dan Pengawasan dalam rangka mendukung pelaksanaan tugas bidang-bidang lainnya, terutama terkait dengan upaya penegakan hukum.</p>\r\n\r\n<p>3. Mengoptimalkan tugas pelayanan publik di bidang hukum dengan penuh tanggung jawab, taat azas, efektif dan efisien, serta penghargaan terhadap hak-hak publik;</p>\r\n\r\n<p>4. Melaksanakan pembenahan dan penataan kembali struktur organisasi Kejaksaan, pembenahan sistem informasi manajemen terutama pengimplementasian program quickwins agar dapat segera diakses oleh masyarakat, penyusunan cetak biru (blue print) pembangunan sumber daya manusia Kejaksaan jangka menengah dan jangka panjangtahun 2025, menerbitkan dan menata kembali manajemen administrasi keuangan, peningkatan sarana dan prasarana, serta peningkatan kesejahteraan pegawai melalui tunjangan kinerja atau remunerasi, agar kinerja Kejaksaan dapat berjalan lebih efektif, efisien, transparan, akuntabel dan optimal.</p>\r\n\r\n<p>5. Membentuk aparat Kejaksaan yang handal, tangguh, profesional, bermoral dan beretika guna menunjang kelancaran pelaksanaan tugas pokok, fungsi dan wewenang, terutama dalam upaya penegakan hukum yang berkeadilan serta tugas-tugas lainnya yang terkait.</p>\r\n'),
(38, 'our-team', NULL, NULL),
(39, 'maps', NULL, NULL),
(40, 'semua-lokasi', NULL, NULL),
(41, 'map-proyek', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `username`, `password`) VALUES
(1, 'didin', '$2y$10$4REfvTZpxLgkAR/lKG9QiOkSdahOYIR3MeoGJAyiWmRkEFfjH3396'),
(2, 'kivlan', '$2y$10$4REfvTZpxLgkAR/lKG9QiOkSdahOYIR3MeoGJAyiWmRkEFfjH3396'),
(3, 'hernawan', '$2y$10$4REfvTZpxLgkAR/lKG9QiOkSdahOYIR3MeoGJAyiWmRkEFfjH3396');

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

CREATE TABLE `login_details` (
  `login_details_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `last_activity` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_type` enum('no','yes') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`login_details_id`, `user_id`, `last_activity`, `is_type`) VALUES
(1, 1, '2019-10-05 08:02:03', 'no'),
(2, 1, '2019-10-05 08:17:49', 'no'),
(3, 1, '2019-10-05 08:46:37', 'no'),
(4, 2, '2019-10-05 09:21:39', 'no'),
(5, 1, '2019-10-05 09:21:37', 'no'),
(6, 1, '2019-10-05 09:24:51', 'no'),
(7, 1, '2019-10-05 09:31:25', 'no'),
(8, 3, '2019-10-05 09:34:40', 'no'),
(9, 1, '2019-10-05 09:44:31', 'no'),
(10, 3, '2019-10-05 09:42:28', 'no'),
(11, 2, '2019-10-05 09:43:15', 'no'),
(12, 1, '2019-10-05 09:47:34', 'no'),
(13, 2, '2019-10-05 09:50:44', 'no'),
(14, 1, '2019-10-07 07:26:56', 'no'),
(15, 2, '2019-10-07 07:57:39', 'no'),
(16, 1, '2019-10-07 07:59:51', 'no'),
(17, 1, '2019-10-09 07:48:34', 'no'),
(18, 1, '2019-10-11 02:01:01', 'yes'),
(19, 1, '2019-10-11 07:58:46', 'no'),
(20, 1, '2019-10-11 10:35:01', 'no'),
(21, 1, '2019-10-11 15:24:09', 'no'),
(22, 1, '2019-10-12 02:40:04', 'no'),
(23, 1, '2019-10-12 16:58:01', 'no'),
(24, 1, '2019-10-12 18:05:07', 'no'),
(25, 1, '2019-10-13 10:33:06', 'no'),
(26, 0, '2019-10-22 09:52:49', 'no'),
(27, 0, '2019-10-22 10:02:13', 'no'),
(28, 0, '2019-10-22 10:02:18', 'no'),
(29, 1, '2019-10-22 14:02:00', 'no'),
(30, 2, '2019-10-22 10:39:19', 'no'),
(31, 3, '2019-10-31 04:30:52', 'no'),
(32, 3, '2019-11-01 02:59:41', 'no'),
(33, 3, '2019-11-01 06:59:01', 'no'),
(34, 1, '2019-11-25 23:16:32', 'no'),
(35, 1, '2019-11-26 00:54:03', 'no'),
(36, 1, '2019-11-26 04:28:00', 'no'),
(37, 5, '2019-11-26 04:28:29', 'no'),
(38, 1, '2019-11-26 04:57:17', 'no'),
(39, 5, '2019-11-26 04:58:39', 'no'),
(40, 1, '2019-11-26 05:31:24', 'no'),
(41, 5, '2019-11-26 05:53:23', 'no'),
(42, 1, '2019-11-26 06:04:43', 'no'),
(43, 1, '2019-11-26 06:10:19', 'no'),
(44, 1, '2019-11-26 06:10:34', 'no'),
(45, 1, '2020-01-06 10:33:31', 'no'),
(46, 1, '2020-01-06 11:02:25', 'no'),
(47, 1, '2020-01-07 13:52:01', 'no'),
(48, 1, '2020-01-12 10:24:29', 'no'),
(49, 1, '2020-01-16 08:51:44', 'no'),
(50, 1, '2020-01-18 03:44:11', 'no'),
(51, 1, '2020-01-19 12:19:44', 'no'),
(52, 1, '2020-01-19 13:39:52', 'no'),
(53, 1, '2020-01-20 11:31:05', 'no'),
(54, 1, '2020-01-20 10:49:09', 'no'),
(55, 1, '2020-01-21 15:11:01', 'no'),
(56, 1, '2020-01-21 18:02:46', 'no'),
(57, 1, '2020-01-22 09:11:48', 'no'),
(58, 1, '2020-01-22 14:24:15', 'no'),
(59, 1, '2020-01-26 13:04:11', 'no'),
(60, 1, '2020-03-13 03:55:14', 'no'),
(61, 1, '2020-03-18 07:41:10', 'no'),
(62, 1, '2020-03-18 14:09:09', 'no'),
(63, 1, '2020-03-18 14:10:27', 'no'),
(64, 1, '2020-04-04 17:41:18', 'no'),
(65, 1, '2020-06-05 03:35:50', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `idlokasi` int(11) NOT NULL,
  `id_pengajuan` int(3) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `lat` double(11,8) DEFAULT NULL,
  `lng` double(11,8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`idlokasi`, `id_pengajuan`, `nama`, `lat`, `lng`) VALUES
(17, 30, 'Bukit Cinta', -7.12946960, 113.40943490),
(18, 32, 'DPRD Bangkalan', -7.04648120, 112.72869430);

-- --------------------------------------------------------

--
-- Table structure for table `maps`
--

CREATE TABLE `maps` (
  `idmaps` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instansi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_kegiatan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nilai` int(11) NOT NULL,
  `lat` double(11,8) NOT NULL,
  `lng` double(11,8) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maps`
--

INSERT INTO `maps` (`idmaps`, `nama`, `instansi`, `nama_kegiatan`, `nilai`, `lat`, `lng`, `created_at`, `updated_at`) VALUES
(4, 'Debby Aprilia', 'Kejaksaan Bangkalan', 'Pembangunan Gedung Serbaguna', 12000000, -7.04805590, 112.73442650, '2020-06-14 07:45:40', '2020-06-14 07:45:40'),
(8, 'Tomo', 'Kelurahan', 'Renovasi kelurahan', 5000000, -5.56831230, 119.59195550, '2020-06-14 08:26:34', '2020-06-14 08:26:34'),
(10, 'Bagas', 'Kementrian Pendidikan', 'Renovasi Gedung SMKN 2 Bangkalan', 20000000, -7.04757040, 112.75421170, '2020-06-14 08:54:48', '2020-06-14 08:54:48'),
(11, 'Djayusman', 'Kejaksaan Bangkalan', 'Renovasi Masjid', 10000000, -7.04805590, 112.73442650, '2020-06-14 08:55:43', '2020-06-14 08:55:43'),
(12, 'Didin', 'DPRD Bangkalan', 'Renovasi gedung serbaguna', 12000000, -7.04905010, 112.73520220, '2020-06-14 17:18:14', '2020-06-14 17:18:14');

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(80) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menu_utama`
--

CREATE TABLE `menu_utama` (
  `id` int(11) NOT NULL,
  `id_konten` varchar(15) DEFAULT NULL,
  `nama_menu` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_06_14_072338_map_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengajuan_form`
--

CREATE TABLE `pengajuan_form` (
  `id` int(3) NOT NULL,
  `instansi` varchar(30) NOT NULL,
  `nama_kegiatan` varchar(50) NOT NULL,
  `nilai_kegiatan` int(11) NOT NULL,
  `jadwal` varchar(20) NOT NULL,
  `bentuk _pengawalan` varchar(20) NOT NULL,
  `nama_penanggung` varchar(20) NOT NULL,
  `telp` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `file` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengajuan_form`
--

INSERT INTO `pengajuan_form` (`id`, `instansi`, `nama_kegiatan`, `nilai_kegiatan`, `jadwal`, `bentuk _pengawalan`, `nama_penanggung`, `telp`, `email`, `file`, `status`) VALUES
(30, 'DPRD Bangkalan', 'Pendampingan Gedung Baru DPRD', 120000000, '19 Agustus 2020', 'Pengawalan', 'Moch Fachrudin', '897871', 'didinfachrudinn@gmail.com', '-', 'Approve'),
(32, 'DPRD Bangkalan', 'Pendampingan Gedung Baru DPRD', 10000000, '19 Agustus 2020', 'Pengawalan', 'Mokhamad Kivlan Zein', '897871', 'aksell170113@gmail.com', '-', 'Approve');

-- --------------------------------------------------------

--
-- Table structure for table `sub_menu`
--

CREATE TABLE `sub_menu` (
  `id` int(11) NOT NULL,
  `id_utama` int(11) NOT NULL,
  `nama` int(11) NOT NULL,
  `id_konten` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(10) NOT NULL,
  `nama_team` varchar(40) NOT NULL,
  `posisi` varchar(40) NOT NULL,
  `gambar` varchar(100) NOT NULL,
  `quote` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updated_at` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `nama_team`, `posisi`, `gambar`, `quote`, `created_at`, `updated_at`) VALUES
(9, 'Didin', 'CEO', '1565861466.jpg', 'TP4D merupakan teknologi berbasis website dan mobile apps untuk melayani masyarakat bangkalan', '2020-06-17 07:02:25.000000', '2020-06-17 07:02:25.000000'),
(12, 'irfan', 'CTO', '1567305508.jpg', 'TP4D merupakan terobosan baik bagi masyarakataa', '2020-06-17 07:15:52.000000', '2020-06-17 07:15:52.000000');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gambar` varchar(50) DEFAULT NULL,
  `level` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `gambar`, `level`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', NULL, 'Admin'),
(2, 'didin', '80f0ca7f9c9bf51dea99162632e351aa', NULL, 'Admin'),
(3, 'kivlan', 'd2ced6c2e62c20e22f43cadc483fd898', NULL, 'Admin'),
(19, 'didinfachrudinn@gmail.com', '25bd47aca6f34122939878d74b0819cb', '', 'pemohon'),
(20, 'aksell170113@gmail.com', '37315cf087b659ec57b3d52630377bb3', '', 'pemohon');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_message`
--
ALTER TABLE `chat_message`
  ADD PRIMARY KEY (`chat_message_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foto_konten`
--
ALTER TABLE `foto_konten`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontak`
--
ALTER TABLE `kontak`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `konten`
--
ALTER TABLE `konten`
  ADD PRIMARY KEY (`konten_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`login_details_id`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`idlokasi`);

--
-- Indexes for table `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`idmaps`);

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_utama`
--
ALTER TABLE `menu_utama`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pengajuan_form`
--
ALTER TABLE `pengajuan_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_menu`
--
ALTER TABLE `sub_menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utama` (`id_utama`),
  ADD KEY `id_konten` (`id_konten`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `chat_message`
--
ALTER TABLE `chat_message`
  MODIFY `chat_message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `konten`
--
ALTER TABLE `konten`
  MODIFY `konten_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `login_details`
--
ALTER TABLE `login_details`
  MODIFY `login_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `idlokasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `maps`
--
ALTER TABLE `maps`
  MODIFY `idmaps` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pengajuan_form`
--
ALTER TABLE `pengajuan_form`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
