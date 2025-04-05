const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const setToken = require("../util/setToken.js");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");

// ✅ Get User Profile (Protected Route)
exports.getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Not authorized, no user found" });
  }

  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
});

// Get a User by ID (Admin Only)
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});
// Get a User (Admin Only)
exports.getUsers = asyncHandler(async (req, res) => {
  const user = await User.find().select("-password");

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Register User
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(400).json({ error: "Invalid user data" });
  }
});

// Login User
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  setToken(res, token);
  res.json({ message: "Login successful", token });
});

exports.getNotification = async (req, res) => {
  const { userId } = req.params; // or req.user._id if using auth middleware
  console.log(userId);
  try {
    const notifications = await Notification.find({ user: userId }).sort({
      createdAt: -1,
    }); // newest first

    console.log(notifications);

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};
