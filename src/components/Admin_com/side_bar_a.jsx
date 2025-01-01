import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Admin</h1>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <ul className="nav-list">
          <li>
            <Link
              to="/admin"
              className={`nav-link ${
                location.pathname === "/admin" ? "active" : ""
              }`}
            >
              <svg viewBox="0 0 24 24" className="nav-icon" aria-hidden="true">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4V4zm6 0h4v4h-4v-4z" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notification"
              className={`nav-link ${
                location.pathname === "/notification" ? "active" : ""
              }`}
            >
              <svg viewBox="0 0 24 24" className="nav-icon" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V18h-2v1.93A8.001 8.001 0 014 12h2a6 6 0 0012 0h2a8.001 8.001 0 01-7 7.93zM12 4a8 8 0 00-8 8h2a6 6 0 0112 0h2a8 8 0 00-8-8z" />
              </svg>
              <span>Notifications</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
