import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CouponCard from "../../components/Coupon-Card/CouponCard";
import AddItem from "../../components/Add_item/AddItem";
import TopBar from "../../components/Top-Bar/TopBar";
import BottomBar from "../../components/Bottom-Bar/BottomBar";
import History from "../History/History";
import Order from "../Order/Order";
import Coupon from "../Coupon/Coupon";
import { useSelector } from "react-redux";
import "./user.css";

const User = () => {
  const names = ["Purchase", "Buy coupon", "History"];

  const displayAddContainer = useSelector((state) => state.addItem.isOpen);
  return (
    <div className="user-container">
      <div
        className={`overlay-container ${
          displayAddContainer ? "show-add-component" : "exit-add-component"
        }`}>
        <AddItem />
      </div>
      <TopBar />
      <BottomBar names={names} />
      <Sidebar names={names} />
      <div className="userDashboard">
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/history" element={<History />} />
          <Route path="/coupon" element={<Coupon />} />
          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default User;
