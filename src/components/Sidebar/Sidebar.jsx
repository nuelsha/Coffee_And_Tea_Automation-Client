import React from "react";
import { setSelectedLink } from "../../redux/Select-Link/select-link-actions";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ names }) => {
  const selectedLink = useSelector((state) => state.selectLink.selectedLink);
  const dispatch = useDispatch();

  // Mapping names to proper routes
  const routes = {
    Purchase: "/",
    "Buy coupon": "/coupon",
    History: "/history",
  };

  return (
    <div className="sidebar">
      <div className="user-detail">
        <div className="user-avatar">K</div>
        <div className="user-name">kalkidan</div>
      </div>
      <ul className="sidebar-elements">
        {names.map((name) => (
          <Link
            className="default-link"
            to={`/user${routes[name]}`}
            key={name}
            onClick={() => {
              dispatch(setSelectedLink(name)); // Set selected link in Redux
            }}
          >
            <li
              className={`sidebar-element ${
                selectedLink === name ? "active" : ""
              }`}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
