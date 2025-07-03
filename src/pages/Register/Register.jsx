import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/Auth/auth-actions";
import "./Register.css";

const Register = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const auth = useSelector((state) => state.auth);
  const { loading, error, isAuthenticated } = auth;

  useEffect(() => {
    // If user is already authenticated, redirect to user page
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    if (isSignIn) {
      // Login
      if (!email || !password) {
        setMessage("Please fill in all fields");
        return;
      }
      dispatch(login(email, password));
    } else {
      // Register
      if (!name || !email || !password) {
        setMessage("Please fill in all fields");
        return;
      }
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{isSignIn ? "Sign In" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
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
          
          {message && <div className="error-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : isSignIn ? "Sign In" : "Sign Up"}
          </button>
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
