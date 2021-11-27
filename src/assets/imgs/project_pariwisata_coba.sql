-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jan 2021 pada 03.17
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_pariwisata_coba`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cindramatas`
--

CREATE TABLE `cindramatas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama cindramata',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nomor kontak cindramata',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar cindramata',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat hotel',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude tempat',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude tempat',
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan tempat ibadah; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cindramatas`
--

INSERT INTO `cindramatas` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `slug`, `nomor_kontak`, `gambar`, `alamat`, `latitude`, `longitude`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, NULL, 'tempat cendramataa', 'tempat-cendramataa', '081364565239', 'tempat-cendramataa.png', 'jl azkiaris no 5222', '0.5046271999999999', '101.4628352', 2, '2020-10-20 07:12:00', '2020-10-20 07:21:18', '2020-10-20 07:21:18'),
(2, 1, NULL, 'Telaga Suri Perdana', 'telaga-suri-perdana', '081364565239', 'telaga-suri-perdana.jpg', 'jl azkiaris no 52', '0.5046271999999999', '101.4628352', 3, '2020-10-20 07:20:11', '2020-10-20 07:20:11', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cindramata_details`
--

CREATE TABLE `cindramata_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cindramata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel cindramatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama cindramata',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar cindramata',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cindramata_details`
--

INSERT INTO `cindramata_details` (`id`, `cindramata_id`, `nama`, `gambar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 2, 'Kereta Anakk', 'telaga-suri-perdana-kereta-anakk.png', '2020-10-20 08:18:29', '2020-10-20 08:25:45', '2020-10-20 08:25:45'),
(3, 2, 'Bengkoang', 'telaga-suri-perdana-bengkoang.png', '2021-01-10 10:44:18', '2021-01-10 10:44:18', NULL),
(4, 2, 'Kereta Anak', 'telaga-suri-perdana-kereta-anak.png', '2021-01-10 10:44:30', '2021-01-10 10:44:30', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pertanyaan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `nama`, `email`, `pertanyaan`, `created_at`, `updated_at`) VALUES
(1, 'try mersianto', 'try.mersianto@gmail.com', 'halloo', '2020-12-03 14:06:51', '2020-12-03 14:06:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `desa_wisatas`
--

CREATE TABLE `desa_wisatas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `kecamatan_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kecamatans',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama dari desa wisata',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari desa wisata',
  `potensi_wisata` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari desa wisata',
  `kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari desa wisata',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'statusnya',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `desa_wisatas`
--

INSERT INTO `desa_wisatas` (`id`, `kabupaten_id`, `kecamatan_id`, `nama`, `alamat`, `potensi_wisata`, `kontak`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 4, 'Telaga Suri Perdanaa', 'jl azkiaris no 52244', 'air terjun', '0813645652399', '1', '2020-12-05 21:41:52', '2020-12-05 21:42:49', '2020-12-05 21:42:49'),
(2, 3, 4, 'Telaga Suri Perdana', 'jl azkiaris no 522', 'potensi 1,potensi 2', '0813645652399', '3', '2021-01-10 10:51:52', '2021-01-10 10:51:52', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekrafs`
--

CREATE TABLE `ekrafs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `kategori_ekraf_id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_kontak` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_usaha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `ekrafs`
--

INSERT INTO `ekrafs` (`id`, `kabupaten_id`, `kategori_ekraf_id`, `nama`, `alamat`, `nomor_kontak`, `jenis_usaha`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 1, 'try', 'try', '081364565239', 'try', '3', '2021-01-10 09:40:04', '2021-01-20 03:01:22', '2021-01-20 03:01:22'),
(2, 3, 1, 'asa', 'as', '7676767', 'try', '3', '2021-01-20 03:01:36', '2021-01-20 03:01:36', NULL),
(3, 3, 2, 'yy', 'yuyu', '081364565239', 'asa', '3', '2021-01-20 03:01:53', '2021-01-20 03:01:53', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objek_wisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama event',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_mulai` date DEFAULT NULL COMMENT 'tanggal mulai event',
  `tanggal_selesai` date DEFAULT NULL COMMENT 'tanggal selesai event',
  `gambar_header` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar untuk header page event',
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan event; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `events`
--

INSERT INTO `events` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `slug`, `tanggal_mulai`, `tanggal_selesai`, `gambar_header`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, 4, 'Nama Event', 'nama-event', '2020-11-30', '2020-12-31', 'nama-event.jpg', 2, '2020-10-22 08:05:18', '2020-10-22 08:25:23', '2020-10-22 08:25:23'),
(2, 2, NULL, 'Nama Event2', 'nama-event2', '2020-10-20', '2020-10-29', 'nama-event2.png', 3, '2020-10-22 08:13:07', '2020-10-22 08:25:37', '2020-10-22 08:25:37'),
(3, 2, 4, 'Nama Event3', 'nama-event3', '2020-12-14', '2020-12-31', 'nama-event3.jpg', 1, '2020-10-22 08:22:03', '2020-10-22 08:25:19', '2020-10-22 08:25:19'),
(4, 3, 5, 'Nama Event', 'nama-event', '2020-11-29', '2020-11-30', 'nama-event.jpg', 3, '2020-11-29 00:25:54', '2020-11-29 00:25:54', NULL),
(5, 3, NULL, 'Nama Event2', 'nama-event2', '2020-11-10', '2020-11-18', 'nama-event2.jpg', 3, '2020-11-29 00:26:16', '2020-11-29 00:26:16', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `hotels`
--

CREATE TABLE `hotels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama hotel',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'deskripsi hotel',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar hotel',
  `layanan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'layanan hotel',
  `jenis` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jenis hotel; melati atau berbintang sekian',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat hotel',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude hotel',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude hotel',
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan hotel; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hotels`
--

INSERT INTO `hotels` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `slug`, `deskripsi`, `gambar`, `layanan`, `jenis`, `alamat`, `latitude`, `longitude`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, 4, 'Telaga Suri Perdana', 'Telaga Suri Perdana', '<p>sdasd<p>asdasd</p></p>\n', 'telaga-suri-perdana.jpg', '1,2,3', '1', 'jl azkiaris no 522', '0.5046271999999999', '101.4628352', 3, '2020-10-20 19:05:06', '2020-10-20 19:05:06', NULL),
(2, 3, NULL, 'Telaga Suri Perdana', 'Telaga Suri Perdana', '<p>sadasdad<p>asdasdas</p><p><img data-filename=\"Pekanbaru-Kampung-Bandar.jpg\" style=\"width: 861.875px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-hotel/telaga-suri-perdana_1.jpeg\"><br></p></p>\n', 'telaga-suri-perdana.jpg', '1,2,3,4,5', '1', 'jl azkiaris no 522', '0.475136', '101.42679040000002', 3, '2020-11-23 13:58:00', '2020-11-23 13:58:00', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `hotel_gambars`
--

CREATE TABLE `hotel_gambars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hotel_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel hotels',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar hotel',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hotel_gambars`
--

INSERT INTO `hotel_gambars` (`id`, `hotel_id`, `gambar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'telaga-suri-perdana-1.jpg', '2021-01-17 01:07:24', '2021-01-17 01:07:24', NULL),
(2, 1, 'telaga-suri-perdana-1.jpg', '2021-01-17 01:07:31', '2021-01-17 01:07:31', NULL),
(3, 1, 'telaga-suri-perdana-1.jpg', '2021-01-17 01:07:38', '2021-01-17 01:07:38', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `hotel_reviews`
--

CREATE TABLE `hotel_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hotel_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel Hotels',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama pemberi review',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'email pemberi review',
  `rating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'rating dalam format angka 1-5',
  `ulasan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ulasan dari pengguna',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '0 belum di setujui 1 sudah',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `iklans`
--

CREATE TABLE `iklans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar_banner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `iklans`
--

INSERT INTO `iklans` (`id`, `nama`, `gambar_banner`, `url`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Indonesia Travell', 'indonesia-travel.jpg', 'https://www.indonesia.travel/id/id/homell', '2020-12-06 02:17:42', '2020-12-06 02:19:39', '2020-12-06 02:19:39'),
(2, 'iklan 1', 'iklan-1.png', 'http://riaucreativecentre.riau.go.id/', '2021-01-11 04:06:38', '2021-01-11 04:06:38', NULL),
(3, 'iklan 2', 'iklan-2.png', 'http://riaucreativecentre.riau.go.id/', '2021-01-11 04:06:53', '2021-01-11 04:06:53', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kabupatens`
--

CREATE TABLE `kabupatens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama kabupaten',
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'keterangan kabupaten',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar kabupaten',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat kabupaten',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keywords` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude kabupaten',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude kabupaten',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kabupatens`
--

INSERT INTO `kabupatens` (`id`, `nama`, `keterangan`, `gambar`, `alamat`, `slug`, `meta_description`, `meta_keywords`, `latitude`, `longitude`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Bengkalis', '<p>asdasdasdasdad<p>asdasd</p><p>adasd</p><p><img data-filename=\"stranger-2-drama-cover-680x384.jpg\" style=\"width: 680px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/bengkalis_1.jpeg\"><br></p></p>\n', 'bengkalis.jpg', NULL, '', '', '', '1.466540', '102.250908', '2020-10-15 09:42:57', '2020-11-18 01:55:23', '2020-11-18 01:55:23'),
(2, 'Indragiri Hilir', '<p>Indragiri Hilir<br></p>\n', 'indragiri_hilir.jpg', NULL, '', '', '', '1.466540', '102.250908', '2020-10-16 03:17:24', '2020-11-18 01:55:21', '2020-11-18 01:55:21'),
(3, 'Pekanbaru', '<p>Pekanbaru mempunyai satu bandar udara internasional, yaitu Bandar Udara Sultan Syarif Kasim II dan terminal bus antar kota dan antar provinsi Bandar Raya Payung Sekaki, serta dua pelabuhan di Sungai Siak, yaitu Pelita Pantai dan Sungai Duku. Saat ini Kota Pekanbaru sedang berkembang pesat menjadi kota dagang yang multi-etnik, keberagaman ini telah menjadi modal sosial dalam mencapai kepentingan bersama untuk dimanfaatkan bagi kesejahteraan masyarakatnya<p><img data-filename=\"Pekanbaru-Kampung-Bandar.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/pekanbaru_1.jpeg\"></p><p><span style=\"letter-spacing: 0.4992px;\">Pekanbaru mempunyai satu bandar udara internasional, yaitu Bandar Udara Sultan Syarif Kasim II dan terminal bus antar kota dan antar pro</span><br></p><p></p><p></p></p>\n', 'pekanbaru.jpg', NULL, 'pekanbaru', 'Pekanbaru mempunyai satu bandar udara internasional yaitu Bandar Udara Sultan Syarif Kasim II dan terminal bus antar kota dan antar provinsi Bandar Raya Payung ...', 'Pekanbaru', '0.5013504', '101.43334399999999', '2020-11-18 01:57:35', '2020-11-23 13:32:16', NULL),
(4, 'Dumai', '<p><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kota Dumai adalah sebuah kota di Provinsi Riau, Indonesia, sekitar 188 km dari Kota Pekanbaru. Dumai adalah kota dengan wilayah administrasi terluas ketiga di Indonesia, setelah Kota Palangka Raya dan Kota Tidore Kepulauan. Kota ini berawal dari sebuah dusun kecil di pesisir timur Provinsi Riau.</span><p><img data-filename=\"Teluk-MAkmur-2.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/dumai_1.jpeg\"><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\"><br></span><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kota Dumai adalah sebuah kota di Provinsi Riau, Indonesia, sekitar 188 km dari Kota Pekanbaru. Dumai adalah kota dengan wilayah administrasi terluas ketiga di Indonesia, setelah Kota Palangka Raya dan Kota Tidore Kepulauan. Kota ini berawal dari sebuah dusun kecil di pesisir timur Provinsi Riau.</span><br></p></p>\n', 'dumai.jpg', NULL, 'dumai', 'Kota Dumai adalah sebuah kota di Provinsi Riau Indonesia sekitar 188 km dari Kota Pekanbaru Dumai adalah kota dengan wilayah administrasi terluas ketiga di Indo...', 'Dumai', '1.676924', '101.402509', '2020-11-18 02:00:00', '2020-11-23 12:54:08', NULL),
(5, 'Kuantan Singingi', '<p><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Kuantan Singingi adalah salah satu kabupaten di Provinsi Riau, Indonesia. Kabupaten Kuansing disebut pula dengan rantau Kuantan atau sebagai daerah perantauan orang-orang Minangkabau. Dalam kehidupan sehari-hari, masyarakat Kuansing menggunakan adat istiadat serta bahasa Minangkabau.</span><p><img data-filename=\"Kuansing-Pacu-Jalur.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/kuantan_singingi_1.jpeg\"><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\"><br></span><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Kuantan Singingi adalah salah satu kabupaten di Provinsi Riau, Indonesia. Kabupaten Kuansing disebut pula dengan rantau Kuantan atau sebagai daerah perantauan orang-orang Minangkabau. Dalam kehidupan sehari-hari, masyarakat Kuansing menggunakan adat istiadat serta bahasa Minangkabau.</span><br></p></p>\n', 'kuantan_singingi.jpg', NULL, 'kuantan_singingi', 'Kabupaten Kuantan Singingi adalah salah satu kabupaten di Provinsi Riau Indonesia Kabupaten Kuansing disebut pula dengan rantau Kuantan atau sebagai daerah pera...', 'Kuantan, Singingi', '-0.542439', '101.570599', '2020-11-18 02:01:40', '2020-11-23 12:53:57', NULL),
(6, 'Indragiri Hulu', '<p><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Indragiri Hulu atau sering disingkat Inhu adalah sebuah kabupaten di Provinsi Riau, Indonesia. Kabupaten ini adalah kabupaten terbersih di Riau, Kebersihannya terletak di ibu kotanya yakni Rengat. Rengat dikenal dengan keramahannya.</span><p><img data-filename=\"Inhu-Danau-Raja.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/indragiri_hulu_1.jpeg\"><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\"><br></span><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Indragiri Hulu atau sering disingkat Inhu adalah sebuah kabupaten di Provinsi Riau, Indonesia. Kabupaten ini adalah kabupaten terbersih di Riau, Kebersihannya terletak di ibu kotanya yakni Rengat. Rengat dikenal dengan keramahannya.</span><br></p></p>\n', 'indragiri_hulu.jpg', NULL, 'indragiri_hulu', 'Kabupaten Indragiri Hulu atau sering disingkat Inhu adalah sebuah kabupaten di Provinsi Riau Indonesia Kabupaten ini adalah kabupaten terbersih di Riau Kebersih...', 'Indragiri, Hulu', '-0.369587', '102.525243', '2020-11-18 02:02:57', '2020-11-23 12:53:52', NULL),
(7, 'Indragiri Hilir', '<p><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Indragiri Hilir adalah sebuah kabupaten yang terletak di Provinsi Riau, Indonesia</span><p><img data-filename=\"NIKON-CORPORATION-NIKON-D5100-4928x3264-010649.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/indragiri_hilir_1.jpeg\"><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\"><br></span><span style=\"color: rgb(100, 100, 100); font-family: Signika, sans-serif; font-size: 16px; letter-spacing: normal;\">Kabupaten Indragiri Hilir adalah sebuah kabupaten yang terletak di Provinsi Riau, Indonesia</span><br></p><p></p></p>\n', 'indragiri_hilir.jpg', NULL, 'indragiri_hilir', 'Kabupaten Indragiri Hilir adalah sebuah kabupaten yang terletak di Provinsi Riau Indonesia Kabupaten Indragiri Hilir adalah sebuah kabupaten yang terletak di Pr...', 'Indragiri, Hilir', '-0.313922', '103.162819', '2020-11-18 02:05:03', '2020-11-23 12:53:47', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_ekrafs`
--

CREATE TABLE `kategori_ekrafs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kategori_ekrafs`
--

INSERT INTO `kategori_ekrafs` (`id`, `nama`, `deskripsi`, `gambar`, `slug`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'kat ekraf 1', '<p>kat ekraf 1<br></p>\n', 'kat_ekraf_1.jpg', 'kat-ekraf-1', '2021-01-10 07:58:44', '2021-01-10 07:58:44', NULL),
(2, 'Ekraf 2', '<p>asas</p>\n', 'ekraf_2.jpg', 'ekraf-2', '2021-01-20 03:01:12', '2021-01-20 03:01:12', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kecamatans`
--

CREATE TABLE `kecamatans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama kecamatan',
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'keterangan kecamatan',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar kecamatan',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat kecamatan',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude kecamatan',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude kecamatan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kecamatans`
--

INSERT INTO `kecamatans` (`id`, `kabupaten_id`, `nama`, `keterangan`, `gambar`, `alamat`, `latitude`, `longitude`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Bantan', 'Bantan', 'bantan.jpg', 'Bantan', '1.514740', '102.354830', '2020-10-15 16:50:49', '2020-11-18 02:20:59', '2020-11-18 02:20:59'),
(2, 1, 'Bantan2', 'Bantan', 'bantan.jpg', 'Bantan', '1.514740', '102.354830', '2020-10-15 16:50:49', '2020-11-18 02:21:02', '2020-11-18 02:21:02'),
(3, 2, 'kec inhil', 'Bantan', 'bantan.jpg', 'Bantan', '1.514740', '102.354830', '2020-10-15 16:50:49', '2020-10-20 07:01:28', '2020-10-20 07:01:28'),
(4, 3, 'Kecamatan Bukit Raya', '<p><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- Kelurahan Tangkerang Labuai</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- Kelurahan Dirgantara</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- Kelurahan Simpang Tiga</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- Kelurahan Tebingtinggi</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- KelurahanTangkerang Selatan</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"><span style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\">- Kelurahan Tangkerang Utara</span><br style=\"color: rgba(0, 0, 0, 0.84); font-family: Roboto; letter-spacing: normal;\"></p>\n', 'kecamatan_bukit_raya.jpg', NULL, '0.5013504', '101.43334399999999', '2020-11-18 02:22:00', '2020-11-18 02:25:12', NULL),
(5, 4, 'Bukit Kapur', '<p>Bukit Kapur<br></p>\n', 'bukit_kapur.jpg', NULL, '0.5013504', '101.43334399999999', '2020-11-18 02:27:36', '2020-11-18 02:27:36', NULL),
(6, 5, 'Kuantan Hilir Seberang', '<p>Kuantan Hilir Seberang<br></p>\n', 'kuantan_hilir_seberang.jpg', NULL, '0.5013504', '101.43334399999999', '2020-11-18 02:28:36', '2020-11-18 02:28:36', NULL),
(7, 6, 'Rengat', '<p>Rengat<br></p>\n', 'rengat.jpg', NULL, '0.5013504', '101.43334399999999', '2020-11-18 02:29:36', '2020-11-18 02:29:36', NULL),
(8, 7, 'Kuala Indragiri', '<p>Kuala Indragiri<br></p>\n', 'kuala_indragiri.jpg', NULL, '0.5013504', '101.43334399999999', '2020-11-18 02:34:09', '2020-11-18 02:34:09', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kuliners`
--

CREATE TABLE `kuliners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari objek wisata',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama judul',
  `isi` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'isi artikel',
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keyword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0' COMMENT 'status verifikasi objek wisata; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kuliners`
--

INSERT INTO `kuliners` (`id`, `kabupaten_id`, `alamat`, `title`, `isi`, `meta_description`, `meta_keyword`, `slug`, `thumbnail`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, 'alamatt', 'sate baruu', '<p>isinyassss<img data-filename=\"IMG_7216.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-kuliner/sate-baru_1.jpeg\"></p>\n', 'isinyassss...', 'sate, baruu', 'sate-baruu', 'sate-baru_1.jpeg', '3', '2020-12-06 11:45:39', '2020-12-06 12:14:23', '2020-12-06 12:14:23'),
(2, 3, 'jl azkiaris no 522', 'Telaga Suri Perdana', '<p>sadasdasd<p>asdasd</p><p>asd</p><p><img data-filename=\"image_2021-01-10_23-44-45.png\" style=\"width: 444px;\" src=\"http://localhost/project/coding/pariwisata2/public/uploads/images/gambar-kuliner/telaga-suri-perdana_1.png\"><br></p></p>\n', 'sadasdasd asdasd asd...', 'Telaga, Suri, Perdana', 'telaga-suri-perdana', 'telaga-suri-perdana_1.png', '3', '2021-01-10 11:02:01', '2021-01-10 11:02:01', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kunjungans`
--

CREATE TABLE `kunjungans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objek_wisatas',
  `lokal` int(11) DEFAULT NULL COMMENT 'nilai pengunjung lokal',
  `internasional` int(11) DEFAULT NULL COMMENT 'nilai pengunjung internasional',
  `bulan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'bulan saat pengunjung datang masing-masing antara lokal atau internasional',
  `tahun` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'tahun saat pengunjung datang masing-masing antara lokal atau internasional',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kunjungans`
--

INSERT INTO `kunjungans` (`id`, `objek_wisata_id`, `lokal`, `internasional`, `bulan`, `tahun`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, 1200, 400, '2', '2020', '2020-12-06 02:48:35', '2020-12-06 02:59:39', '2020-12-06 02:59:39'),
(2, 5, 122, 22, '1', '2020', '2020-12-06 03:00:01', '2020-12-06 03:00:01', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `labels`
--

CREATE TABLE `labels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama label',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `labels`
--

INSERT INTO `labels` (`id`, `nama`, `slug`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'beritaa', 'beritaa', '2020-10-21 22:00:13', '2020-10-21 21:59:12', '2020-10-21 22:00:13'),
(2, 'Tempat Liburan', 'tempat-liburan', NULL, '2020-10-21 23:05:28', '2020-10-21 23:05:28'),
(3, 'Liburan', 'liburan', NULL, '2020-10-21 23:05:33', '2020-10-21 23:05:33'),
(4, '#covid', '', NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53'),
(5, '#dirumahaja', '', NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53'),
(6, '#liburandiriauu', 'liburandiriauu', NULL, '2020-10-22 01:25:27', '2020-10-31 09:00:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `label_metas`
--

CREATE TABLE `label_metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel label',
  `post_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel post',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `label_metas`
--

INSERT INTO `label_metas` (`id`, `label_id`, `post_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53', NULL),
(2, 3, NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53', NULL),
(3, 4, NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53', NULL),
(4, 5, NULL, '2020-10-21 23:31:53', '2020-10-21 23:31:53', NULL),
(5, 3, 3, '2020-10-22 01:25:27', '2020-10-22 07:28:29', '2020-10-22 07:28:29'),
(6, 5, 3, '2020-10-22 01:25:27', '2020-10-22 07:28:29', '2020-10-22 07:28:29'),
(7, 6, 3, '2020-10-22 01:25:27', '2020-10-22 07:28:29', '2020-10-22 07:28:29'),
(8, 3, 3, '2020-10-22 07:28:29', '2020-10-22 07:30:41', '2020-10-22 07:30:41'),
(9, 6, 3, '2020-10-22 07:28:29', '2020-10-22 07:30:41', '2020-10-22 07:30:41'),
(10, 3, 4, '2020-11-21 06:01:17', '2020-12-06 12:00:16', '2020-12-06 12:00:16'),
(11, 6, 4, '2020-11-21 06:01:17', '2020-12-06 12:00:16', '2020-12-06 12:00:16'),
(12, 3, 4, '2020-12-06 12:00:16', '2020-12-06 12:01:38', '2020-12-06 12:01:38'),
(13, 6, 4, '2020-12-06 12:00:16', '2020-12-06 12:01:38', '2020-12-06 12:01:38'),
(14, 3, 4, '2020-12-06 12:01:38', '2020-12-06 12:01:58', '2020-12-06 12:01:58'),
(15, 6, 4, '2020-12-06 12:01:38', '2020-12-06 12:01:58', '2020-12-06 12:01:58'),
(16, 3, 4, '2020-12-06 12:01:58', '2020-12-06 12:03:58', '2020-12-06 12:03:58'),
(17, 6, 4, '2020-12-06 12:01:58', '2020-12-06 12:03:58', '2020-12-06 12:03:58'),
(18, 3, 4, '2020-12-06 12:03:58', '2020-12-06 12:04:15', '2020-12-06 12:04:15'),
(19, 6, 4, '2020-12-06 12:03:58', '2020-12-06 12:04:15', '2020-12-06 12:04:15'),
(20, 3, 4, '2020-12-06 12:04:15', '2020-12-06 12:04:35', '2020-12-06 12:04:35'),
(21, 6, 4, '2020-12-06 12:04:15', '2020-12-06 12:04:35', '2020-12-06 12:04:35'),
(22, 3, 4, '2020-12-06 12:04:35', '2020-12-06 12:04:49', '2020-12-06 12:04:49'),
(23, 6, 4, '2020-12-06 12:04:35', '2020-12-06 12:04:49', '2020-12-06 12:04:49'),
(24, 3, 4, '2020-12-06 12:04:49', '2020-12-06 12:05:32', '2020-12-06 12:05:32'),
(25, 6, 4, '2020-12-06 12:04:49', '2020-12-06 12:05:32', '2020-12-06 12:05:32'),
(26, 3, 4, '2020-12-06 12:05:32', '2020-12-06 12:06:23', '2020-12-06 12:06:23'),
(27, 6, 4, '2020-12-06 12:05:32', '2020-12-06 12:06:23', '2020-12-06 12:06:23'),
(28, 3, 4, '2020-12-06 12:06:23', '2020-12-06 12:07:42', '2020-12-06 12:07:42'),
(29, 6, 4, '2020-12-06 12:06:23', '2020-12-06 12:07:42', '2020-12-06 12:07:42'),
(30, 3, 4, '2020-12-06 12:07:42', '2020-12-06 12:08:04', '2020-12-06 12:08:04'),
(31, 6, 4, '2020-12-06 12:07:42', '2020-12-06 12:08:04', '2020-12-06 12:08:04'),
(32, 3, 4, '2020-12-06 12:08:04', '2020-12-06 12:08:44', '2020-12-06 12:08:44'),
(33, 6, 4, '2020-12-06 12:08:04', '2020-12-06 12:08:44', '2020-12-06 12:08:44'),
(34, 3, 4, '2020-12-06 12:08:44', '2020-12-06 12:10:26', '2020-12-06 12:10:26'),
(35, 6, 4, '2020-12-06 12:08:44', '2020-12-06 12:10:26', '2020-12-06 12:10:26'),
(36, 3, 4, '2020-12-06 12:10:26', '2020-12-06 12:10:49', '2020-12-06 12:10:49'),
(37, 6, 4, '2020-12-06 12:10:26', '2020-12-06 12:10:49', '2020-12-06 12:10:49'),
(38, 3, 4, '2020-12-06 12:10:49', '2020-12-06 12:11:34', '2020-12-06 12:11:34'),
(39, 6, 4, '2020-12-06 12:10:50', '2020-12-06 12:11:34', '2020-12-06 12:11:34'),
(40, 3, 4, '2020-12-06 12:11:34', '2020-12-06 12:12:24', '2020-12-06 12:12:24'),
(41, 6, 4, '2020-12-06 12:11:34', '2020-12-06 12:12:24', '2020-12-06 12:12:24'),
(42, 3, 4, '2020-12-06 12:12:24', '2020-12-06 12:12:38', '2020-12-06 12:12:38'),
(43, 6, 4, '2020-12-06 12:12:24', '2020-12-06 12:12:38', '2020-12-06 12:12:38'),
(44, 3, 4, '2020-12-06 12:12:38', '2020-12-06 12:12:38', NULL),
(45, 6, 4, '2020-12-06 12:12:38', '2020-12-06 12:12:38', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `link_terkaits`
--

CREATE TABLE `link_terkaits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `link_terkaits`
--

INSERT INTO `link_terkaits` (`id`, `nama_link`, `link`, `path`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Indonesia Travell', 'https://www.indonesia.travel', 'indonesia-travell.jpg', '2020-11-21 05:53:39', '2020-11-21 05:43:05', '2020-11-21 05:53:39'),
(2, 'Indonesia Travel2', 'https://www.indonesia.travel/id/id/home', 'indonesia-travel2.png', NULL, '2020-11-21 05:52:31', '2020-11-21 05:52:31'),
(3, 'Indonesia Travel', 'https://www.indonesia.travel/id/id/home', 'indonesia-travel.jpg', NULL, '2020-11-21 05:52:43', '2020-11-21 05:52:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2013_10_13_034813_create_kabupatens_table', 1),
(2, '2013_10_15_090350_create_kategori_ekrafs_table', 1),
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1),
(5, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(6, '2019_08_19_000000_create_failed_jobs_table', 1),
(7, '2020_10_15_090403_create_ekrafs_table', 1),
(8, '2020_10_15_121004_create_kecamatans_table', 1),
(25, '2020_10_15_121005_create_objek_wisatas_table', 2),
(27, '2020_10_15_121016_create_kunjungans_table', 2),
(29, '2020_10_15_140632_create_hotels_table', 2),
(30, '2020_10_15_140643_create_hotel_gambars_table', 2),
(31, '2020_10_15_140713_create_restaurants_table', 2),
(32, '2020_10_15_140722_create_restaurant_gambars_table', 2),
(33, '2020_10_15_140732_create_restaurant_menus_table', 2),
(34, '2020_10_15_140829_create_tempat_ibadahs_table', 2),
(37, '2021_6_15_120032_create_objek_wisata_details_table', 2),
(38, '2021_7_15_120129_create_objek_wisata_amenitas_table', 2),
(39, '2021_8_15_120118_create_objek_wisata_gambars_table', 2),
(40, '2021_9_15_120107_create_objek_wisata_aksebilitas_table', 2),
(41, '2020_10_15_140844_create_cindramatas_table', 3),
(42, '2020_10_15_140853_create_cindramata_details_table', 3),
(43, '2020_10_15_121035_create_sosial_media_table', 4),
(50, '2020_10_22_040630_create_post_categories_table', 5),
(51, '2020_10_22_040644_create_labels_table', 5),
(54, '2020_10_22_040700_create_posts_table', 6),
(55, '2020_10_22_040709_create_label_metas_table', 6),
(56, '2020_10_15_121006_create_events_table', 7),
(57, '2021_11_14_082758_create_settings_table', 8),
(58, '2020_11_21_122451_create_link_terkaits_table', 9),
(59, '2020_11_30_020746_create_objek_wisata_reviews_table', 10),
(60, '2020_12_03_210350_create_contacts_table', 11),
(61, '2020_12_03_214403_create_sadar_wisatas_table', 12),
(63, '2020_12_06_034454_create_pemandu_wisatas_table', 13),
(64, '2020_12_06_043316_create_desa_wisatas_table', 14),
(65, '2020_12_06_045614_create_travel_table', 15),
(66, '2020_12_06_043137_create_hotel_reviews_table', 16),
(68, '2020_12_06_090543_create_iklans_table', 17),
(69, '2020_12_06_082256_create_restaurant_reviews_table', 18),
(70, '2020_12_06_082416_create_tempatibadah_reviews_table', 18),
(74, '2020_12_06_181735_create_kuliners_table', 19);

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisatas`
--

CREATE TABLE `objek_wisatas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `kecamatan_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kecamatans',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama dari objek wisata',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'deskripsi dari objek wisata',
  `jenis` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jenis jenis,alam atau buatan',
  `video_promosi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'link video promosi yang dari youtube ex: <iframe width="1237" height="696" src="https://www.youtube.com/embed/3oL4e24Dzyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  `gambar_header` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar untuk header page objek wisata',
  `desa` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'desa dari objek wisata',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude dari objek wisata',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude dari objek wisata',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari objek wisata',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0' COMMENT 'status verifikasi objek wisata; 0 untuk diajukan',
  `jarak_provinsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jarak provinsi ke objek wisata',
  `jarak_kabuten` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jarak kabupaten ke objek wisata',
  `pilihan` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisatas`
--

INSERT INTO `objek_wisatas` (`id`, `kabupaten_id`, `kecamatan_id`, `nama`, `slug`, `deskripsi`, `jenis`, `video_promosi`, `gambar_header`, `desa`, `latitude`, `longitude`, `alamat`, `status`, `jarak_provinsi`, `jarak_kabuten`, `pilihan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 2, 'Telaga Suri Perdana', 'Telaga Suri Perdana', '<p>i\'ll keep apart you with me<p>couse i always soar you in my life</p><p>i swear</p><p><img data-filename=\"3281 (1).jpg\" style=\"width: 780px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/telaga-suri-perdana_', '1,2,3', '#', 'telaga-suri-perdana.jpg', 'asdad', '0.5013504', '101.43334399999999', 'jl azkiaris no 522', '3', '215.65 Km (5 Jam 45 Menit)', '2.09 Km (8 Menit)', '', '2020-10-15 23:41:17', '2020-10-16 04:50:44', '2020-10-16 04:50:44'),
(2, 1, 2, 'Telaga Suri Perdana', 'Telaga Suri Perdana', '<p>i\'ll keep apart you with me<p>couse i always soar you in my life</p><p>i swear</p><p><img data-filename=\"3281 (1).jpg\" style=\"width: 780px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/keterangan-kabupaten/telaga-suri-perdana_', '1,2,3', '#', 'telaga-suri-perdana.jpg', 'asdad', '0.5013504', '101.43334399999999', 'jl azkiaris no 522', '2', '215.65 Km (5 Jam 45 Menit)', '2.09 Km (8 Menit)', '', '2020-10-15 23:41:44', '2020-10-16 03:15:39', '2020-10-16 03:15:39'),
(3, 1, 1, 'Telaga Suri Perdana', 'Telaga Suri Perdana', '<p>dasdasdasd</p>\n', '1', '#', 'telaga-suri-perdana.jpg', 'asdad', '0.5013504', '101.43334399999999', 'jl azkiaris no 522', '3', '215.65 Km (5 Jam 45 Menit)', '2.09 Km (8 Menit)', '', '2020-10-16 02:10:18', '2020-10-16 03:15:46', '2020-10-16 03:15:46'),
(4, 2, 3, 'Pantai Solop', 'Pantai Solop', '<p>asdasd<p>asdsadsad</p><p><img style=\"width: 861.875px;\" data-filename=\"optimized-yjqo.jpg\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-objek-wisata/pantai-solop_1.jpeg\"><br></p><p></p></p>\n', '1', '#', 'sadasd.jpg', 'asdad', '-0.0753845', '103.5798445', 'jl azkiaris no 522', '3', '-', '-', '', '2020-10-16 03:19:04', '2020-11-18 01:24:48', '2020-11-18 01:24:48'),
(5, 3, 4, 'Masjid Agung An-Nur', 'masjid-agung-an-nur', '<p>Masjid Agung An-Nur<p><img data-filename=\"2.IMG_1784.jpg\" style=\"width: 861.875px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-objek-wisata/masjid-agung-an-nur_1.jpeg\"></p><p>Masjid Agung An-Nur<br></p></p>\n', '2', 'https://www.youtube.com/watch?v=pnZe3BC80YU', 'masjid-agung-an-nur.jpg', '-', '0.5266685', '101.4486605', 'Pekanbaru', '3', '4.83 Km (12 Menit)', '2.90 Km (8 Menit)', '1', '2020-11-18 02:39:17', '2021-01-10 11:54:52', NULL),
(6, 3, 4, 'Agrowisata Rumbai', 'agrowisata-rumbai', '<p><font color=\"#646464\" face=\"Signika, sans-serif\"><span style=\"font-size: 16px; letter-spacing: normal;\">Agrowisata adalah salah satu kelurahan di Kecamatan Rumbai Barat, Kota Pekanbaru, Provinsi Riau, Indonesia. Kelurahan ini dibentuk dari wilayah Kelurahan Palas dalam pemekaran wilayah di Kota Pekanbaru tahun 2016.</span></font><p><img data-filename=\"1.IMG_1932.jpg\" style=\"width: 861.875px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-objek-wisata/agrowisata-rumbai_1.jpeg\"><font color=\"#646464\" face=\"Signika, sans-serif\"><span style=\"font-size: 16px; letter-spacing: normal;\"><br></span></font><br></p></p>\n', '1,2', 'https://www.youtube.com/watch?v=pnZe3BC80YU', 'agrowisata-rumbai.jpg', 'Agrowisata Rumbai', '-0.0753845', '101.43334399999999', 'Agrowisata Rumbai', '3', '101.55 Km (2 Jam 33 Menit)', '100.42 Km (2 Jam 30 Menit)', '1', '2020-11-28 00:21:04', '2021-01-10 11:55:04', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisata_aksebilitas`
--

CREATE TABLE `objek_wisata_aksebilitas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `kondisi_jalan_menuju` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kondisi jalan menuju objek wisata',
  `kondisi_jalan_dalam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kondisi jalan didalam objek wisata',
  `jenis_transportasi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jenis tranportasi ke objek wisata',
  `biaya` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'biaya menuju ke objek wisata',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisata_aksebilitas`
--

INSERT INTO `objek_wisata_aksebilitas` (`id`, `objek_wisata_id`, `kondisi_jalan_menuju`, `kondisi_jalan_dalam`, `jenis_transportasi`, `biaya`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 4, 'Berbatu', 'Aspal', 'Menggunakan Sepeda Motor lalu berjalan kaki', '1500000', '2020-10-17 00:35:30', '2020-11-18 01:24:48', '2020-11-18 01:24:48'),
(4, NULL, NULL, NULL, NULL, NULL, '2020-10-17 02:54:14', '2020-10-17 02:54:14', NULL),
(5, 5, 'Aspal', 'Aspal', 'Menggunakan kendaraan bermotor', '10000', '2020-11-18 02:40:15', '2020-11-18 02:40:15', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisata_amenitas`
--

CREATE TABLE `objek_wisata_amenitas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `tempat_parkir` int(11) DEFAULT 1 COMMENT 'status tempat parkir objek wisata; 1 untuk ada 0 untuk tidak',
  `fasilitas_kesehatan` int(11) DEFAULT 1 COMMENT 'status fasilitas kesehatan objek wisata; 1 untuk ada 0 untuk tidak',
  `fasilitas_perbelanjaan` int(11) DEFAULT 1 COMMENT 'status fasilitas perbelanjaan objek wisata; 1 untuk ada 0 untuk tidak',
  `listrik` int(11) DEFAULT 1 COMMENT 'status listrik objek wisata; 1 untuk ada 0 untuk tidak',
  `sinyal_provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'sinyal provider yang tersedia didalam objek wisata',
  `street_furniture` int(11) DEFAULT 1 COMMENT 'status street furniture objek wisata; 1 untuk ada 0 untuk tidak',
  `bengkel` int(11) DEFAULT 1 COMMENT 'status bengkel objek wisata; 1 untuk ada 0 untuk tidak',
  `money_changer` int(11) DEFAULT 0 COMMENT 'status money changer objek wisata; 1 untuk ada 0 untuk tidak',
  `tempat_sewa_kendaraan` int(11) DEFAULT 0 COMMENT 'status tempat sewa kendaraan changer objek wisata; 1 untuk ada 0 untuk tidak',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisata_amenitas`
--

INSERT INTO `objek_wisata_amenitas` (`id`, `objek_wisata_id`, `tempat_parkir`, `fasilitas_kesehatan`, `fasilitas_perbelanjaan`, `listrik`, `sinyal_provider`, `street_furniture`, `bengkel`, `money_changer`, `tempat_sewa_kendaraan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(6, 4, 1, 0, 1, 0, 'Telkomsel', 1, 0, 1, 0, '2020-10-17 01:30:24', '2020-11-18 01:24:48', '2020-11-18 01:24:48'),
(7, 5, 1, 1, 1, 1, 'Telkomsel,XL Axiata,Indosat,3 Tri,Axis,Smartfren', 1, 1, 1, 1, '2020-11-18 02:40:40', '2020-11-18 02:40:40', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisata_details`
--

CREATE TABLE `objek_wisata_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `lembaga_pengelola` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'lembaga pengelola dari objek wisata',
  `jenis_pemasaran` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'jenis pemasaran dari objek wisata',
  `peraturan_uu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'peraturan perundang-undangan dari objek wisata',
  `stakeholders` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'stakeholders dari objek wisata',
  `kontak_nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kontak nama dari pengelola objek wisata',
  `kontak_telepon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kontak telepon dari pengelola objek wisata',
  `harga_tiket` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'harga tiket dari objek wisata',
  `halal` int(11) DEFAULT 1 COMMENT 'status halal dari objek wisata; 1 untuk halal 0 untuk tidak',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisata_details`
--

INSERT INTO `objek_wisata_details` (`id`, `objek_wisata_id`, `lembaga_pengelola`, `jenis_pemasaran`, `peraturan_uu`, `stakeholders`, `kontak_nama`, `kontak_telepon`, `harga_tiket`, `halal`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 'lembaga pengelolah', 'Jaringan Sosial', '1', 'asd', 'asd', '081364565239', '081364565239', 0, '2020-10-17 08:35:35', '2020-11-18 01:24:48', '2020-11-18 01:24:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisata_gambars`
--

CREATE TABLE `objek_wisata_gambars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '1' COMMENT 'gambar',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisata_gambars`
--

INSERT INTO `objek_wisata_gambars` (`id`, `objek_wisata_id`, `gambar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 'sadasd-1.jpg', '2020-10-16 04:23:48', '2020-10-16 04:52:23', '2020-10-16 04:52:23'),
(2, 4, 'sadasd-2.png', '2020-10-16 04:23:48', '2020-10-16 04:51:27', '2020-10-16 04:51:27'),
(3, 4, 'sadasd-3.jpg', '2020-10-16 04:23:48', '2020-10-16 04:51:40', '2020-10-16 04:51:40'),
(4, 4, 'sadasd-4.jpg', '2020-10-16 04:23:48', '2020-10-16 04:52:21', '2020-10-16 04:52:21'),
(5, 4, 'sadasd-5.jpg', '2020-10-16 04:23:48', '2020-10-16 04:51:38', '2020-10-16 04:51:38'),
(6, 5, 'masjid-agung-an-nur-1.jpg', '2020-11-18 02:39:28', '2020-11-18 02:39:28', NULL),
(7, 5, 'masjid-agung-an-nur-1.jpg', '2020-11-18 02:39:37', '2020-11-18 02:39:37', NULL),
(8, 5, 'masjid-agung-an-nur-1.jpg', '2020-11-23 16:31:32', '2020-11-23 16:31:32', NULL),
(9, 5, 'masjid-agung-an-nur-2.jpg', '2020-11-23 16:31:32', '2020-11-23 16:31:32', NULL),
(10, 5, 'masjid-agung-an-nur-3.jpg', '2020-11-23 16:31:32', '2020-11-23 16:31:32', NULL),
(12, 5, 'masjid-agung-an-nur-5.jpg', '2020-11-23 16:31:32', '2020-11-23 16:31:32', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `objek_wisata_reviews`
--

CREATE TABLE `objek_wisata_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama pemberi review',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'email pemberi review',
  `rating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'rating dalam format angka 1-5',
  `ulasan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ulasan dari pengguna',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `objek_wisata_reviews`
--

INSERT INTO `objek_wisata_reviews` (`id`, `objek_wisata_id`, `nama`, `email`, `rating`, `ulasan`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, 'try mersianto', 'try.mersianto@gmail.com', '4.0', 'asdadasd', '0', '2020-11-29 19:21:30', '2020-12-02 12:36:39', NULL),
(2, 5, 'try mersianto', 'try.mersianto@gmail.com', '4.0', 'asdadasd', '0', '2020-11-29 19:21:46', '2020-12-02 12:36:37', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemandu_wisatas`
--

CREATE TABLE `pemandu_wisatas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama pemandu wisata',
  `bahasa` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'bahasa bahasa yang dikuasai oleh pemandu wisata',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Alamat dari pemandu wisata',
  `nomor_kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nomor kontak dari pemandu wisata',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pemandu_wisatas`
--

INSERT INTO `pemandu_wisatas` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `bahasa`, `alamat`, `nomor_kontak`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 6, 'Try Mersianto', 'indonesia,inggris,jerman,rusia', 'jl azkiaris no 52', '0813645652340', '1', '2020-12-05 21:20:08', '2020-12-05 21:32:51', '2020-12-05 21:32:51'),
(2, 3, 5, 'Telaga Suri Perdana', 'inggris,indonesia', 'jl azkiaris no 522', '0813645652399', '3', '2021-01-10 11:10:54', '2021-01-14 10:57:30', NULL),
(3, 3, 5, 'try mersianto', 'jerman,russia,inggris,indonesia', 'jl azkiaris no 52221', '0813645652340', '3', '2021-01-10 11:11:23', '2021-01-14 10:56:56', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `post_category_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel post categories',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama judul',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isi` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'isi artikel',
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keyword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan berita; 0 untuk diajukan',
  `dilihat` int(255) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `posts`
--

INSERT INTO `posts` (`id`, `kabupaten_id`, `objek_wisata_id`, `post_category_id`, `title`, `slug`, `isi`, `thumbnail`, `meta_description`, `meta_keyword`, `status`, `dilihat`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, NULL, 2, 'asdasd', 'asdasd', '<p>as</p>\n', 'default.jpg', '<p>as</p>\n', 'asdasd', 3, 0, '2020-10-21 23:31:39', '2020-10-22 07:30:39', '2020-10-22 07:30:39'),
(3, 2, 4, 2, 'Judul Beritaa', 'judul-beritaa', '<p>asdasdtry<p>adasdad</p><p><img data-filename=\"pngegg.png\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-beritaa_1.png\"><br></p><p>asd</p><p>ad</p><p>asd</p><p><br></p><p><img data-filename=\"xuejtlK3pTUIfzC2iQvfmm8bqrO.jpg\" style=\"width: 533px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1.jpeg\"><br></p><p></p></p>\n', 'judul-beritaa_1.png', 'asdasdtry adasdad asd ad asd...', 'Judul, Beritaa', 2, 0, '2020-10-22 01:25:27', '2020-10-22 07:30:41', '2020-10-22 07:30:41'),
(4, 3, NULL, 2, 'Judul Berita', 'judul-berita', '<p><img data-filename=\"Screenshot_8.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-574.jpeg\"><img data-filename=\"IMG_7216.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-790.jpeg\"><img data-filename=\"IMG_7216.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-3203.jpeg\">asdasdasdsad<p><img data-filename=\"xuejtlK3pTUIfzC2iQvfmm8bqrO.jpg\" style=\"width: 533px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-77.jpeg\"></p><p><img data-filename=\"drama-korea-start-up_ratio-16x9.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-2427.jpeg\"><br></p><p>adasdas<img data-filename=\"xambxrjjq0pff5m4d3bf.jpg\" style=\"width: 582px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-62.jpeg\"></p><p>dasdas</p><p><img data-filename=\"Screenshot_8.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_2-14.jpeg\"><span style=\"font-size: 0.875rem; letter-spacing: 0.0312rem;\">asd</span><br></p><p><img data-filename=\"Screenshot_8.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1.jpeg\"><br></p><p><img data-filename=\"gHUdfOLD9517Ug6ZwriVApl9dqr.jpg\" style=\"width: 500px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1.jpeg\"></p><p><img data-filename=\"6ZrXfQSPiSL20a1GW4UXdYRuOk4.jpg\" style=\"width: 533px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-4638.jpeg\"><img data-filename=\"71WjmJHxgqL._RI_.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_2.jpeg\"></p><p><img data-filename=\"71WjmJHxgqL._RI_.jpg\" style=\"width: 727.219px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/gambar-berita/judul-berita_1-4246.jpeg\"><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></p>\n', 'judul-berita_1-790.jpeg', 'asdasdasdsad adasdas dasdas asd...', 'Judul, Berita', 3, 4, '2020-11-21 06:01:17', '2020-12-23 05:10:53', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `post_categories`
--

CREATE TABLE `post_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama kategori',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `post_categories`
--

INSERT INTO `post_categories` (`id`, `nama`, `slug`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Informasi Riauu', 'informasi-riauu', '2020-10-21 21:46:22', '2020-10-21 21:40:45', '2020-10-21 21:46:22'),
(2, 'Informasi Terbaru', 'informasi-terbaru', NULL, '2020-10-21 21:46:52', '2020-10-21 21:46:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurants`
--

CREATE TABLE `restaurants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama restaurant',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'deskripsi restaurant',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat restaurant',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar restaurant',
  `nomor_kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nomor kontak restaurant',
  `halal` int(11) DEFAULT 1 COMMENT 'status halal dari restaurant; 1 untuk halal 0 untuk tidak',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude restaurant',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude restaurant',
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan restaurant; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `restaurants`
--

INSERT INTO `restaurants` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `slug`, `deskripsi`, `alamat`, `gambar`, `nomor_kontak`, `halal`, `latitude`, `longitude`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, NULL, 'nama restaurantt', 'nama-restaurantt', '<p>asdasd<p>adas</p><p><img data-filename=\"xuejtlK3pTUIfzC2iQvfmm8bqrO.jpg\" style=\"width: 533px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-restaurant/nama-restaurantt_1.jpeg\"><br></p><p>asdasd</p><p>asdasd</p><p>asd<', 'jl azkiaris no 5223', 'nama-restaurantt.jpg', '081364565240', 1, '0.507068', '101.447777', 3, '2020-10-18 01:44:29', '2020-10-20 07:20:15', '2020-10-20 07:20:15'),
(2, 2, NULL, 'nama restaurant', 'nama-restaurant', '<p>sdfsd<p>sdfsdf</p><p><img data-filename=\"image_2020-10-18_00-09-20.png\" style=\"width: 481px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-restaurant/nama-restaurant_1.png\"><img data-filename=\"image_2020-10-18_00-08-3', 'jl azkiaris no 522', 'nama-restaurant.jpg', '081364565239', 1, '0.5013504', '101.44317439999999', 3, '2020-10-18 02:10:41', '2020-10-18 02:11:31', '2020-10-18 02:11:31'),
(3, 2, 4, 'nama restaurant', 'nama-restaurant', '<p>asdasd<p>asdsad</p><p>asdsad</p><p>asdsad</p><p><img data-filename=\"xuejtlK3pTUIfzC2iQvfmm8bqrO.jpg\" style=\"width: 533px;\" src=\"http://localhost/project/coding/pariwisata/public/uploads/images/deskripsi-restaurant/nama-restaurant_1.jpeg\"><br></p></p>\n', 'jl azkiaris no 522', 'nama-restaurant.jpg', '081364565239', 1, '0.5046271999999999', '101.4628352', 3, '2020-10-20 18:01:34', '2020-10-20 18:01:34', NULL),
(4, 3, 5, 'nama restaurant', 'nama-restaurant', '<p>nama restaurant<br></p>\n', 'jl azkiaris no 522', 'nama-restaurant.jpg', '081364565239', 1, '1.2941664', '103.7861271', 3, '2020-11-19 05:13:56', '2020-11-19 05:13:56', NULL),
(5, 5, NULL, 'nama restaurant2', 'nama-restaurant2', '<p>nama restaurant2<br></p>\n', 'jl azkiaris no 522', 'nama-restaurant2.jpg', '081364565240', 1, '0.507068', '101.447777', 3, '2020-11-19 05:15:41', '2020-11-19 05:15:41', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurant_gambars`
--

CREATE TABLE `restaurant_gambars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel restaurants',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar restaurant',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `restaurant_gambars`
--

INSERT INTO `restaurant_gambars` (`id`, `restaurant_id`, `gambar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'nama-restaurantt-1.png', '2020-10-18 03:07:03', '2020-10-18 03:13:12', '2020-10-18 03:13:12'),
(2, 1, 'nama-restaurantt-2.jpg', '2020-10-18 03:07:03', '2020-10-20 07:20:15', '2020-10-20 07:20:15'),
(3, 1, 'nama-restaurantt-3.jpg', '2020-10-18 03:07:03', '2020-10-18 03:14:28', '2020-10-18 03:14:28'),
(4, 1, 'nama-restaurantt-4.png', '2020-10-18 03:07:03', '2020-10-18 03:13:07', '2020-10-18 03:13:07'),
(5, 1, 'nama-restaurantt-5.png', '2020-10-18 03:07:03', '2020-10-18 03:13:14', '2020-10-18 03:13:14');

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurant_menus`
--

CREATE TABLE `restaurant_menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel restaurants',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama menu restaurant',
  `deskripsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'deskripsi menu restaurant',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar menu restaurant',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `restaurant_menus`
--

INSERT INTO `restaurant_menus` (`id`, `restaurant_id`, `nama`, `deskripsi`, `gambar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Sambal Baladoytu', 'Ikan di sambalytu', 'nama-restaurantt-sambal-baladoytu.jpg', '2020-10-18 03:40:29', '2020-10-18 03:48:25', '2020-10-18 03:48:25'),
(2, 1, 'Sambal Balado', 'Ikan di sambalytu', 'nama-restaurantt-sambal-balado.jpg', '2020-10-18 03:46:28', '2020-10-20 07:20:15', '2020-10-20 07:20:15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurant_reviews`
--

CREATE TABLE `restaurant_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel Hotels',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama pemberi review',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'email pemberi review',
  `rating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'rating dalam format angka 1-5',
  `ulasan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ulasan dari pengguna',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '0 belum di setujui 1 sudah',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sadar_wisatas`
--

CREATE TABLE `sadar_wisatas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `kecamatan_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kecamatans',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama dari sadar wisata',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari sadar wisata',
  `potensi_wisata` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari sadar wisata',
  `kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari sadar wisata',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sadar_wisatas`
--

INSERT INTO `sadar_wisatas` (`id`, `kabupaten_id`, `kecamatan_id`, `nama`, `alamat`, `potensi_wisata`, `kontak`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 4, 'sadar wisataa', 'alamat sadar wisataa', 'potensi 1,potensi 2', '0813645652399', '1', '2020-12-03 15:15:17', '2020-12-03 15:41:02', NULL),
(2, 3, 4, 'sadar wisata 2', 'alamat sadar wisata2', 'potensi', '081364565239', '1', '2020-12-03 15:15:43', '2020-12-03 15:38:15', '2020-12-03 15:38:15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan_website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat_kantor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo_website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar_login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keywords` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider_gambar_utama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider_gambar_objek_wisata` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider_gambar_event` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider_gambar_restoran` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider_gambar_hotel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar_promosi_satu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar_promosi_dua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_promosi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `settings`
--

INSERT INTO `settings` (`id`, `nama_website`, `keterangan_website`, `alamat_kantor`, `icon`, `email`, `notel`, `logo_website`, `gambar_login`, `meta_description`, `meta_keywords`, `longitude`, `latitude`, `slider_gambar_utama`, `slider_gambar_objek_wisata`, `slider_gambar_event`, `slider_gambar_restoran`, `slider_gambar_hotel`, `gambar_promosi_satu`, `gambar_promosi_dua`, `video_promosi`, `created_at`, `updated_at`) VALUES
(1, 'Destinasi Provinsi Riaua', 'Destinasi Provinsi Riauw', 'Destinasi Provinsi Riaue', 'icon.png', 'try.mersianto@gmail.comm', '081364565240', 'logo_website.png', 'gambar_login.jpg', 'Destinasi Provinsi Riauw', 'Destinasi, Provinsi, Riaua', '101.4289134', '0.4796265', 'slider_gambar_utama.jpg', 'slider_gambar_objek_wisata.jpg', 'slider_gambar_event.jpg', 'slider_gambar_restoran.jpg', 'slider_gambar_hotel.jpg', 'gambar_promosi_satu.jpg', 'gambar_promosi_dua.jpg', 'https://youtu.be/NaObm9CezxA', '2020-11-14 02:39:56', '2020-12-02 12:43:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sosial_media`
--

CREATE TABLE `sosial_media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_tempat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'id tempat yang di deskripsikan didalan function',
  `kode_tempat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kode tempat yang di deskripsikan didalan function',
  `kode_sosmed` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'kode untuk mengetahui itu sosmed apa',
  `alamat_sosmed` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat sosmed bisa berupa username',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sosial_media`
--

INSERT INTO `sosial_media` (`id`, `id_tempat`, `kode_tempat`, `kode_sosmed`, `alamat_sosmed`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '3', '2', '6', 'https://www.youtube.com/watch?v=nSNQ_Qh9Pss&list=RDgXAHzzL2Tv0&index=3', '2020-10-20 18:34:21', '2020-10-20 18:50:46', '2020-10-20 18:50:46'),
(6, '4', '1', '1', 'https://www.youtube.com/watch?v=nSNQ_Qh9Pss&list=RDgXAHzzL2Tv0&index=2', '2020-10-20 18:59:47', '2020-10-20 19:02:34', '2020-10-20 19:02:34'),
(8, '1', '3', '6', 'https://www.youtube.com/watch?v=nSNQ_Qh9Pss&list=RDgXAHzzL2Tv0&index=2', '2020-10-20 19:08:47', '2020-10-20 19:08:56', '2020-10-20 19:08:56'),
(9, '2', '4', '1', 'https://www.youtube.com/watch?v=nSNQ_Qh9Pss&list=RDgXAHzzL2Tv0&index=3', '2020-10-20 19:12:33', '2020-10-20 19:13:14', '2020-10-20 19:13:14'),
(10, '5', '1', '3', 'https://www.facebook.com/MasjidRaya.AnNur.ProvinsiRiau/', '2020-11-18 02:41:14', '2020-11-18 02:41:14', NULL),
(11, '2', '3', '1', 'https://www.facebook.com/MasjidRaya.AnNur.ProvinsiRiau/', '2020-11-23 14:03:14', '2020-11-23 14:03:14', NULL),
(12, '2', '3', '3', 'https://www.facebook.com/MasjidRaya.AnNur.ProvinsiRiau/', '2020-11-23 14:03:22', '2020-11-23 14:03:22', NULL),
(13, '2', '3', '6', 'https://www.youtube.com/watch?v=nSNQ_Qh9Pss&list=RDgXAHzzL2Tv0&index=2', '2020-11-23 14:03:30', '2020-11-23 14:03:30', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tempatibadah_reviews`
--

CREATE TABLE `tempatibadah_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tempat_ibadah_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel Hotels',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama pemberi review',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'email pemberi review',
  `rating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'rating dalam format angka 1-5',
  `ulasan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ulasan dari pengguna',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '0 belum di setujui 1 sudah',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tempat_ibadahs`
--

CREATE TABLE `tempat_ibadahs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `objek_wisata_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel objekwisatas',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama tempat ibadah',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'agama tempat ibadah',
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'gambar tempat ibadah',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat hotel',
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik latitude hotel',
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'titik longitude hotel',
  `status` int(11) DEFAULT 0 COMMENT 'status pengajuan tempat ibadah; 0 untuk diajukan',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tempat_ibadahs`
--

INSERT INTO `tempat_ibadahs` (`id`, `kabupaten_id`, `objek_wisata_id`, `nama`, `slug`, `agama`, `gambar`, `alamat`, `latitude`, `longitude`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, NULL, 'nama tempat ibadahh', 'nama-tempat-ibadahh', 'Islam', 'nama-tempat-ibadahh.jpg', 'jl azkiaris no 52221', '0.5013504', '101.44317439999999', 2, '2020-10-18 04:40:49', '2020-10-18 04:50:07', '2020-10-18 04:50:07'),
(2, 2, 4, 'nama tempat ibadahh', 'nama-tempat-ibadahh', 'Islam', 'nama-tempat-ibadahh.jpg', 'jl azkiaris no 52', '0.5013504', '101.44317439999999', 3, '2020-10-18 04:50:41', '2020-10-18 04:53:01', '2020-10-18 04:53:01'),
(3, 3, 5, 'Mesid Agung An-Nur', 'mesid-agung-an-nur', 'Islam', 'mesid-agung-an-nur.jpg', 'Alamat Lengkap', '1.2941664', '103.7861271', 3, '2020-11-19 05:30:31', '2020-11-19 05:30:31', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `travel`
--

CREATE TABLE `travel` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'foreign key dari tabel kabupatens',
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nama dari travel',
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari travel',
  `kontak` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'alamat dari travel',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'statusnya',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `travel`
--

INSERT INTO `travel` (`id`, `kabupaten_id`, `nama`, `alamat`, `kontak`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 5, 'Telaga Suri Perdanass', 'jl azkiaris no 5', '0813645652340', '3', '2020-12-05 22:08:27', '2020-12-05 22:10:53', '2020-12-05 22:10:53'),
(2, 3, 'Telaga Suri Perdana', 'jl azkiaris no 522', '0813645652399', NULL, '2021-01-10 11:34:03', '2021-01-10 11:34:03', NULL),
(3, 3, 'try mersianto', 'jl azkiaris no 522', '0813645652399ss', NULL, '2021-01-10 11:34:11', '2021-01-10 11:34:11', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kabupaten_id` bigint(20) UNSIGNED DEFAULT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` char(1) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '1 superadmin, 2 destinasi, 3 ekraf, 4 sdp, 5 pemasaran, 6 upt',
  `status` char(1) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '1 aktiv, 0 tidak aktiv',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `kabupaten_id`, `nama`, `username`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `foto`, `level`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Try Mersianto', 'trymersianto', 'try.mersianto@gmail.com', NULL, '$2y$10$CN1p6cwsmdol0jNkb7e5COuVobQ.4OfSH6a5w2VyGNqHqU9yfnMV2', NULL, NULL, 'default.jpg', '1', '1', NULL, '2020-10-15 16:20:53', '2020-10-15 16:20:53'),
(2, 3, 'admin_pekanbaru', 'admin_pekanbaru', 'admin_pekanbaru@gmail.com', NULL, '$2y$10$XCBoga0QQKYSA/kczdYw.Oydhf4YP0saauhzk6BBgq2rv9pkbx..e', NULL, NULL, 'admin_bengkalis.jpg', '7', '1', NULL, '2020-10-15 10:51:17', '2020-10-15 10:51:17');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cindramatas`
--
ALTER TABLE `cindramatas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cindramatas_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `cindramatas_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `cindramata_details`
--
ALTER TABLE `cindramata_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cindramata_details_cindramata_id_foreign` (`cindramata_id`);

--
-- Indeks untuk tabel `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `desa_wisatas`
--
ALTER TABLE `desa_wisatas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `desa_wisatas_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `desa_wisatas_kecamatan_id_foreign` (`kecamatan_id`);

--
-- Indeks untuk tabel `ekrafs`
--
ALTER TABLE `ekrafs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ekrafs_kabupaten_id_foreign` (`kabupaten_id`);

--
-- Indeks untuk tabel `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `events_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `events_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotels_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `hotels_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `hotel_gambars`
--
ALTER TABLE `hotel_gambars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_gambars_hotel_id_foreign` (`hotel_id`);

--
-- Indeks untuk tabel `hotel_reviews`
--
ALTER TABLE `hotel_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_reviews_hotel_id_foreign` (`hotel_id`);

--
-- Indeks untuk tabel `iklans`
--
ALTER TABLE `iklans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kabupatens`
--
ALTER TABLE `kabupatens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kategori_ekrafs`
--
ALTER TABLE `kategori_ekrafs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kecamatans`
--
ALTER TABLE `kecamatans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kecamatans_kabupaten_id_foreign` (`kabupaten_id`);

--
-- Indeks untuk tabel `kuliners`
--
ALTER TABLE `kuliners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kuliners_kabupaten_id_foreign` (`kabupaten_id`);

--
-- Indeks untuk tabel `kunjungans`
--
ALTER TABLE `kunjungans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kunjungans_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `label_metas`
--
ALTER TABLE `label_metas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `label_metas_label_id_foreign` (`label_id`),
  ADD KEY `label_metas_post_id_foreign` (`post_id`);

--
-- Indeks untuk tabel `link_terkaits`
--
ALTER TABLE `link_terkaits`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisatas_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `objek_wisatas_kecamatan_id_foreign` (`kecamatan_id`);

--
-- Indeks untuk tabel `objek_wisata_aksebilitas`
--
ALTER TABLE `objek_wisata_aksebilitas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisata_aksebilitas_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `objek_wisata_amenitas`
--
ALTER TABLE `objek_wisata_amenitas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisata_amenitas_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `objek_wisata_details`
--
ALTER TABLE `objek_wisata_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisata_details_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `objek_wisata_gambars`
--
ALTER TABLE `objek_wisata_gambars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisata_gambars_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `objek_wisata_reviews`
--
ALTER TABLE `objek_wisata_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objek_wisata_reviews_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `pemandu_wisatas`
--
ALTER TABLE `pemandu_wisatas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pemandu_wisatas_objek_wisata_id_foreign` (`objek_wisata_id`),
  ADD KEY `pemandu_wisatas_kabupaten_id_foreign` (`kabupaten_id`);

--
-- Indeks untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `posts_objek_wisata_id_foreign` (`objek_wisata_id`),
  ADD KEY `posts_post_category_id_foreign` (`post_category_id`);

--
-- Indeks untuk tabel `post_categories`
--
ALTER TABLE `post_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurants_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `restaurants_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `restaurant_gambars`
--
ALTER TABLE `restaurant_gambars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurant_gambars_restaurant_id_foreign` (`restaurant_id`);

--
-- Indeks untuk tabel `restaurant_menus`
--
ALTER TABLE `restaurant_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurant_menus_restaurant_id_foreign` (`restaurant_id`);

--
-- Indeks untuk tabel `restaurant_reviews`
--
ALTER TABLE `restaurant_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurant_reviews_restaurant_id_foreign` (`restaurant_id`);

--
-- Indeks untuk tabel `sadar_wisatas`
--
ALTER TABLE `sadar_wisatas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sadar_wisatas_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `sadar_wisatas_kecamatan_id_foreign` (`kecamatan_id`);

--
-- Indeks untuk tabel `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sosial_media`
--
ALTER TABLE `sosial_media`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tempatibadah_reviews`
--
ALTER TABLE `tempatibadah_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tempatibadah_reviews_tempat_ibadah_id_foreign` (`tempat_ibadah_id`);

--
-- Indeks untuk tabel `tempat_ibadahs`
--
ALTER TABLE `tempat_ibadahs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tempat_ibadahs_kabupaten_id_foreign` (`kabupaten_id`),
  ADD KEY `tempat_ibadahs_objek_wisata_id_foreign` (`objek_wisata_id`);

--
-- Indeks untuk tabel `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `travel_kabupaten_id_foreign` (`kabupaten_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_kabupaten_id_foreign` (`kabupaten_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cindramatas`
--
ALTER TABLE `cindramatas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `cindramata_details`
--
ALTER TABLE `cindramata_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `desa_wisatas`
--
ALTER TABLE `desa_wisatas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `ekrafs`
--
ALTER TABLE `ekrafs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `hotel_gambars`
--
ALTER TABLE `hotel_gambars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `hotel_reviews`
--
ALTER TABLE `hotel_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `iklans`
--
ALTER TABLE `iklans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kabupatens`
--
ALTER TABLE `kabupatens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `kategori_ekrafs`
--
ALTER TABLE `kategori_ekrafs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `kecamatans`
--
ALTER TABLE `kecamatans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `kuliners`
--
ALTER TABLE `kuliners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `kunjungans`
--
ALTER TABLE `kunjungans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `labels`
--
ALTER TABLE `labels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `label_metas`
--
ALTER TABLE `label_metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT untuk tabel `link_terkaits`
--
ALTER TABLE `link_terkaits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT untuk tabel `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `objek_wisata_aksebilitas`
--
ALTER TABLE `objek_wisata_aksebilitas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `objek_wisata_amenitas`
--
ALTER TABLE `objek_wisata_amenitas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `objek_wisata_details`
--
ALTER TABLE `objek_wisata_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `objek_wisata_gambars`
--
ALTER TABLE `objek_wisata_gambars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `objek_wisata_reviews`
--
ALTER TABLE `objek_wisata_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `pemandu_wisatas`
--
ALTER TABLE `pemandu_wisatas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `post_categories`
--
ALTER TABLE `post_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `restaurant_gambars`
--
ALTER TABLE `restaurant_gambars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `restaurant_menus`
--
ALTER TABLE `restaurant_menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `restaurant_reviews`
--
ALTER TABLE `restaurant_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sadar_wisatas`
--
ALTER TABLE `sadar_wisatas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `sosial_media`
--
ALTER TABLE `sosial_media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `tempatibadah_reviews`
--
ALTER TABLE `tempatibadah_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tempat_ibadahs`
--
ALTER TABLE `tempat_ibadahs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `travel`
--
ALTER TABLE `travel`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cindramatas`
--
ALTER TABLE `cindramatas`
  ADD CONSTRAINT `cindramatas_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `cindramatas_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `cindramata_details`
--
ALTER TABLE `cindramata_details`
  ADD CONSTRAINT `cindramata_details_cindramata_id_foreign` FOREIGN KEY (`cindramata_id`) REFERENCES `cindramatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `desa_wisatas`
--
ALTER TABLE `desa_wisatas`
  ADD CONSTRAINT `desa_wisatas_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `desa_wisatas_kecamatan_id_foreign` FOREIGN KEY (`kecamatan_id`) REFERENCES `kecamatans` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `ekrafs`
--
ALTER TABLE `ekrafs`
  ADD CONSTRAINT `ekrafs_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `events_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `hotels_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `hotel_gambars`
--
ALTER TABLE `hotel_gambars`
  ADD CONSTRAINT `hotel_gambars_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `hotel_reviews`
--
ALTER TABLE `hotel_reviews`
  ADD CONSTRAINT `hotel_reviews_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `kecamatans`
--
ALTER TABLE `kecamatans`
  ADD CONSTRAINT `kecamatans_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `kuliners`
--
ALTER TABLE `kuliners`
  ADD CONSTRAINT `kuliners_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `kunjungans`
--
ALTER TABLE `kunjungans`
  ADD CONSTRAINT `kunjungans_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `label_metas`
--
ALTER TABLE `label_metas`
  ADD CONSTRAINT `label_metas_label_id_foreign` FOREIGN KEY (`label_id`) REFERENCES `labels` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `label_metas_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  ADD CONSTRAINT `objek_wisatas_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `objek_wisatas_kecamatan_id_foreign` FOREIGN KEY (`kecamatan_id`) REFERENCES `kecamatans` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisata_aksebilitas`
--
ALTER TABLE `objek_wisata_aksebilitas`
  ADD CONSTRAINT `objek_wisata_aksebilitas_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisata_amenitas`
--
ALTER TABLE `objek_wisata_amenitas`
  ADD CONSTRAINT `objek_wisata_amenitas_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisata_details`
--
ALTER TABLE `objek_wisata_details`
  ADD CONSTRAINT `objek_wisata_details_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisata_gambars`
--
ALTER TABLE `objek_wisata_gambars`
  ADD CONSTRAINT `objek_wisata_gambars_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `objek_wisata_reviews`
--
ALTER TABLE `objek_wisata_reviews`
  ADD CONSTRAINT `objek_wisata_reviews_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `pemandu_wisatas`
--
ALTER TABLE `pemandu_wisatas`
  ADD CONSTRAINT `pemandu_wisatas_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `pemandu_wisatas_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `posts_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `posts_post_category_id_foreign` FOREIGN KEY (`post_category_id`) REFERENCES `post_categories` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `restaurants_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `restaurant_gambars`
--
ALTER TABLE `restaurant_gambars`
  ADD CONSTRAINT `restaurant_gambars_restaurant_id_foreign` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `restaurant_menus`
--
ALTER TABLE `restaurant_menus`
  ADD CONSTRAINT `restaurant_menus_restaurant_id_foreign` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `restaurant_reviews`
--
ALTER TABLE `restaurant_reviews`
  ADD CONSTRAINT `restaurant_reviews_restaurant_id_foreign` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `sadar_wisatas`
--
ALTER TABLE `sadar_wisatas`
  ADD CONSTRAINT `sadar_wisatas_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `sadar_wisatas_kecamatan_id_foreign` FOREIGN KEY (`kecamatan_id`) REFERENCES `kecamatans` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `tempatibadah_reviews`
--
ALTER TABLE `tempatibadah_reviews`
  ADD CONSTRAINT `tempatibadah_reviews_tempat_ibadah_id_foreign` FOREIGN KEY (`tempat_ibadah_id`) REFERENCES `tempat_ibadahs` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `tempat_ibadahs`
--
ALTER TABLE `tempat_ibadahs`
  ADD CONSTRAINT `tempat_ibadahs_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `tempat_ibadahs_objek_wisata_id_foreign` FOREIGN KEY (`objek_wisata_id`) REFERENCES `objek_wisatas` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `travel`
--
ALTER TABLE `travel`
  ADD CONSTRAINT `travel_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_kabupaten_id_foreign` FOREIGN KEY (`kabupaten_id`) REFERENCES `kabupatens` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
