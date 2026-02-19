-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 17 jan. 2026 à 19:02
-- Version du serveur : 8.3.0
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `notpad`
--

-- --------------------------------------------------------

--
-- Structure de la table `folder`
--

DROP TABLE IF EXISTS `folder`;
CREATE TABLE IF NOT EXISTS `folder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_folder` varchar(200) NOT NULL,
  `nom_folder` varchar(200) NOT NULL,
  `date_folder` varchar(200) NOT NULL,
  `id_uti` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `folder`
--

INSERT INTO `folder` (`id`, `id_folder`, `nom_folder`, `date_folder`, `id_uti`) VALUES
(1, 'Folder_premier', 'Premier', '10/15/2005', '0'),
(2, 'f8dedb2159c57b', '778', '', ''),
(3, 'rbtWjTB7DohCGK', 'test3', '', ''),
(4, 'kBEe5DmhK6mL8U', 'hhhhhhhh', '', ''),
(5, 'JfcskgtCX7RpZa', 'hhn,', '', ''),
(6, 'KEcp0gSe7s1whA', 'hhh', '', ''),
(7, 'AkmDX9XdeCfEt2', 'hhhhhhhhhhhhhhhh', '', ''),
(8, 'RfRYeZctPkUKKC', '777777777iii', '', ''),
(9, 'G0cDusSWZdSYTj', ',,,,,,klhk', '', ''),
(10, 'bUhT6ofw25W3Kw', 'Dossier renormmer yeahhhhh', '', ''),
(11, 'ApTd1KFaMbdFuS', 'jffuy555', '', ''),
(12, 'Ejtpk4wrRODf4f', 'hhjvjfgujh', '', ''),
(13, 'OR75KTE1rUF0tt', 'vgjjkiuk', '', ''),
(14, 'xoktrEzfkKj2Ug', 'bhhgjjh', '', ''),
(15, '0adbFPCfaLexfK', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '', ''),
(16, '0TTlEzrLBEwget', 'njjjjjjj', '', ''),
(17, 'XGuMjU0WKFdfFL', '687487yufyttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuu848888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_note` varchar(200) NOT NULL,
  `id_uti` int NOT NULL,
  `nom_note` varchar(200) NOT NULL,
  `content_note` text NOT NULL,
  `date_note` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `folder_note` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`id`, `id_note`, `id_uti`, `nom_note`, `content_note`, `date_note`, `folder_note`) VALUES
(1, 'premier_note', 0, 'Premier nom de note', '1-555\n2-684\n-556', '0000-00-00 00:00:00', 'Folder_premier'),
(2, '', 0, 'test-note', 'vfhygfhjg', '0000-00-00 00:00:00', ''),
(3, 'note_80427dda369016', 0, 'test_2', 'buhvj', '0000-00-00 00:00:00', ''),
(4, 'note_a9a4d198a516fb', 0, '77', 'hg', '0000-00-00 00:00:00', ''),
(5, 'note_93029d1126f56e', 0, '77', 'hhh', '0000-00-00 00:00:00', 'f8dedb2159c57b'),
(6, 'note_979f71b63d49d4', 0, 'gjgggggggggggggggyggggggggggggggggggggg', 'lhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', '0000-00-00 00:00:00', 'f8dedb2159c57b'),
(7, 'note_e0422c475c2925', 0, 'jj', 'hhh', '0000-00-00 00:00:00', 'f8dedb2159c57b'),
(8, 'note_15b9fb7fac8726', 0, 'hhh', 'hhhhhhhhhh', '0000-00-00 00:00:00', 'f8dedb2159c57b'),
(9, 'note_30a9680461d53f', 0, 'hhhhhhhh88', 'hhhhh', '0000-00-00 00:00:00', 'f8dedb2159c57b'),
(10, 'note_c6493091ee62b6', 0, 'nnnnnn', 'jhnjh', '0000-00-00 00:00:00', 'kBEe5DmhK6mL8U'),
(11, 'note_aca404a4bb602c', 0, 'jjjj', '', '2026-01-01 21:15:30', 'JfcskgtCX7RpZa'),
(12, 'note_f3442999af7be0', 0, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', '', '2026-01-02 13:49:50', 'f8dedb2159c57b');

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `notes`
-- (Voir ci-dessous la vue réelle)
--
DROP VIEW IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
`id` int
,`id_note` varchar(200)
,`id_uti` int
,`nom_note` varchar(200)
,`content_note` text
,`date_note` timestamp
,`folder_note` varchar(255)
);

-- --------------------------------------------------------

--
-- Structure de la vue `notes`
--
DROP TABLE IF EXISTS `notes`;

DROP VIEW IF EXISTS `notes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `notes`  AS SELECT `note`.`id` AS `id`, `note`.`id_note` AS `id_note`, `note`.`id_uti` AS `id_uti`, `note`.`nom_note` AS `nom_note`, `note`.`content_note` AS `content_note`, `note`.`date_note` AS `date_note`, `note`.`folder_note` AS `folder_note` FROM `note` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
