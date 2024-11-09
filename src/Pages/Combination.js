import React, { useState, useContext } from "react";
import HzNavbar from "../Components/HzNavbar";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const Combination = () => {
  const initialCombinations = [
    { id: 1, sizeColor: "M/Black", sku: "ABC12", inStock: false, quantity: "" },
    { id: 2, sizeColor: "M/Red", sku: "SDF3", inStock: true, quantity: "5" },
    { id: 3, sizeColor: "L/Black", sku: "HWE2", inStock: false, quantity: "" },
    { id: 4, sizeColor: "L/Red", sku: "ABC12", inStock: true, quantity: "9" },
  ];

  const { saveCombinations } = useContext(ProductContext);
  const navigate = useNavigate();
  const [combinations, setCombinations] = useState(initialCombinations);

  const handleInputChange = (id, field, value) => {
    setCombinations((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const checkDuplicateSKU = (sku) => {
    const count = combinations.filter((item) => item.sku === sku).length;
    return count > 1;
  };

  const handleNext = () => {
    saveCombinations(combinations); // Save the combinations in the context
    navigate("/priceinfo"); // Navigate to the next page
  };

  return (
    <div className="container" id="container">
      <HzNavbar />

      <div className="twoButtons">
        <button
          type="button"
          className="btn_1"
          onClick={() => navigate("/variants")}
        >
          Back
        </button>
        <button type="button" className="btn_2" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="boxForProductForm">
        <h2>Combinations</h2>
        <div className="header">
          <span>Size/Color</span>
          <span>SKU *</span>
          <span>In stock</span>
          <span>Quantity</span>
        </div>
        {combinations.map(({ id, sizeColor, sku, inStock, quantity }) => (
          <div key={id} className="row">
            <span>{sizeColor}</span>
            <input
              type="text"
              value={sku}
              onChange={(e) => handleInputChange(id, "sku", e.target.value)}
              className={`input ${checkDuplicateSKU(sku) ? "duplicate" : ""}`}
            />
            {checkDuplicateSKU(sku) && (
              <span className="duplicate-warning">Duplicate SKU</span>
            )}
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) =>
                handleInputChange(id, "inStock", e.target.checked)
              }
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                handleInputChange(id, "quantity", e.target.value)
              }
              className="quantity-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combination;
