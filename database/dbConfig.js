const mysql = require("mysql2");
require("dotenv").config();

// Create a MySQL pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Export the pool to be used in other modules
module.exports = pool.promise();
