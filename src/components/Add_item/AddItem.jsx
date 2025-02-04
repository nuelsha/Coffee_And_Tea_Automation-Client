import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/AddItem/add-item-action";
import "./addItem.css";

const AddItem = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const title = useSelector((state) => state.addItem.item);

  // Handle form submission separately
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    dispatch(setOpen()); // Close modal if needed
    
    navigate("/payment", {
      state: { total, title }, // ✅ Pass state correctly
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) && value <= 50) {
      title === "coffee" ? setTotal(value * 12) : setTotal(value * 10);
      value < 50 ? setAmount(value) : setAmount(50);
    }
  };

  return (
    <div className="add-item">
      <div className="add-content">
        <form className="add-item-form" onSubmit={handleSubmit}>
          {/* Close button should only close the modal */}
          <span className="close-form" onClick={() => dispatch(setOpen())}>
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

          {/* Submit button triggers form submission */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
