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
