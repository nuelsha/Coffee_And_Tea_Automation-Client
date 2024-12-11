import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <div className="homepage-overlay"></div>
        <div className="home-container">
          <div className="home-text">
            <h1 className="home-title">Take a sip?</h1>
            <p className="home-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              delectus quod eaque magnam similique officia maiores? Provident
              nobis cupiditate omnis vel est id quisquam suscipit vitae
              reprehenderit quas? Eligendi, error?
            </p>
            <Link className="coupon-link">Create Coupon</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
