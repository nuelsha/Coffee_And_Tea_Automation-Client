import React from "react";
import CouponCard from "../../components/Coupon-Card/CouponCard";
import "./coupon.css";
const Coupon = () => {
  const cardDetails = [
    {
      image: "image",
      title: "coffee",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,magni.",
      price: "12$",
    },
    {
      image: "image",
      title: "tea",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,magni.",
      price: "10$",
    },
  ];

  return (
    <div className="card-container">
      {cardDetails.map((cardDetail) => (
        <CouponCard
          image={cardDetail.image}
          title={cardDetail.title}
          detail={cardDetail.detail}
          price={cardDetail.price}
        />
      ))}
    </div>
  );
};

export default Coupon;
