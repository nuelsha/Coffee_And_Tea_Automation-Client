import React, { useState } from "react";
import { setSelectedLink } from "../../redux/Select-Link/select-link-actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./bottomBar.css";
const BottomBar = ({ names }) => {
  const selectedLink = useSelector((state) => state.selectLink.selectedLink);
  const dispatch = useDispatch();
  const routes = {
    Purchase: "/",
    "Buy coupon": "/coupon",
    History: "/history",
  };
  return (
    <div className="bottomBar">
      <div className="bottomBar-items">
        {names.map((name) => (
          <Link
            className="default-link"
            to={`/user${routes[name]}`}
            onClick={() => dispatch(setSelectedLink(name))}
            key={name}>
            <div
              key={name}
              className={`bottomBar-item ${
                name === selectedLink ? "active" : ""
              }`}>
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
