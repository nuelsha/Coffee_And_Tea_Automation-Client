const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }],
  coupons: {
    coffee: {
      amount: { type: Number, default: 0, min: 0, max: 50 },
      lastUpdated: { type: Date }
    },
    tea: {
      amount: { type: Number, default: 0, min: 0, max: 50 },
      lastUpdated: { type: Date }
    }
  },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "CouponTransaction" }] // Add this line to store transaction IDs
});

module.exports = mongoose.model("User", userSchema);
