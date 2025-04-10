const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "your_secret_key";

router.post("/signup", async (req, res) => {
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

router.post("/login", async (req, res) => {
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

module.exports = router;
