import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlinks">
        <li className="navlink logo">LOGO</li>
        <li className="navlink">
          <Link className="register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
