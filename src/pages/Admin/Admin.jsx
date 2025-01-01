import React from "react";
import "./admin.css";

import Sidebar from "../../components/Admin_com/side_bar_a";
import Dashboard from "../../components/Admin_com/Dashbord";

const Admin = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Admin;
