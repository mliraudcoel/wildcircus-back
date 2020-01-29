USE wild_circus;

CREATE TABLE `performance` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL
);

CREATE TABLE `price` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `adult_price` FLOAT,
  `child_price` FLOAT,
  `group_price` FLOAT,
  `school_price` FLOAT
);

CREATE TABLE `comment` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `pseudo` VARCHAR(100) NOT NULL,
  `comment` VARCHAR(255) NOT NULL
);

CREATE TABLE `team`(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(100),
  `picture` VARCHAR(255)
);

CREATE TABLE `show`(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `date` DATETIME
);

