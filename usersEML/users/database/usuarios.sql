-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2021 a las 16:56:30
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `users_eml`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre1` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre2` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido1` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido2` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `imagen` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `email`, `contrasena`, `telefono`, `imagen`, `created_at`, `updated_at`) VALUES
(4, 'Karen', 'Jisella', 'fghj', 'Casas', 'ciscojuans@gmail.com', 'karensoto', 29186277, 'uploads/9rqTaV0bjx4hTxb1lsH20CTlkVTSuT7DoWmF7ZBU.png', NULL, '2021-07-21 02:06:53'),
(7, 'Juan', 'Pablo', 'Ramirez', 'Gutierrez', 'ciscojuan@gmail.com', 'karensoto', 29186277, 'uploads/E8E97r88GxX3mZLTPrNaciIOGxWk6OjHa8KQqk09.jpg', NULL, '2021-07-20 21:10:28'),
(8, 'Jorge', 'Maria', 'Ramirez', 'Gutierrezs', 'mercyg54@gmail.com', 'karensoto', 878, 'uploads/gdBSwHWAm9HgKAygnGQrBebd2zrz00JDFPGlTY8b.jpg', NULL, '2021-07-20 21:10:43'),
(9, 'Laura', 'stefania', 'Gutierrez', 'Gutierrez', 'asdasd@sadf.com', 'asdas@sdfsdf', 1236547896, 'uploads/iXQBkNBAVMDMoeIJvloyxXzur0HztbDJLWwuYnIC.jpg', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
