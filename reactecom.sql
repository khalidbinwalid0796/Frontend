-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2021 at 10:22 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('078acd667bd73c0f29f3196b91ae0f2ad957667db9bbdd8194710b63c940d25c6a1facb0b446ab14', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:12:57', '2021-04-27 02:12:57', '2022-04-27 08:12:57'),
('09f98d45588dee70f0c53f0b2e1cfa26844d9c408fcd33a784e00d8e862e0e03ad27b46ad48dd600', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:15:38', '2021-04-27 02:15:38', '2022-04-27 08:15:38'),
('16983884e7f2ef5109e40851230d0e7acb13af1538c6ac58ef0240b49862ce530d66d8451b2b86a3', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:05:11', '2021-04-27 02:05:11', '2022-04-27 08:05:11'),
('19f8b27e7fa3038562d084e4841c632295617be3197365988588acea440ed4927096de8990304b15', 2, 1, 'Token Name', '[]', 0, '2021-04-27 03:24:25', '2021-04-27 03:24:25', '2022-04-27 09:24:25'),
('1f471e0a0a7f350cdbc72e38950dec788c755ee6a2a991f359fe874c701e88e435eab6e57064570d', 1, 1, 'Token Name', '[]', 0, '2021-04-27 03:59:11', '2021-04-27 03:59:11', '2022-04-27 09:59:11'),
('26346a29103548db0ce5cdfea6f129c3fe849d7887380e793de32227b9406d3da365a2ab08d2bce6', 2, 1, 'Token Name', '[]', 0, '2021-04-27 03:17:26', '2021-04-27 03:17:26', '2022-04-27 09:17:26'),
('2a04631670c0f458718dd94737b8542455b810e8bdc58f6019af7e7e730e18a633ce0efd838dfe93', 1, 1, 'Token Name', '[]', 0, '2021-04-27 04:28:05', '2021-04-27 04:28:05', '2022-04-27 10:28:05'),
('3254771c225d6c55722e88848211fecae97ddcb57e30c7efe7f6abb8c0fc10364fe61fbf285f64d0', 1, 1, 'Token Name', '[]', 0, '2021-04-26 13:27:09', '2021-04-26 13:27:09', '2022-04-26 19:27:09'),
('3853f3ec5e1ffd222042e4a881ccfbd0e5ff469ffaa5019d5fe31be56aaf95be165a6edcfd73f875', 1, 1, 'Token Name', '[]', 0, '2021-04-27 12:00:10', '2021-04-27 12:00:10', '2022-04-27 18:00:10'),
('3bd5e5dba56f1d43735212be60b1ab9936ba863417d1e74c788921f351eb366aa5c790978ec96aea', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:48:48', '2021-04-27 02:48:48', '2022-04-27 08:48:48'),
('60b2d9f9635510bb874585d0011dbfdb543ea3d61b6d3e0a85fba9de5128bd1929c2264e42796adc', 1, 1, 'Token Name', '[]', 0, '2021-04-27 04:24:29', '2021-04-27 04:24:29', '2022-04-27 10:24:29'),
('66806d8517d493b77c77a8ed33ac981cbbfd69d4e5f15a27991733a22897c910fbeff353f113b78d', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:50:28', '2021-04-27 02:50:28', '2022-04-27 08:50:28'),
('69cdba933a415245b2661f079dbf57dfde0f8d0730247a8839d4feb2f041462e0438cb8f693b53b8', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:11:24', '2021-04-27 02:11:24', '2022-04-27 08:11:24'),
('7283333571a7621a22aa58120070f454d24effc2f842bfdcfcb75a8dbeff06300c33a0cd9c06ae08', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:14:04', '2021-04-27 02:14:04', '2022-04-27 08:14:04'),
('79d46283cdc3c8d635f192c3941999a82e9c7223867ad0c92aabb2a17f270d99e93584e23920cd16', 1, 1, 'Token Name', '[]', 0, '2021-04-27 00:33:08', '2021-04-27 00:33:08', '2022-04-27 06:33:08'),
('7a846158648c8dbbc3049054d490a31dd5358b8b806257dbcc1840f582b00046fbd6d70f5d24b760', 2, 1, 'Token Name', '[]', 0, '2021-04-27 04:30:14', '2021-04-27 04:30:14', '2022-04-27 10:30:14'),
('865f8841cf4e69aea7656fbcac6324aff26e838e19d4f0d137d00ddd0f42edd794fee05dd81f5fd0', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:40:52', '2021-04-27 02:40:52', '2022-04-27 08:40:52'),
('888dd0e47369dc72e94192c29e100a19bd2878c438cbdcf5124e51ee4de6c6a89a21c883019fd2a2', 1, 1, 'Token Name', '[]', 0, '2021-04-27 04:27:27', '2021-04-27 04:27:27', '2022-04-27 10:27:27'),
('91a0cc801108ad3fdb32244a332fa2af0998dd8ceb120d57d8728818b3f58702220f997c7714957c', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:12:12', '2021-04-27 02:12:12', '2022-04-27 08:12:12'),
('93edebe9c2d80522bbf69f9b46885bbdac370dd281f07502f81024107accea247b135a6328691d5e', 1, 1, 'Token Name', '[]', 0, '2021-04-26 13:26:18', '2021-04-26 13:26:18', '2022-04-26 19:26:18'),
('9d30da5de433da9dd881d6f6858ece81a96632453213b85b00e225c949958292383e45716e6f1763', 1, 1, 'Token Name', '[]', 0, '2021-04-27 03:40:21', '2021-04-27 03:40:21', '2022-04-27 09:40:21'),
('a6ee5b4b03f114626f2af0e27213be07297c5779ff3bf8d6d8e7103d46f127170d61d79634926e38', 1, 1, 'Token Name', '[]', 0, '2021-04-27 04:27:27', '2021-04-27 04:27:27', '2022-04-27 10:27:27'),
('b26167e18f1768e9445fc690c5099d22d5ed9503ce3db207381e3a6caf886d79dff512a9fee9f8d7', 2, 1, 'Token Name', '[]', 0, '2021-04-27 04:02:52', '2021-04-27 04:02:52', '2022-04-27 10:02:52'),
('b78ce72c74dac127f5be32bcc32948cd3a46ef78b82866284da9aea4222ba08849764ab28491ecbc', 1, 1, 'Token Name', '[]', 0, '2021-04-27 03:02:32', '2021-04-27 03:02:32', '2022-04-27 09:02:32'),
('cec9fb8b9a4b084d5b2bc84fbe4b69ea8396193952d262e8d407a30b30d8e2ea89d6cea290d8c249', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:21:01', '2021-04-27 02:21:01', '2022-04-27 08:21:01'),
('dfe43ade7628bc4732d911b26d60075cfb296722560ce7ee8abf0a03295c3cc620f12f7c4ad15299', 1, 1, 'Token Name', '[]', 0, '2021-04-27 00:33:10', '2021-04-27 00:33:10', '2022-04-27 06:33:10'),
('e9158edb41d67d8acc1557c9459073f0721e6eefa2a94b9a5161ae96b312d84b88e1da00572d6ea1', 1, 1, 'Token Name', '[]', 0, '2021-04-27 03:51:18', '2021-04-27 03:51:18', '2022-04-27 09:51:18'),
('f3dcd0006cda7473f11bc096f7bce7d91d9c9169485ace7b85d2fde5fa7d5ae3b7676d44dee28f97', 1, 1, 'Token Name', '[]', 0, '2021-04-27 02:08:53', '2021-04-27 02:08:53', '2022-04-27 08:08:53'),
('fb098ea15aa69214a38f2caa8d730c039fc213ae3760db474fff6f0dea9f54f566184c5b2ae28b9b', 1, 1, 'Token Name', '[]', 0, '2021-04-27 03:26:15', '2021-04-27 03:26:15', '2022-04-27 09:26:15');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'hRDXA3talaGFYhAFe7iie55odysUjaUA3YBvhznx', NULL, 'http://localhost', 1, 0, 0, '2021-04-26 11:49:55', '2021-04-26 11:49:55'),
(2, NULL, 'Laravel Password Grant Client', '6U7Q7U4qB2oG6yXDs08LV52hF0k91KgEESenMZaA', 'users', 'http://localhost', 0, 1, 0, '2021-04-26 11:49:55', '2021-04-26 11:49:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-04-26 11:49:55', '2021-04-26 11:49:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`id`, `email`, `token`, `created_at`) VALUES
(1, 'khalid@gmail.com', '89439', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'khalid', 'khalid@gmail.com', '01710659888', NULL, '$2y$10$l7hubFRBMRNIDDSEF13MN.5fmWEC7X6AYETSH4k7X8JkspIKctWYm', NULL, '2021-04-26 13:26:16', '2021-04-26 13:26:16'),
(2, 'mita@gmail.com', 'mita@gmail.com', '01735099977', NULL, '$2y$10$WCwtPXaqg5XsiMoTndiFvOThXugaEPxsLrp.9h3B7ug4X94xwT5vq', NULL, '2021-04-27 03:17:26', '2021-04-27 03:17:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_mobile_unique` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
