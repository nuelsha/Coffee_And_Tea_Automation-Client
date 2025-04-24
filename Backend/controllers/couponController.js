const User = require("../models/userModel");
const CouponTransaction = require("../models/couponModel");
const Notification = require("../models/notificationModel");

// Helper function to check coupon validity
const checkCouponLimit = (currentAmount, addedAmount) => {
  return currentAmount + addedAmount <= 50;
};

// Purchase Coupon Controller
exports.purchaseCoupon = async (req, res) => {
  const { userId, item, amount } = req.body;

  // Validate item type (coffee or tea)
  if (!["coffee", "tea"].includes(item)) {
    return res.status(400).json({ message: "Invalid item type." });
  }

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if user has space for the coupon (max 50 coupons per item)
    const currentAmount = user.coupons[item].amount;
    if (!checkCouponLimit(currentAmount, amount)) {
      return res
        .status(400)
        .json({ message: `Cannot have more than 50 ${item} coupons.` });
    }

    // Update the user's coupon count
    user.coupons[item].amount += amount;
    user.coupons[item].lastUpdated = new Date();

    // Save the updated user document
    await user.save();

    // Create a new coupon transaction record
    const couponTransaction = new CouponTransaction({
      user: userId,
      item,
      type: "PURCHASE",
      amount,
    });

    await couponTransaction.save();

    // Add the transaction ID to the user's document
    user.transactions.push(couponTransaction._id);
    await user.save();

    // Send a notification to the user (optional)
    const notification = new Notification({
      user: userId,
      message: `You’ve earned ${amount} ${item} coupons!`,
    });

    await notification.save();
    user.notifications.push(notification._id);
    await user.save();

    return res
      .status(200)
      .json({
        message: `${amount} ${item} coupon(s) added!`,
        user,
        transaction: couponTransaction,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Redeem Coupon Controller
exports.redeemCoupon = async (req, res) => {
  const { userId, item, amount } = req.body;

  // Validate item type (coffee or tea)
  if (!["coffee", "tea"].includes(item)) {
    return res.status(400).json({ message: "Invalid item type." });
  }

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if the user has enough coupons to redeem
    const currentAmount = user.coupons[item].amount;
    if (currentAmount < amount) {
      return res
        .status(400)
        .json({ message: `Not enough ${item} coupons to redeem.` });
    }

    // Update the user's coupon count
    user.coupons[item].amount -= amount;
    user.coupons[item].lastUpdated = new Date();

    // Save the updated user document
    await user.save();

    // Create a new coupon transaction record
    const couponTransaction = new CouponTransaction({
      user: userId,
      item,
      type: "REDEEM",
      amount,
    });

    await couponTransaction.save();

    // Add the transaction ID to the user's document
    user.transactions.push(couponTransaction._id);
    await user.save();

    // Send a notification to the user (optional)
    const notification = new Notification({
      user: userId,
      message: `You’ve redeemed ${amount} ${item} coupon(s)!`,
    });

    await notification.save();
    user.notifications.push(notification._id);
    await user.save();

    return res
      .status(200)
      .json({
        message: `${amount} ${item} coupon(s) redeemed!`,
        user,
        transaction: couponTransaction,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
