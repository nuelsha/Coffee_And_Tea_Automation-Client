import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Admin</h1>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-link active">
              <svg viewBox="0 0 24 24" className="nav-icon" aria-hidden="true">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <svg viewBox="0 0 24 24" className="nav-icon" aria-hidden="true">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
              </svg>
              <span>Notification</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
