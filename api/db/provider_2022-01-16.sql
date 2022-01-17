# ************************************************************
# Sequel Ace SQL dump
# Version 3043
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.23)
# Database: provider
# Generation Time: 2022-01-17 06:03:37 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`id`, `name`)
VALUES
	(1,'auto'),
	(2,'fire'),
	(3,'flood');

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table provider-search
# ------------------------------------------------------------

DROP TABLE IF EXISTS `provider-search`;

CREATE TABLE `provider-search` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `product` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` varchar(256) DEFAULT NULL,
  `state_name` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `provider-search` WRITE;
/*!40000 ALTER TABLE `provider-search` DISABLE KEYS */;

INSERT INTO `provider-search` (`id`, `name`, `product`, `state`, `state_name`)
VALUES
	(1,'Allstate','auto','IL','Illinois'),
	(2,'Allstate','auto','IN','Indiana'),
	(3,'Allstate','fire','IN','Indiana'),
	(4,'Allstate','fire','IL','Illinois'),
	(6,'Founders','auto','IL','Illinois'),
	(7,'Gaurd','fire','IL','Illinois'),
	(8,'Hippo','fire','IL','Illinois'),
	(9,'Hippo','fire','IN','Indiana'),
	(10,'Lemonade','fire','IN','Indiana'),
	(11,'Lemonade','fire','IL','Illinois'),
	(12,'Lemonade','fire','MI','Michigan'),
	(13,'National General','fire','MI','Michigan'),
	(14,'National General','fire','IN','Indiana'),
	(15,'National General','auto','IN','Indiana'),
	(16,'National General','auto','IL','Illinois'),
	(17,'National General','fire','IL','Illinois'),
	(18,'Nationwide','fire','IL','Illinois'),
	(19,'Nationwide','auto','IL','Illinois'),
	(20,'Nationwide','auto','IN','Indiana'),
	(21,'Nationwide','fire','IN','Indiana'),
	(22,'Nationwide','fire','MI','Michigan'),
	(23,'Nationwide','auto','MI','Michigan'),
	(24,'Progressive','auto','MI','Michigan'),
	(25,'Progressive','auto','IN','Indiana'),
	(26,'Progressive','auto','IL','Illinois'),
	(27,'Progressive','fire','IL','Illinois'),
	(28,'Progressive','fire','IN','Indiana'),
	(29,'Seneca','fire','IN','Indiana'),
	(30,'Seneca','fire','IL','Illinois'),
	(31,'Seneca','auto','IL','Illinois'),
	(32,'Seneca','auto','MI','Michigan'),
	(33,'Swyfft','fire','MI','Michigan'),
	(34,'Swyfft','fire','IL','Illinois'),
	(35,'Swyfft','fire','IN','Indiana'),
	(36,'National General','flood','IN','Indiana'),
	(37,'National General','flood','IL','Illinois'),
	(38,'National General','flood','MI','Michigan'),
	(39,'Neptune','flood','MI','Michigan'),
	(40,'Neptune','flood','IN','Indiana'),
	(41,'Nationwide','flood','IN','Indiana'),
	(42,'Nationwide','flood','IL','Illinois'),
	(43,'Senecas','flood','IL','Illinois'),
	(44,'Seneca','flood','IN','Indiana'),
	(45,'Seneca','flood','MI','Michigan');

/*!40000 ALTER TABLE `provider-search` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table state
# ------------------------------------------------------------

DROP TABLE IF EXISTS `state`;

CREATE TABLE `state` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `abbreviation` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;

INSERT INTO `state` (`id`, `name`, `abbreviation`)
VALUES
	(1,'Illinios','IL'),
	(2,'Indiana','IN'),
	(3,'Michigan','MI');

/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
