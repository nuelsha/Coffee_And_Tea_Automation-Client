import React from "react";
import CouponCard from "../../components/Coupon-Card/CouponCard";
import "./coupon.css";
const Coupon = () => {
  const cardDetails = [
    {
      image: "image",
      title: "Coffee",
      detail: "Rich, aromatic coffee brewed well. Quick and affordable",
      price: "15 ETB",
    },
    {
      image: "image",
      title: "tea",
      detail: "Smooth, refreshing tea, perfectly steeped every time",
      price: "10 ETB",
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