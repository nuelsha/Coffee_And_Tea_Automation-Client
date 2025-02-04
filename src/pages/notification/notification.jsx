import React from "react";
import Sidebar from "../../components/Admin_com/side_bar_a";
import Header from "../../components/Admin_com/header";
import "./notification.css";
import NotificationList from "../../components/Admin_com/Notification_com/initialNotifications";

const Notification = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="notification">
        <Header />
        <h1 className="notification-title">Notifications</h1>
        <div className="notification-content">
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default Notification;
