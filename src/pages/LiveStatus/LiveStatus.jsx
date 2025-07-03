import React, { useState, useEffect } from "react";
import "./livestatus.css";
import Sidebar from "../../components/Admin_com/side_bar_a";
import { FaCoffee, FaLeaf, FaCube, FaThermometerHalf } from "react-icons/fa"; // Example icons

const LiveStatus = () => {
  const [statusData, setStatusData] = useState({
    waterLevel: 76,
    coffeeBeans: 71,
    teaLeaves: 63,
    sugarLevel: 90,
    temperature: 93,
    machineStatus: "Active",
  });

  // This useEffect is a placeholder for fetching live data
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, you would fetch data from an API here
      // For now, we'll just simulate some minor changes
      setStatusData((prevData) => ({
        ...prevData,
        waterLevel: Math.min(100, prevData.waterLevel + 1),
        coffeeBeans: Math.max(0, prevData.coffeeBeans - 1),
      }));
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <div className="live-status-container">
          <div className="live-status-header">
            <h1>Live Status Dashboard</h1>
            <select className="time-selector">
              <option>Last hour</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
            </select>
          </div>

          <div className="metrics-grid">
            {/* Water Level Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Water Level</span>
                <i className="fas fa-tint">💧</i>
              </div>
              <div className="water-container">
                <div
                  className="water-level"
                  style={{ height: `${statusData.waterLevel}%` }}
                ></div>
              </div>
              <div className="metric-value">{statusData.waterLevel}%</div>
              <div className="metric-change positive">+5% from last hour</div>
            </div>

            {/* Coffee Beans Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Coffee Beans</span>
                <FaCoffee />
              </div>
              <div className="circle-container">
                <svg className="circle-progress" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${statusData.coffeeBeans}, 100`}
                    d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="metric-value-circle">
                  {statusData.coffeeBeans}%
                </div>
              </div>
              <div className="metric-change negative">-2% from last hour</div>
            </div>

            {/* Tea Leaves Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Tea Leaves</span>
                <FaLeaf />
              </div>
              <div className="tea-container">
                <div
                  className="tea-level"
                  style={{ height: `${statusData.teaLeaves}%` }}
                ></div>
              </div>
              <div className="metric-value">{statusData.teaLeaves}%</div>
              <div className="metric-change positive">+3% from last hour</div>
            </div>

            {/* Sugar Level Card */}
            <div className="metric-card">
              <div className="metric-header">
                <span>Sugar Level</span>
                <FaCube />
              </div>
              <div className="circle-container">
                <svg className="circle-progress" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${statusData.sugarLevel}, 100`}
                    d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="metric-value-circle">
                  {statusData.sugarLevel}%
                </div>
              </div>
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
                <div
                  className={`status-indicator ${statusData.machineStatus.toLowerCase()}`}
                ></div>
                <div className="status-info">
                  <div
                    className={`status-text ${statusData.machineStatus.toLowerCase()}`}
                  >
                    {statusData.machineStatus}
                  </div>
                  <div className="status-update">Last updated: Just now</div>
                </div>
              </div>
            </div>

            {/* Temperature Control Card */}
            <div className="metric-card wide">
              <div className="metric-header">
                <span>Temperature Control</span>
                <FaThermometerHalf />
              </div>
              <div className="temperature-gauge">
                <div className="gauge-body">
                  <div className="gauge-fill"></div>
                  <div className="gauge-cover">
                    <div className="temperature-value">
                      {statusData.temperature}°C
                    </div>
                  </div>
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
