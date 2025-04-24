const mongoose = require("mongoose");

const couponTransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  item: { type: String, enum: ["coffee", "tea"], required: true },
  type: { type: String, enum: ["PURCHASE", "REDEEM"], required: true },
  amount: { type: Number, required: true, min: 1 },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CouponTransaction", couponTransactionSchema);
