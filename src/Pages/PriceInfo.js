import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import HzNavbar from "../Components/HzNavbar";

const PriceInfo = () => {
  const { savePriceInfo } = useContext(ProductContext); // Get the function from context
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState("%");
  const navigate = useNavigate();

  const handleDiscountTypeChange = (type) => {
    setDiscountType(type);
  };

  const handleConfirm = () => {
    savePriceInfo(price, discount, discountType); // Save the data in context
    navigate("/contents"); // Navigate to the contents page
  };

  return (
    <div className="container" id="container">
      <HzNavbar />
      <div className="twoButtons">
        <button
          type="button"
          className="btn_1"
          onClick={() => navigate("/combination")}
        >
          Back
        </button>
        <button type="button" className="btn_2" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
      <div className="boxForProductForm">
        <h2>Price Info</h2>
        <div className="input-group">
          <label htmlFor="price">Price *</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="₹ 12000"
          />
        </div>
        <div className="input-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="text"
            id="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="12"
          />
          <div className="discount-type-buttons">
            <button
              className={`discount-type-btn ${
                discountType === "%" ? "active" : ""
              }`}
              onClick={() => handleDiscountTypeChange("%")}
            >
              %
            </button>
            <button
              className={`discount-type-btn ${
                discountType === "$" ? "active" : ""
              }`}
              onClick={() => handleDiscountTypeChange("$")}
            >
              $
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
