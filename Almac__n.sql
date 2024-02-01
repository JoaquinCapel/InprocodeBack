-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-02-2024 a las 10:38:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Almacén`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendarios`
--

CREATE TABLE `calendarios` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calendarios`
--

INSERT INTO `calendarios` (`id`, `title`, `date`) VALUES
(1, 'Presentación Coca cola fresa', '2024-01-29'),
(3, 'Presentación cacahuetes picantes', '2024-01-31'),
(4, 'Lanzamiento Coca Cola fres', '2024-02-07'),
(5, 'Acto cultural Pepsi', '2024-02-20'),
(6, 'Fiesta Ford', '2024-02-16'),
(8, 'ñafjsajfdsajñfk', '2024-02-01'),
(9, 'jñjñjñkljñkljjlk', '2024-02-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `charts`
--

CREATE TABLE `charts` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `colorcode` varchar(100) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `charts`
--

INSERT INTO `charts` (`id`, `year`, `amount`, `colorcode`, `state`) VALUES
(3, 2015, 5000, 'green', 1),
(4, 2016, 6000, 'yellow', 1),
(5, 2017, 6500, 'orange', 1),
(6, 2018, 7000, 'red', 1),
(7, 2020, 3000, 'blue', 1),
(8, 2021, 3500, 'purple', 1),
(9, 2017, 450, 'yellow', 1),
(10, 2018, 800, 'green', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maps`
--

CREATE TABLE `maps` (
  `id` int(11) NOT NULL,
  `location` varchar(30) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maps`
--

INSERT INTO `maps` (`id`, `location`, `latitude`, `longitude`) VALUES
(6, 'Mataró', '41.54211', '2.4445'),
(7, 'Badalona, Gorg', '41.440154', '2.239306'),
(9, 'Arenys de mar', '41.5819000', '2.5493600'),
(10, 'Premià de mar', '41.4940800', '2.3587800'),
(11, 'Barcelona', '41.38879', '2.15899'),
(12, 'Montgat', '41.4737700', '2.2806900');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--

CREATE TABLE `Productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Productos`
--

INSERT INTO `Productos` (`id`, `name`, `description`, `price`, `stock`) VALUES
(13, 'fanta', 'Naranja', 887, 787),
(14, 'Ariel ', 'líquido', 14, 54),
(15, 'televisión', 'pantalla ultra wide', 799, 99),
(16, 'agua', 'fotn vella', 56, 35),
(22, 'jabón', 'baño', 7, 800),
(24, 'teléfono', 'apple', 789, 789);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calendarios`
--
ALTER TABLE `calendarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calendarios`
--
ALTER TABLE `calendarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `charts`
--
ALTER TABLE `charts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `maps`
--
ALTER TABLE `maps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `Productos`
--
ALTER TABLE `Productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
