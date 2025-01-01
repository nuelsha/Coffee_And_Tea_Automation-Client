import React, { useState } from "react";
import "./Notification_in.css";

const initialNotifications = [
  {
    id: 1,
    icon: "!",
    isAlert: true,
    message:
      "Meg Griffin has left you a review. Both of your reviews from this trip are now public.",
    date: "March 1, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    icon: null,
    isAlert: false,
    message:
      "Cleveland Brown has left you a review. Both of your reviews from this trip are now public.",
    date: "February 26, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    icon: null,
    isAlert: false,
    message:
      "Glenn accepted your invite to co-host Cheerful 2-bedroom home in the heart of Quahog",
    date: "April 25, 2022",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notifications-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-item">
          <div className="notification-content">
            {notification.isAlert ? (
              <div className="alert-icon">!</div>
            ) : (
              <img
                src={notification.avatar}
                alt="User avatar"
                className="user-avatar"
              />
            )}
            <div className="notification-text">
              <p className="message">{notification.message}</p>
              <p className="date">{notification.date}</p>
            </div>
          </div>
          <button
            className="close-button"
            onClick={() => removeNotification(notification.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
