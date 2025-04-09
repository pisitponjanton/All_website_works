const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(express.json());
const allowedOrigins = ["http://localhost:3000", "https://latcost.vercel.app"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    methods: ["GET", "POST"],
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "latcost",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

const JWT_SECRET = "your_secret_key";

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [existingUser] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "อีเมลนี้มีอยู่แล้ว" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db
      .promise()
      .query("INSERT INTO users (email, password) VALUES (?, ?)", [
        email,
        hashedPassword,
      ]);

    const token = jwt.sign({ id: result.insertId, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ message: "สมัครสำเร็จ", token });
  } catch (error) {
    res.status(500).json({ message: "เกิดข้อผิดพลาด" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [existingUser] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length === 0) {
      return res.status(400).json({ message: "อีเมลนี้ไม่พบในระบบ" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "รหัสผ่านไม่ถูกต้อง" });
    }

    const token = jwt.sign({ id: existingUser[0].id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ message: "เข้าสู่ระบบสำเร็จ", token });
  } catch (error) {
    res.status(500).json({ message: "เกิดข้อผิดพลาด" });
  }
});

app.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    db.query("SELECT email FROM users WHERE id = ?", [decoded.id], (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      res.json({ user: results[0] });
    });
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
});



app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
