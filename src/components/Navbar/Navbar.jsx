import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/auth-actions";
import aatitlogo from "../../assets/Logo.png"; // ✅ Corrected image import
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get auth state from Redux
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="navbar">
      <ul className="navlinks">
        <li className="navlink logo">
          <Link to="/">
            <img
              src={aatitlogo}
              alt="AAiT Logo"
              className="aait-logo"
            />
          </Link>
        </li>
        <li className="navlink">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="register logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/register" className="register">
              Sign In
            </Link>
          )}
        </li>
        {isAuthenticated && userInfo && (
          <li className="navlink user-info">
            <span>Hello, {userInfo.name}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
