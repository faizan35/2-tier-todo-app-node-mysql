const mysql = require("mysql2");
require("dotenv").config();

// Create a MySQL pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "mysql",
  user: process.env.MYSQL_USER || "admin",
  password: process.env.MYSQL_PASSWORD || "admin",
  database: process.env.MYSQL_DB || "todo_app",
});

// Export the pool to be used in other modules
module.exports = pool.promise();
