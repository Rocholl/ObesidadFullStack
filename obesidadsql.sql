-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2020 a las 21:14:02
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
-- Estructura de tabla para la tabla `centros`
--

CREATE TABLE `centros` (
  `idCentro` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `codigo_Postal` varchar(7) DEFAULT NULL,
  `idMunicipios` int(11) NOT NULL,
  `lat` double DEFAULT NULL,
  `long` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `centros`
--

INSERT INTO `centros` (`idCentro`, `nombre`, `codigo_Postal`, `idMunicipios`, `lat`, `long`) VALUES
(1, 'Ies El Rincon', '3555', 1, 28.12785883771104, -15.44697574937665),
(2, 'IES Poeta Tomás Morales Castellano, Paseo de ', '35001', 1, 28.110397221755242, -15.422337757860756),
(3, 'IES Alonso Quesada', '35014', 1, 28.10311834987386, -15.442121488920527);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idCursos` int(11) NOT NULL,
  `Curso` varchar(45) NOT NULL,
  `Letra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`idCursos`, `Curso`, `Letra`) VALUES
(1, '1º Bachillerato', 'A'),
(2, '2º Bachillerato', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `healths`
--

CREATE TABLE `healths` (
  `idHealths` int(11) NOT NULL,
  `masa_Grasa` double NOT NULL,
  `masa_Viseral` double NOT NULL,
  `idCursos` int(11) NOT NULL,
  `idCentros` int(11) NOT NULL,
  `masa_Muscular` double DEFAULT NULL,
  `altura` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `healths`
--

INSERT INTO `healths` (`idHealths`, `masa_Grasa`, `masa_Viseral`, `idCursos`, `idCentros`, `masa_Muscular`, `altura`, `peso`, `edad`) VALUES
(1, 0, 15, 1, 1, NULL, NULL, NULL, NULL),
(2, 15, 12, 1, 1, 0, 0, 0, 0),
(3, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(4, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(5, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(6, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(7, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(8, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(9, 35, 20, 1, 3, NULL, NULL, NULL, NULL),
(10, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(11, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(12, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(13, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(14, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(15, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(16, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(17, 25, 20, 2, 3, NULL, NULL, NULL, NULL),
(18, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(19, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(20, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(21, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(22, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(23, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(24, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(25, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(26, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(27, 8, 20, 2, 2, NULL, NULL, NULL, NULL),
(28, 15, 25, 1, 1, 0, 0, 0, 0),
(29, 15, 15, 1, 1, 0, 0, 0, 0),
(30, 15, 15, 1, 1, 0, 0, 0, 0),
(31, 15, 15, 1, 1, 0, 0, 0, 0),
(32, 15, 15, 1, 1, 15, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `idMunicipios` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `isla` set('Las palmas') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`idMunicipios`, `nombre`, `isla`) VALUES
(1, 'Las palmas Gc', 'Las palmas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(60) DEFAULT NULL,
  `rol` set('Admin','Profesor','Alumno') DEFAULT NULL,
  `idCentros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `username`, `password`, `nombre`, `apellidos`, `rol`, `idCentros`) VALUES
(1, 'prueba', '$2b$10$q1NlHDwoPhy.zDaQY4M7hehnrTmrTzVW1mgQ8S52nmeIgMTBRbxh6', 'Rocholl', 'Rocholl', '', 1),
(2, 'prueba1', '$2b$10$aYxpG33f2wjUJ52I0TGMTOVTjeI5bO/wTT8ku/UudpY05GTRM3kA2', 'Rocholl', 'Rocholl', '', 2),
(3, 'prueba2', '$2b$10$SNTb7t9yRSNKTygjj7WYbuB1Oejzt68xpZBxZf5N12Bq7JPxG3tm.', 'Rocholl', 'Rocholl', '', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_cursos`
--

CREATE TABLE `usuario_cursos` (
  `idUsuarios` int(11) NOT NULL,
  `idCursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_cursos`
--

INSERT INTO `usuario_cursos` (`idUsuarios`, `idCursos`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centros`
--
ALTER TABLE `centros`
  ADD PRIMARY KEY (`idCentro`),
  ADD KEY `Id_Municipio_idx` (`idMunicipios`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCursos`);

--
-- Indices de la tabla `healths`
--
ALTER TABLE `healths`
  ADD PRIMARY KEY (`idHealths`),
  ADD KEY `idCurso_idx` (`idCursos`),
  ADD KEY `fk_health_Centro_idx` (`idCentros`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`idMunicipios`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`),
  ADD KEY `Id_Centro_idx` (`idCentros`);

--
-- Indices de la tabla `usuario_cursos`
--
ALTER TABLE `usuario_cursos`
  ADD PRIMARY KEY (`idUsuarios`,`idCursos`),
  ADD KEY `idCurso_idx` (`idCursos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centros`
--
ALTER TABLE `centros`
  MODIFY `idCentro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `idCursos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `healths`
--
ALTER TABLE `healths`
  MODIFY `idHealths` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `idMunicipios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `centros`
--
ALTER TABLE `centros`
  ADD CONSTRAINT `Id_Municipio` FOREIGN KEY (`idMunicipios`) REFERENCES `municipios` (`idMunicipios`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `healths`
--
ALTER TABLE `healths`
  ADD CONSTRAINT `fk_health_Centro` FOREIGN KEY (`idCentros`) REFERENCES `centros` (`idCentro`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_health_Curso` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `Id_Centro` FOREIGN KEY (`idCentros`) REFERENCES `centros` (`idCentro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_cursos`
--
ALTER TABLE `usuario_cursos`
  ADD CONSTRAINT `fk_usucur_idCurso` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usucur_idUsu` FOREIGN KEY (`idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
