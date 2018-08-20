# FULL STACK HOMEWORK - BURGER

  * packages
    ```json
      "body-parser": "^1.18.3",
       "dotenv": "^6.0.0",
      "express": "^4.16.3",
      "express-handlebars": "^3.0.0",
      "mysql": "^2.16.0"
    ```
  
  * structure
    * server.js
    * package.js
    * .gitignore
    * db/
  
  * database setup
  ```sql
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
  ```
  * database setup with interesting join query
  ```sql
  USE burgers_db;

  DELETE FROM burgers;
  DELETE FROM users;
  -- i decided to add the delete lines above only AFTER i created the db.;
  -- it helps when re-running the schema to avoid duplication errors;

  INSERT INTO burgers(burger_name,devoured)
  VALUES ("bacon cheese burger",1),
  ("vegetarian meet burger",0),
  ("egg white burger",0),
  ("plain cheese burger",1),
  ("double cheese with pickles burger",1),
  ("popeyes style burger",1);

  INSERT INTO users(fullName,burger_id)
  VALUES ("kunle babatunde", 1),
  ("ronak ray",2),
  ("sean kim",1), ("micheal kim",5),("anthony maddattu",6), ("kunle babatunde", 5);

  SELECT * FROM burgers;
  SELECT * FROM users;

  -- INTERESTING question: how many burgers did kunle babatunde eat?;
  SELECT fullName, burger_name FROM users
  INNER JOIN burgers
  ON burgers.id = users.burger_id
  WHERE fullName = "kunle babatunde" 
  AND devoured = 1;
  ```
  * snippet from the orms.js
  ```javascript
    updateBurger(connection=con,newBurgerName,oldBurgerName)
    {
      var sqlUB = `UPDATE ${this.table1} SET burger_name = "${newBurgerName}" WHERE burger_name = "${oldBurgerName}";`;
      connection.query(sqlUB,(err,result)=>{
        if (err) {
          throw err;
        } else console.log('\nNumber of records inserted:' + result.affectedRows);
      });
    }
  ```
  # INHERITANCE - ES6 syntax in burger.js - snippet code
  ```javascript
    const orms = require("../config/orms");
    require('dotenv').config();

    class BURGER extends orms
    {
      constructor()
      {
        super(process.env.DB_TABLE1, process.env.DB_TABLE2);
      }
    }
    let newUser = new BURGER();
    newUser.selectAll();
    newUser.insertOneBurger('','sauscy cheese burger', 0); 
    newUser.insertUser('','phil jackson', 2);
    newUser.updateBurger('',"pepper burger","0");
    module.exports = BURGER;
  ```