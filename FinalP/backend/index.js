const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// create a connection to the MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vikings0213!",
  database: "database_name"
});

// connect to the MySQL database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to the MySQL database!");
});

// GET method to retrieve all data from the table
app.get("/data", (req, res) => {
  const sql = "SELECT * FROM my_table";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// POST method to insert new data into the table
app.post("/data", (req, res) => {
  const { name, age } = req.body;
  const sql = "INSERT INTO my_table (name, age) VALUES (?, ?)";
  db.query(sql, [name, age], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// DELETE method to remove data from the table
app.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM my_table WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// start the server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000!");
});

