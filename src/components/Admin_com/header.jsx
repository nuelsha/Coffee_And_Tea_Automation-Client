import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="profile-button">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile avatar"
            className="avatar"
          />
          <span className="username">Dagi</span>
          <svg
            className="chevron-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div className="header-center">
        <div className="search-container">
          <svg
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Quick search"
            className="search-input"
            aria-label="Quick search"
          />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-button" aria-label="Notifications">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}
