import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import an arrow icon
import "./BackButton.css"; // Style file

const BackButton = () => {
  const navigate = useNavigate();
  console.log("BackButton is rendering!");

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <FaArrowLeft className="back-icon" /> Back
    </button>
  );
};

export default BackButton;
