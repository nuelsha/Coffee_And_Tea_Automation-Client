import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import User from "../User/User";
import Coupon from "../Coupon/Coupon";
import BackButton from "../../components/Back-Button/BackButton";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <div className="homepage-overlay"></div>
        <div className="home-container">
          {/* <BackButton /> Add this line to use the component */}
          <div className="home-text">
            <h1 className="home-title">Take a sip?</h1>
            <p className="home-detail">
              Welcome to the AAiT Automated Tea & Coffee Machine! Whether you're
              craving a steaming cup of coffee or a soothing tea, our automated
              machine delivers your perfect brew with just a few taps. Simply
              order, create a coupon, and enjoy the convenience of freshly
              brewed beverages at the touch of a button.
            </p>
            <Link to="/coupon" className="coupon-link">
              Create Coupon
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
