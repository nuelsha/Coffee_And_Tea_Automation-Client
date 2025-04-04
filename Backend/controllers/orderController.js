const Order = require("../models/orderModel");
const otpGenerator = require("../util/OTPGenerator");
const crypto = require("crypto");

// Create Order
exports.createOrder = async (req, res) => {
  const { orderType, userId } = req.body;

  console.log(req.body);

  const otp = crypto.randomInt(100000, 999999).toString();

  try {
    const order = new Order({
      user: userId,
      orderType: orderType,
      otp: otpGenerator(6),
    });

    console.log(order);

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
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

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
