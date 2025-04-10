const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./config/db");

const app = express();
const port = 3002;

app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "https://latcost.vercel.app"];
app.use(
  cors(
  //   {
  //   origin: (origin, callback) => {
  //     if (allowedOrigins.includes(origin)) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error("Not allowed by CORS"), false);
  //     }
  //   },
  //   methods: ["GET", "POST"],
  // }
)
);

const cats = require("./routes/cats/cats");
app.use(cats);

const user = require("./routes/user/me");
app.use(user);

const authRoutes = require("./routes/user/auth");
app.use(authRoutes);

app.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "your_secret_key");
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
