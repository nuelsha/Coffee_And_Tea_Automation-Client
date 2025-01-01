import React from "react";
import "./Dashboard.css";
import Header from "./header";
import Chart from "./chart";
import LineGraph from "./line-graph";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="stats">
        <div className="stat">
          1000 <span>sales</span>
        </div>
        <div className="stat">
          10,000 <span>total earned</span>
        </div>
        <div className="stat">
          500 <span>total users</span>
        </div>
      </div>
      <div className="charts">
        <LineGraph />
      </div>
    </div>
  );
}

export default Dashboard;
