import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === "/";
  const [user, setUser] = useState(false);
  const handleClick = () => {
    setUser(!user);
  };
  return (
    <div className="navbar">
      <ul className="navlinks">
        <li className="navlink logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/8C88K4xz/photo-2025-02-03-01-27-29.jpg"
              alt="AAiT Logo"
              className="aait-logo"
            />
          </Link>
        </li>
        <li className="navlink" onClick={handleClick}>
          <Link to="/register" className="register">
            {!user ? "Register" : "Signout"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
