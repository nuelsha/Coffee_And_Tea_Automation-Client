const Order = require("../models/orderModel");
const { generateOTP } = require("../util/OTPGenerator.js");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel.js");
const mongoose = require("mongoose");
const OTP = require("../models/otpModel"); 
const crypto = require("crypto");

exports.createOrder = async (req, res) => {
  const session = await mongoose.startSession();
  const validItems = ["coffee", "tea"]; 
  session.startTransaction();

  const { order, userId } = req.body;

  // Validation for the order data
  if (!order || !Array.isArray(order) || order.length === 0) {
    return res.status(400).json({ error: "Order array is missing or empty" });
  }

  for (let i = 0; i < order.length; i++) {
    const { item, quantity } = order[i];

    if (!item || typeof item !== "string" || item.trim() === "" || !validItems.includes(item.trim().toLowerCase())) {
      return res.status(400).json({ error: `Invalid item name at index ${i}, allowed items are 'coffee' or 'tea'` });
    }
    // Check if quantity is a valid number and within range
    if (!quantity || typeof quantity !== "number" || quantity < 0 || quantity > 4) {
      return res.status(400).json({ error: `Invalid quantity at index ${i}, must be between 0 and 4` });
    }
  }

  // Check if the user ID is valid
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  // Generate OTP for the order
  const otp = generateOTP(6);

  try {
    // Check if the user already has an active OTP
    const existingOTP = await OTP.findOne({ user: userId, used: false });

    if (existingOTP) {
      return res.status(400).json({ error: "You already have an active OTP." });
    }

    // Create OTP entry for the user
    const newOTP = new OTP({
      user: userId,
      otp,
      used: false,
    });

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

    try {
      await newOTP.save({ session });  // Save the OTP in the session
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

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json(newOrder);
  } catch (error) {
    // Rollback transaction on error
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

// Get single Order for machine and deduct coupon
exports.getSingleOrder = async (req, res) => {
  const { otp, userId } = req.body;

  try {
    // Find the order by OTP
    const order = await Order.findOne({ otp }).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Find the user who placed the order
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Determine the coupon type based on the orderType (coffee or tea)
    const couponType = order.orderType === "coffee" ? "coffee" : "tea";

    // Check if the user has enough coupons
    if (user.coupons[couponType] <= 0) {
      return res
        .status(400)
        .json({ error: `Not enough ${couponType} coupons to deduct` });
    }

    // Deduct coupon amount (assuming 1 coupon per order)
    user.coupons[couponType] -= 1;

    // Save the updated user model
    await user.save();

    res.json({
      message: `${order.orderType} order confirmed and coupon deducted`,
      order,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to process order and update coupon" });
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
