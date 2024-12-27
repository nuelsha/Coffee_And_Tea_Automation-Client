import React from "react";
import Coffee from "../../assets/Leonardo_Phoenix_A_dimly_lit_moody_scene_featuring_a_steaming_2.jpg";
import Tea from "../../assets/Leonardo_Phoenix_A_serene_elegant_scene_showcasing_a_steaming_0.jpg";
import OrderCard from "../../components/Order-card/OrderCard";
import OrderForm from "../../components/Order-Form/OrderForm";
import { useSelector } from "react-redux";
import "./order.css";
const Order = () => {
  const orderCards = [
    { name: "Coffee", CouponAmount: "12", image: Coffee },
    { name: "Tea", CouponAmount: "9", image: Tea },
  ];

  const displayAddContainer = useSelector((state) => state.addItem.displayOrderForm);

  return (
    <div className="order-container">
      <div className="order-cards">
        <div
          className={`overlay-container ${
            displayAddContainer ? "show-add-component" : "exit-add-component"
          }`}>
          <OrderForm />
        </div>
        {orderCards.map((card) => (
          <OrderCard
            name={card.name}
            amount={card.CouponAmount}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Order;
