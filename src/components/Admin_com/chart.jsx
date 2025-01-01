import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./chart.css";

const data = [
  { name: "Coffee", value: 60 },
  { name: "Tea", value: 40 },
];

const COLORS = ["#D97706", "#78350F"];

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Sales</h3>
        <button className="chart-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height="12"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
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
  );
};

export default Chart;
