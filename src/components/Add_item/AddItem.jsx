import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/AddItem/add-item-action";
import "./addItem.css";
const AddItem = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState(0);
  const handleClick = () => {
    dispatch(setOpen());
  };
  const title = useSelector((state) => state.addItem.item);
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

  return (
    <div className="add-item">
      <div className="add-content">
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
          <div className="Total"> Total : {total} ETB</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
