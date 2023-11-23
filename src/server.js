const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "your_password",
  database: "todo_app",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// API to fetch tasks
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
