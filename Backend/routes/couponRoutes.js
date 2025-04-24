const express = require("express");
const router = express.Router();
const couponController = require("../controllers/couponController");
const { protect } = require("../middlewares/authMiddleware");

// Purchase Coupon Route
router.post("/purchase", protect, couponController.purchaseCoupon);

// Redeem Coupon Route
router.post("/redeem", protect, couponController.redeemCoupon);

module.exports = router;
