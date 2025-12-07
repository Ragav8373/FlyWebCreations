const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PROTECTED: GET ADMIN DATA
router.get("/data", authMiddleware, (req, res) => {
  res.json({
    message: "Admin authentication OK",
    admin: req.admin
  });
});

module.exports = router;
