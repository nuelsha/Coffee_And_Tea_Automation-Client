import React from 'react';
import './Dashboard.css';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h2>Dashboard Overview</h2>
        <div className="time-selector">
          <span>Last week</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      <div className="overview-cards">
        <div className="overview-card">
          <div className="card-icon sales">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3z"/>
              <path d="M8 12h8"/>
              <path d="M12 8v8"/>
            </svg>
          </div>
          <div className="card-content">
            <span className="card-label">Sales</span>
            <h3 className="card-value">1,000</h3>
            <span className="card-change positive">+15% from last month</span>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon earned">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="card-content">
            <span className="card-label">Total Earned</span>
            <h3 className="card-value">$10,000</h3>
            <span className="card-change positive">+25% from last month</span>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon users">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="card-content">
            <span className="card-label">Total Users</span>
            <h3 className="card-value">500</h3>
            <span className="card-change positive">+8% from last month</span>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon growth">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 6l-9.5 9.5-5-5L1 18"/>
              <path d="M17 6h6v6"/>
            </svg>
          </div>
          <div className="card-content">
            <span className="card-label">Growth Rate</span>
            <h3 className="card-value">18%</h3>
            <span className="card-change positive">+5% from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
