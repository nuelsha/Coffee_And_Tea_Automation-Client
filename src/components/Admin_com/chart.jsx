import React from "react";
import "./chart.css";

export default function Chart() {
  // Calculate SVG parameters
  const size = 200;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  // Progress values (0-100)
  const outerProgress = 75; // Coffee progress
  const innerProgress = 45; // Tea progress

  // Calculate stroke dasharray and dashoffset
  const getPathProperties = (progress) => {
    const dashoffset = circumference - (progress / 100) * circumference;
    return {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: dashoffset,
    };
  };

  // Calculate path for circles
  const getPath = (radius) => {
    return `M ${center} ${strokeWidth / 2}
            A ${radius} ${radius} 0 0 1 ${center} ${size - strokeWidth / 2}
            A ${radius} ${radius} 0 0 1 ${center} ${strokeWidth / 2}`;
  };

  return (
    <div className="progress-container">
      <div className="chart-wrapper">
        <svg width={size} height={size} className="progress-ring">
          {/* Background circles */}
          <path d={getPath(radius)} className="progress-ring-circle-bg outer" />
          <path
            d={getPath(radius - strokeWidth - 4)}
            className="progress-ring-circle-bg inner"
          />

          {/* Progress circles */}
          <path
            d={getPath(radius)}
            className="progress-ring-circle coffee"
            style={getPathProperties(outerProgress)}
          />
          <path
            d={getPath(radius - strokeWidth - 4)}
            className="progress-ring-circle tea"
            style={getPathProperties(innerProgress)}
          />
        </svg>
      </div>

      <div className="legend-panel">
        <div className="legend-header">
          <span>Sale</span>
          <span className="time-period">This Week</span>
        </div>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-dot coffee"></span>
            <span>Coffee</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot tea"></span>
            <span>Tea</span>
          </div>
        </div>
      </div>
    </div>
  );
}
