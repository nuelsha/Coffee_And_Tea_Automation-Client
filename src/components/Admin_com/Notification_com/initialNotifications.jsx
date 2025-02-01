import React, { useState } from 'react';
import './Notifications.css';

const initialNotifications = [
  {
    id: 1,
    type: 'alert',
    title: 'System Alert',
    message: 'High server load detected. Consider optimizing database queries.',
    status: 'urgent',
    timestamp: '2 minutes ago',
    icon: 'bell'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Storage Warning',
    message: 'Storage capacity reaching 85%. Consider cleanup or expansion.',
    status: 'warning',
    timestamp: '15 minutes ago',
    icon: 'storage'
  },
  {
    id: 3,
    type: 'info',
    title: 'Backup Complete',
    message: 'Daily backup completed successfully. All systems normal.',
    status: 'info',
    timestamp: '1 hour ago',
    icon: 'backup'
  },
  {
    id: 4,
    type: 'info',
    title: 'New User Registered',
    message: 'A new user has registered to the platform.',
    status: 'info',
    timestamp: '3 hours ago',
    icon: 'user'
  }
];

const NotificationList = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleRemoveNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getIconComponent = (icon) => {
    switch (icon) {
      case 'bell':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        );
      case 'storage':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12H2"></path>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          </svg>
        );
      case 'backup':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        );
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <div className="notifications-actions">
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Unread">Unread</option>
            <option value="Urgent">Urgent</option>
          </select>
          <button 
            className="clear-all-btn"
            onClick={() => setNotifications([])}
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`notification-card ${notification.status}`}
          >
            <div className={`notification-icon ${notification.type}`}>
              {getIconComponent(notification.icon)}
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <div className="notification-badges">
                  {notification.status === 'urgent' && (
                    <span className="urgent-badge">urgent</span>
                  )}
                  {notification.status === 'warning' && (
                    <span className="warning-badge">warning</span>
                  )}
                  {notification.status === 'info' && (
                    <span className="info-badge">info</span>
                  )}
                </div>
                <button
                  className="dismiss-btn"
                  onClick={() => handleRemoveNotification(notification.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
