const express = require("express");
const {
  registerUser,
  loginUser,
  getNotification,
  getUsers,
  getUserProfile,
  getUser,
} = require("../controllers/userController");

const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:userId", protect, getNotification);
router.get("/profile", protect, getUserProfile);
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUser);

module.exports = router;
