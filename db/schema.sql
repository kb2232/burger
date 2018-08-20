DROP DATABASE burgers_db;
-- i decided to add line 1 only AFTER i created the db.;
-- it helps when re-running the schema to avoid duplication errors;

CREATE DATABASE IF NOT EXISTS burgers_db;
SHOW DATABASES;
USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(128) UNIQUE NOT NULL,
  devoured BIT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT NOW()
);
-- same burger cannot be eaten by twice by same user;
CREATE TABLE users(
  fullName VARCHAR(128) NOT NULL,
  burger_id INT NOT NULL,
  FOREIGN KEY(burger_id) REFERENCES burgers(id),
  PRIMARY KEY(fullName, burger_id)
);
SHOW TABLES;
