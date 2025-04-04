const express = require("express");
const {
  createOrder,
  getOrders,
  deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.delete("/:id", protect, deleteOrder);

module.exports = router;
