import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css"; // Add your styles for the payment page

const Payment = () => {
  const location = useLocation(); // Access passed data (e.g., title, price)

  // You can extract the title and price from the `location.state` passed by the CouponCard
  const { title, price } = location.state || {};

  return (
    <div className="payment-page">
      <h1>Proceed to Payment</h1>
      <div className="payment-info">
        <p>Item: {title}</p>
        <p>Price: {price}</p>
      </div>
      {/* Here, you can integrate the Chappa Payment system or create a form */}
      <button onClick={() => alert("Redirecting to Chappa Payment System...")}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
