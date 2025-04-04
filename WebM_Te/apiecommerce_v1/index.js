const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3001;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecom",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "❌ Name is required" });
  }

  const sql = "INSERT INTO main_table (name) VALUES (?)";

  db.query(sql, [name], (err, result) => {
    if (err) {
      res.status(500).send("❌ Error inserting data");
      return;
    }
    res.json({ message: "✅ User added!", userId: result.insertId });
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM main_table";

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("❌ Error fetching data");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
