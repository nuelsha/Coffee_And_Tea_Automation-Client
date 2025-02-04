import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 100 },
  { month: 'Feb', users: 150 },
  { month: 'Mar', users: 200 },
  { month: 'Apr', users: 250 },
  { month: 'May', users: 300 },
  { month: 'Jun', users: 350 },
  { month: 'Jul', users: 400 },
  { month: 'Aug', users: 450 },
  { month: 'Sep', users: 480 },
  { month: 'Oct', users: 500 },
];

function UserGrowth() {
  return (
    <div className="chart-container">
      <h2>User Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Line type="monotone" dataKey="users" stroke="#9b59b6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserGrowth;
