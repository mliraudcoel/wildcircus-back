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


INSERT INTO `performance`(title, description) VALUES ('Laugh', 'As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.');
INSERT INTO `performance`(title, description) VALUES ('Dream', 'Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.');
INSERT INTO `performance`(title, description) VALUES ('Marvel at', 'Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.');
INSERT INTO `price`(name, adult_price, child_price, group_price, school_price) VALUES ('Weeks except wednesday', 18, 12, 9, 6);
INSERT INTO `price`(name, adult_price, child_price, group_price, school_price) VALUES ('Week-end and wednesday', 22, 16, 13, 10);
INSERT INTO `team`(name) VALUES ('Clowns'), ('Magicians'), ('Tamers');

