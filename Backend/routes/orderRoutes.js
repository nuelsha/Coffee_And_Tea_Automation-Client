const express = require("express");
const {
  createOrder,
  getSingleOrder,
  getOrders,
  deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.post("/order", getSingleOrder);
router.delete("/:id", protect, deleteOrder);

module.exports = router;
