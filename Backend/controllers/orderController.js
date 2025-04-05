const Order = require("../models/orderModel");
const { generateOTP } = require("../util/OTPGenerator.js");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel.js");
const mongoose = require("mongoose");
const crypto = require("crypto");

exports.createOrder = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { order, userId } = req.body;
  const otp = generateOTP(6);

  try {
    // 1. Create Order
    const newOrder = new Order({
      user: userId,
      orderType: order,
      otp,
    });

    const notification = new Notification({
      user: userId,
      message: `Your order has been placed with OTP: ${otp}`,
      metadata: { orderId: newOrder._id },
    });

    console.log(userId);

    try {
      await notification.save({ session });
      await newOrder.save({ session });
      await User.findByIdAndUpdate(
        userId,
        { $push: { notifications: notification._id } },
        { session }
      );
      console.log("Order saved successfully");
    } catch (saveError) {
      console.error("Error saving order:", saveError);
    }

    // 3. Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json(newOrder);
  } catch (error) {
    // 4. Rollback transaction on error
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: "Failed to create order and notification" });
  }
};
// Get Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Get single Order for machine
exports.getSingleOrder = async (req, res) => {
  const { otp } = req.body;

  try {
    const order = await Order.findOne({ otp }).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
