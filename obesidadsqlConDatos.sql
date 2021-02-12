-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: obesidadsql
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `centros`
--

DROP TABLE IF EXISTS `centros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centros` (
  `idCentro` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `codigo_Postal` int(11) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `long` double DEFAULT NULL,
  `idDistrito` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCentro`),
  KEY `idDistrito` (`idDistrito`),
  CONSTRAINT `centros_ibfk_1` FOREIGN KEY (`idDistrito`) REFERENCES `distritos` (`iddistrito`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centros`
--

LOCK TABLES `centros` WRITE;
/*!40000 ALTER TABLE `centros` DISABLE KEYS */;
INSERT INTO `centros` VALUES (1,'IES El Rincón',35001,NULL,NULL,1),(2,'IES Felo Monzón',35002,NULL,NULL,2);
/*!40000 ALTER TABLE `centros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `idCursos` int(11) NOT NULL AUTO_INCREMENT,
  `Curso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCursos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` VALUES (1,'1ºDAM-T'),(2,'2ºDAM-T');
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distritos`
--

DROP TABLE IF EXISTS `distritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distritos` (
  `idDistrito` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `idMunicipio` int(11) DEFAULT NULL,
  PRIMARY KEY (`idDistrito`),
  KEY `idMunicipio` (`idMunicipio`),
  CONSTRAINT `distritos_ibfk_1` FOREIGN KEY (`idMunicipio`) REFERENCES `municipios` (`idmunicipios`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distritos`
--

LOCK TABLES `distritos` WRITE;
/*!40000 ALTER TABLE `distritos` DISABLE KEYS */;
INSERT INTO `distritos` VALUES (1,'Guanarteme',1),(2,'Tamaraceite',1);
/*!40000 ALTER TABLE `distritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health`
--

DROP TABLE IF EXISTS `health`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health` (
  `idHealths` int(11) NOT NULL AUTO_INCREMENT,
  `edad` double DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `num_lista` int(11) DEFAULT NULL,
  `idCentro` int(11) DEFAULT NULL,
  `idCurso` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHealths`),
  KEY `idCentro` (`idCentro`),
  KEY `idCurso` (`idCurso`),
  CONSTRAINT `health_ibfk_1` FOREIGN KEY (`idCentro`) REFERENCES `centros` (`idcentro`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `health_ibfk_2` FOREIGN KEY (`idCurso`) REFERENCES `cursos` (`idcursos`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health`
--

LOCK TABLES `health` WRITE;
/*!40000 ALTER TABLE `health` DISABLE KEYS */;
INSERT INTO `health` VALUES (1,23,'M',1,1,1),(2,19,'M',2,1,1),(3,25,'H',1,1,2),(4,20,'H',1,2,1);
/*!40000 ALTER TABLE `health` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `healthextends`
--

DROP TABLE IF EXISTS `healthextends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `healthextends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `peso` double DEFAULT NULL,
  `percent_Grasa` double DEFAULT NULL,
  `percent_Hidratacion` double DEFAULT NULL,
  `peso_Muscular` double DEFAULT NULL,
  `masa_Muscular` double DEFAULT NULL,
  `peso_Oseo` double DEFAULT NULL,
  `kilocalorias` double DEFAULT NULL,
  `edad_Metabolica` double DEFAULT NULL,
  `altura` double DEFAULT NULL,
  `masa_Viseral` double DEFAULT NULL,
  `perimetro_Abdominal` double DEFAULT NULL,
  `actividad_Fisica` double DEFAULT NULL,
  `idHealth` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idHealth` (`idHealth`),
  CONSTRAINT `healthextends_ibfk_1` FOREIGN KEY (`idHealth`) REFERENCES `health` (`idhealths`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthextends`
--

LOCK TABLES `healthextends` WRITE;
/*!40000 ALTER TABLE `healthextends` DISABLE KEYS */;
INSERT INTO `healthextends` VALUES (1,'2020-12-10',50,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(2,'2021-01-15',60,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(3,'2020-12-05',25,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(4,'2021-01-28',30,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(5,'2021-01-25',14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3),(6,'2021-01-08',20,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3),(7,'2021-01-20',25,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4),(8,'2020-04-20',30,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4);
/*!40000 ALTER TABLE `healthextends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipios`
--

DROP TABLE IF EXISTS `municipios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipios` (
  `idMunicipios` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `isla` enum('Las palmas') DEFAULT NULL,
  PRIMARY KEY (`idMunicipios`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios`
--

LOCK TABLES `municipios` WRITE;
/*!40000 ALTER TABLE `municipios` DISABLE KEYS */;
INSERT INTO `municipios` VALUES (1,'Las Palmas de Gran Canaria',NULL),(2,'Telde',NULL);
/*!40000 ALTER TABLE `municipios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_cursos`
--

DROP TABLE IF EXISTS `usuario_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_cursos` (
  `idCurso` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idCurso`,`idUsuario`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `usuario_cursos_ibfk_1` FOREIGN KEY (`idCurso`) REFERENCES `cursos` (`idcursos`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuario_cursos_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idusuarios`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_cursos`
--

LOCK TABLES `usuario_cursos` WRITE;
/*!40000 ALTER TABLE `usuario_cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `idCentro` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsuarios`),
  KEY `idCentro` (`idCentro`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idCentro`) REFERENCES `centros` (`idcentro`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-12 11:20:27
