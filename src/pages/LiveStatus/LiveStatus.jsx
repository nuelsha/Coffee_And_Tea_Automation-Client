import React from 'react';
import './livestatus.css';
import Sidebar from '../../components/Admin_com/side_bar_a';

const LiveStatus = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <div className="live-status-container">
          <div className="live-status-header">
            <h1>Live Status Dashboard</h1>
            <select className="time-selector">
              <option>Last hour</option>
            </select>
          </div>

          <div className="metrics-grid">
            {/* Water Level Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Water Level</span>
              </div>
              <div className="water-container">
                <div className="water-level" style={{ height: '76%' }}></div>
              </div>
              <div className="metric-value">76%</div>
              <div className="metric-change positive">+5% from last hour</div>
            </div>

            {/* Coffee Beans Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Coffee Beans</span>
                <i className="coffee-icon">☕</i>
              </div>
              <div className="circle-container">
                <div className="circle-progress" data-value="71"></div>
              </div>
              <div className="metric-value">71%</div>
              <div className="metric-change negative">-2% from last hour</div>
            </div>

            {/* Tea Leaves Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Tea Leaves</span>
                <i className="tea-icon">⭘</i>
              </div>
              <div className="tea-container">
                <div className="tea-level" style={{ height: '63%' }}></div>
              </div>
              <div className="metric-value">63%</div>
              <div className="metric-change positive">+3% from last hour</div>
            </div>

            {/* Sugar Level Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Sugar Level</span>
                <i className="sugar-icon">⏱</i>
              </div>
              <div className="circle-container">
                <div className="circle-progress" data-value="90"></div>
              </div>
              <div className="metric-value">90%</div>
              <div className="metric-change positive">+1% from last hour</div>
            </div>
          </div>

          <div className="bottom-grid">
            {/* Machine Status Card */}
            <div className="metric-card wide">
              <div className="metric-header">
                <span>Machine Status</span>
              </div>
              <div className="status-content">
                <div className="status-icon active"></div>
                <div className="status-info">
                  <div className="status-text">Active</div>
                  <div className="status-update">Last updated: Just now</div>
                </div>
              </div>
            </div>

            {/* Temperature Control Card */}
            <div className="metric-card wide">
              <div className="metric-header">
                <span>Temperature Control</span>
              </div>
              <div className="temperature-gauge">
                <div className="gauge-circle">
                  <div className="gauge-pointer"></div>
                  <div className="temperature-value">93°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStatus; 