const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.post("/cats", (req, res) => {
  const { user_id, avatar, province, phone, color, description } = req.body;

  const query = `
    INSERT INTO cats (user_id, avatar, province, phone, color, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [user_id, avatar, province, phone, color, description],
    (err, result) => {
      if (err)
        return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
      res
        .status(201)
        .json({ message: "เพิ่มแมวสำเร็จ", catId: result.insertId });
    }
  );
});

router.get("/cats", (req, res) => {
  db.query("SELECT * FROM cats", (err, results) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    res.json(results);
  });
});

router.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM cats WHERE id = ?", [id], (err, results) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "ไม่พบข้อมูลแมว" });
    res.json(results[0]);
  });
});

router.put("/cats/:id", (req, res) => {
  const { id } = req.params;
  const { avatar, province, phone, color, description } = req.body;

  const query = `
    UPDATE cats 
    SET avatar = ?, province = ?, phone = ?, color = ?, description = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  db.query(query, [avatar, province, phone, color, description, id], (err) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    res.json({ message: "อัปเดตข้อมูลแมวเรียบร้อยแล้ว" });
  });
});

router.delete("/cats/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM cats WHERE id = ?", [id], (err) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    res.json({ message: "ลบข้อมูลแมวเรียบร้อยแล้ว" });
  });
});

router.get("/cats/user/:user_id", (req, res) => {
  const { user_id } = req.params;

  db.query(
    "SELECT * FROM cats WHERE user_id = ?",
    [user_id],
    (err, results) => {
      if (err)
        return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
      if (results.length === 0)
        return res.status(404).json({ message: "ไม่พบข้อมูลแมวของผู้ใช้" });
      res.json(results);
    }
  );
});

router.post("/cats/user/liked", (req, res) => {
  const { user_id, cat_id } = req.body;

  const queryCheck =
    "SELECT * FROM user_likes WHERE user_id = ? AND cat_id = ?";
  db.query(queryCheck, [user_id, cat_id], (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "เกิดข้อผิดพลาดในการตรวจสอบ", error: err });

    if (results.length > 0) {
      return res.status(400).json({ message: "คุณได้กดถูกใจแมวตัวนี้แล้ว" });
    }

    const queryInsert =
      "INSERT INTO user_likes (user_id, cat_id) VALUES (?, ?)";
    db.query(queryInsert, [user_id, cat_id], (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "เกิดข้อผิดพลาดในการบันทึก", error: err });
      res.status(201).json({ message: "กดถูกใจแมวเรียบร้อยแล้ว" });
    });
  });
});

router.delete("/cats/user/liked/", (req, res) => {
  const { user_id, cat_id } = req.body;

  const queryCheck =
    "SELECT * FROM user_likes WHERE user_id = ? AND cat_id = ?";
  db.query(queryCheck, [user_id, cat_id], (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "เกิดข้อผิดพลาดในการตรวจสอบ", error: err });

    if (results.length === 0) {
      return res.status(400).json({ message: "คุณยังไม่ได้กดถูกใจแมวตัวนี้" });
    }

    const queryDelete =
      "DELETE FROM user_likes WHERE user_id = ? AND cat_id = ?";
    db.query(queryDelete, [user_id, cat_id], (err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "เกิดข้อผิดพลาดในการลบ", error: err });
      res.json({ message: "เลิกถูกใจแมวเรียบร้อยแล้ว" });
    });
  });
});

router.get("/cats/user/liked/:user_id", (req, res) => {
  const { user_id } = req.params;

  const query = `
      SELECT cats.* 
      FROM cats
      JOIN user_likes ON cats.id = user_likes.cat_id
      WHERE user_likes.user_id = ?
    `;

  db.query(query, [user_id], (err, results) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    res.json(results);
  });
});

module.exports = router;
