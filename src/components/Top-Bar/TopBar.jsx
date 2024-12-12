import React from "react";
import "./topBar.css";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="user-detail">
        <div className="user-avatar">K</div>
        <div className="user-name">kalkidan</div>
      </div>
      <div className="logout">Logout</div>
    </div>
  );
};

export default TopBar;
