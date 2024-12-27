import React from "react";
import { setOpen } from "../../redux/AddItem/add-item-action";
import { useDispatch } from "react-redux";
import "./orderCard.css";

const OrderCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="order-card">
      <div className="order-card-overlay">
        <div>
          <h3>Buy</h3>
          <h2>{props.name}</h2>
        </div>
        <div
          className="cupon-container"
          onClick={() => dispatch(setOpen(props.name, true))}>
          <span className="cupon-amount">{props.amount}</span>
        </div>
      </div>
      <img className="order-image" src={props.image} alt="" />
    </div>
  );
};

export default OrderCard;
