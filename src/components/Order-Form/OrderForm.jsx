import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/AddItem/add-item-action";
import "./orderForm.css";

const OrderForm = () => {
  const title = useSelector((state) => state.addItem.item);
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value)) {
      title === "coffee" ? setTotal(value * 50) : setTotal(value * 30);
      value < 50 ? setAmount(value) : setAmount(50);
    } else {
      return;
    }
  };
  const handleClick = () => {
    dispatch(setOpen("", true));
  };
  return (
    <div>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <span className="close-form" onClick={handleClick}>
          <FaTimes />
        </span>
        <label htmlFor="item-input">{title}</label>
        <input
          id="item-input"
          type="text"
          onChange={handleChange}
          value={amount}
          placeholder="Enter Amount"
          required
        />
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
