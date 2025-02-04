import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css"; // Add your styles for the payment page

const Payment = () => {
  const location = useLocation();
  const { total, title } = location.state || {}; // ✅ Ensure fallback for safety

  console.log("Received state:", location.state);

  return (
    <div className="payment-page">
      <h1>Proceed to Payment</h1>
      <div className="payment-info">
        <p>Item: {title || "N/A"}</p>
        <p>Price: {total || "N/A"} ETB</p>
      </div>
      {/* Payment Button */}
      <button onClick={() => alert("Redirecting to Chappa Payment System...")}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
