import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Coffee', value: 65 },
  { name: 'Tea', value: 35 },
];

const COLORS = ['#8B4513', '#BC8F8F']; // Brown colors for coffee and tea

function ProductSales() {
  return (
    <div className="chart-container product-sales">
      <div className="chart-header">
        <h2>Product Sales</h2>
        <div className="time-selector">
          <span>This Week</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div className="donut-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="chart-legend">
          {data.map((entry, index) => (
            <div key={entry.name} className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: COLORS[index] }}></span>
              <span className="legend-label">{entry.name}</span>
              <span className="legend-value">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSales;
