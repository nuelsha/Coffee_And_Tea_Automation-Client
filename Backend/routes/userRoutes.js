const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  getUserProfile,
  getUser,
} = require("../controllers/userController");

const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUser);

module.exports = router;
