const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");

const router = express.Router();

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "your_secret_key");

    db.query("SELECT id, email FROM users WHERE id = ?", [decoded.id], (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      res.json({ user: results[0] });
    });
  } catch (err) {
    console.error("JWT Error:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
});

router.get("/check-token", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    res.json({ message: "Token is valid", decoded });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    return res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;



module.exports = router;
