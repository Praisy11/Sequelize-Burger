CREATE DATABASE seqburgers_db;
USE seqburgers_db;

-- Create the table plans.
CREATE TABLE Seqburgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
date timestamp default current_timestamp,
PRIMARY KEY (id)
);

