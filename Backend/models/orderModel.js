const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderType: {
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
  },

  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  otp: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
