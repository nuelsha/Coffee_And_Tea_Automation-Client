import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/auth-actions";
import aatitlogo from "../../assets/Logo.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={aatitlogo} alt="AAiT Logo" className="aait-logo" />
      </Link>
      <div className="nav-items-right">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="register logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/register" className="register">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
