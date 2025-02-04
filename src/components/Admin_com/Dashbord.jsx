import React from "react";
import "./Dashboard.css";
import Header from "./header";
import SalesOverview from "./SalesOverview";
import UserGrowth from "./UserGrowth";
import ProductSales from "./ProductSales";
import DashboardOverview from "./DashboardOverview";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <DashboardOverview />
      <div className="charts-grid">
        <div className="chart-card">
          <SalesOverview />
        </div>
        <div className="chart-card">
          <UserGrowth />
        </div>
      </div>
      <div className="product-sales-container">
        <div className="chart-card">
          <ProductSales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
