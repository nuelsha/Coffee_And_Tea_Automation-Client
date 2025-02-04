import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 4500, profit: 1000 },
  { month: 'Feb', sales: 2800, profit: 800 },
  { month: 'Mar', sales: 4200, profit: 900 },
  { month: 'Apr', sales: 4500, profit: 800 },
  { month: 'May', sales: 3000, profit: 700 },
  { month: 'Jun', sales: 2500, profit: 900 },
  { month: 'Jul', sales: 5800, profit: 1000 },
  { month: 'Aug', sales: 4000, profit: 800 },
  { month: 'Sep', sales: 5200, profit: 1100 },
  { month: 'Oct', sales: 7500, profit: 1200 },
];

function SalesOverview() {
  return (
    <div className="chart-container">
      <h2>Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="sales" fill="#3498db" />
          <Bar dataKey="profit" fill="#2ecc71" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesOverview;
