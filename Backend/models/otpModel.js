const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 },  // OTP expires after 5 minutes
  used: { type: Boolean, default: false }
});

module.exports = mongoose.model("OTP", otpSchema);
