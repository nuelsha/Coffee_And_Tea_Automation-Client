import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example authentication logic (can be customized)
    if (isSignIn) {
      // You would usually make an API call here to verify credentials
      // If the credentials are correct:
      // Redirect to the appropriate page (User or Coupon)
      navigate("/user"); // Or '/coupon' depending on the condition
    } else {
      // Handle sign-up logic (you can navigate to a different page if needed)
      // For now, we stay on the same page
      alert("Account Created Successfully!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{isSignIn ? "Sign In" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isSignIn && <input type="text" placeholder="Full Name" required />}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
        </form>

        <p>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "Create one" : "Sign in"}
          </span>
        </p>

        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Register;
