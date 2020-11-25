-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2020 a las 17:43:02
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
(1, 'Ies El Rincon', '3555', 1, 28.128438005865007, -15.446808160782536);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro_datos`
--

CREATE TABLE `centro_datos` (
  `idCentros` int(11) NOT NULL,
  `idDatos` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idCursos` int(11) NOT NULL,
  `Curso` varchar(45) NOT NULL,
  `Letra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `healths`
--

CREATE TABLE `healths` (
  `idHealths` int(11) NOT NULL,
  `masa_Grasa` double DEFAULT NULL,
  `masa_Viseral` double DEFAULT NULL,
  `idCursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, 'Las palmas Gc', '');

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
(7, 'Rocholl', '$2b$10$I0kYS5.LuHl4t2PjLBshJOrvwwREnUAyXEbD4GEM15f9H7unGK9T2', 'Rocholl', 'Rocholl', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_cursos`
--

CREATE TABLE `usuario_cursos` (
  `idUsuarios` int(11) NOT NULL,
  `idCursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indices de la tabla `centro_datos`
--
ALTER TABLE `centro_datos`
  ADD PRIMARY KEY (`idCentros`,`idDatos`),
  ADD KEY `idDatos_idx` (`idDatos`);

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
  ADD KEY `idCurso_idx` (`idCursos`);

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
-- AUTO_INCREMENT de la tabla `healths`
--
ALTER TABLE `healths`
  MODIFY `idHealths` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `idMunicipios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `centros`
--
ALTER TABLE `centros`
  ADD CONSTRAINT `fk_centros_IdMunicipio` FOREIGN KEY (`idMunicipios`) REFERENCES `municipios` (`idMunicipios`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `centro_datos`
--
ALTER TABLE `centro_datos`
  ADD CONSTRAINT `fk_cenda_idCentros` FOREIGN KEY (`idCentros`) REFERENCES `centros` (`idCentro`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cenda_idDatos` FOREIGN KEY (`idDatos`) REFERENCES `healths` (`idHealths`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `healths`
--
ALTER TABLE `healths`
  ADD CONSTRAINT `fk_health_Curso` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usu_Id_Centro` FOREIGN KEY (`idCentros`) REFERENCES `centros` (`idCentro`) ON DELETE CASCADE ON UPDATE CASCADE;

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
