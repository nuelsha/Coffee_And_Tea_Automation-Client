import React, { useState } from "react";
import { PieChart, Pie } from "recharts";
import "./chart.css";

export default function SalesChart() {
  const [timeframe, setTimeframe] = useState("This Week");

  // Data for the outer ring (Coffee)
  const coffeeData = [
    { value: 75, fill: "#b08968" }, // Progress
    { value: 25, fill: "transparent" }, // Remaining
  ];

  // Data for the inner ring (Tea)
  const teaData = [
    { value: 45, fill: "#8b4513" }, // Progress
    { value: 55, fill: "transparent" }, // Remaining
  ];

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <PieChart width={200} height={200}>
          {/* Outer ring - Coffee */}
          <Pie
            data={coffeeData}
            cx={100}
            cy={100}
            startAngle={90}
            endAngle={-270}
            innerRadius={70}
            outerRadius={85}
            strokeWidth={0}
            cornerRadius={5}
            paddingAngle={2}
          />
          {/* Inner ring - Tea */}
          <Pie
            data={teaData}
            cx={100}
            cy={100}
            startAngle={90}
            endAngle={-270}
            innerRadius={55}
            outerRadius={70}
            strokeWidth={0}
            cornerRadius={5}
            paddingAngle={2}
          />
        </PieChart>
      </div>

      <div className="legend-panel">
        <div className="legend-header">
          <span className="title">Sale</span>
          <button
            className="timeframe-button"
            onClick={() =>
              setTimeframe(
                timeframe === "This Week" ? "Last Week" : "This Week"
              )
            }
          >
            {timeframe}
            <svg
              className="chevron-icon"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-dot coffee"></span>
            <span className="legend-label">Coffee</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot tea"></span>
            <span className="legend-label">Tea</span>
          </div>
        </div>
      </div>
    </div>
  );
}
