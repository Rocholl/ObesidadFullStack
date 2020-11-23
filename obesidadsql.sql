-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2020 a las 18:16:23
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `obesidadsql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro`
--

CREATE TABLE `centro` (
  `idCentro` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Coordenadas` varchar(100) DEFAULT NULL,
  `Codigo_Postal` varchar(7) DEFAULT NULL,
  `idMunicipio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `centro`
--

INSERT INTO `centro` (`idCentro`, `Nombre`, `Coordenadas`, `Codigo_Postal`, `idMunicipio`) VALUES
(0, 'IES Poeta Tomás Morales Castellano', '28°06\'36.9\"N 15°25\'20.6\"W\r\n', '35003', 1),
(1, 'IES Poeta Tomás Morales Castellano', '28.110250, -15.422386\r\n', '35003', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `health`
--

CREATE TABLE `health` (
  `idHealth` int(11) NOT NULL,
  `Masa_Grasa` double DEFAULT NULL,
  `Masa_Viseral` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `idMunicipio` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Isla` set('Las palmas') DEFAULT 'Las palmas'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`idMunicipio`, `Nombre`, `Isla`) VALUES
(1, 'Las Palmas de Gran Canaria', 'Las palmas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(60) DEFAULT NULL,
  `Rol` set('Admin','Profesor','Alumno') DEFAULT NULL,
  `Id_Centro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `Username`, `Password`, `Nombre`, `Apellidos`, `Rol`, `Id_Centro`) VALUES
(7, 'jesus', '$2b$10$cPqBDw9PlVxLpi.p6Ej5pO5p7QV6o0UM7Pnkt3', 'carlos', 'rocholl', 'Admin', 1),
(8, 'raul', '$2b$10$HsjPuWxPoj7BTwOfH5zNnu1zjLkVsKUuDxE6If', 'carlos', 'rocholl', 'Admin', 1),
(9, 'raul', '$2b$10$/WeXMU4/5yb19p30SbchluAfwuf3sL.yhXkDHR', 'carlos', 'rocholl', 'Admin', 1),
(10, 'raul2', '$2b$10$ncXyf19xaDPKmjb45WzFre4q.Adrl9PwqPf8z9', 'carlos', 'rocholl', 'Admin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_datos`
--

CREATE TABLE `usuario_datos` (
  `idUsuario` int(11) NOT NULL,
  `idDatos` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centro`
--
ALTER TABLE `centro`
  ADD PRIMARY KEY (`idCentro`),
  ADD KEY `pkId_Municipio_idx` (`idMunicipio`);

--
-- Indices de la tabla `health`
--
ALTER TABLE `health`
  ADD PRIMARY KEY (`idHealth`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`idMunicipio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`),
  ADD KEY `Id_Centro_idx` (`Id_Centro`);

--
-- Indices de la tabla `usuario_datos`
--
ALTER TABLE `usuario_datos`
  ADD PRIMARY KEY (`idUsuario`,`idDatos`),
  ADD KEY `idDatos_idx` (`idDatos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `health`
--
ALTER TABLE `health`
  MODIFY `idHealth` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `idMunicipio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `centro`
--
ALTER TABLE `centro`
  ADD CONSTRAINT `fkId_Municipio` FOREIGN KEY (`idMunicipio`) REFERENCES `municipio` (`idMunicipio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `Id_Centro` FOREIGN KEY (`Id_Centro`) REFERENCES `centro` (`idCentro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_datos`
--
ALTER TABLE `usuario_datos`
  ADD CONSTRAINT `idDatos` FOREIGN KEY (`idDatos`) REFERENCES `health` (`idHealth`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
