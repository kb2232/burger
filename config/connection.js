// Set up MySQL connection.
require("dotenv").config();
const mysql = require("mysql");

/**
 * local connection settings
 */
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
});

connection.connect((err)=> {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
