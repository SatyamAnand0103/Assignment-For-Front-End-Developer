import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import HzNavbar from "../Components/HzNavbar";

const Description = () => {
  const { productDetails, setProductDetails } = useContext(ProductContext);
  const [productName, setProductName] = useState(productDetails.productName);
  const [category, setCategory] = useState(productDetails.category || "shoes");
  const [brand, setBrand] = useState(productDetails.brand);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProductDetails({ productName, category, brand });
    console.log({ productName, category, brand, image });
  };

  const handleCancel = () => {
    setProductName("");
    setCategory("shoes");
    setBrand("");
    setImage(null);
    navigate("/");
  };

  const handleNext = () => {
    setProductDetails({ productName, category, brand });
    navigate("/variants");
  };

  return (
    <div className="container">
      <HzNavbar />
      <div className="twoButtons">
        <button type="button" className="btn_1" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" className="btn_2" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="boxForProductForm">
        <h4>Description</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="shoes">Shoes</option>
            <option value="bags">Bags</option>
            <option value="accessories">Accessories</option>
          </select>

          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <input type="file" id="imageUpload" onChange={handleImageUpload} />
        </form>
      </div>
    </div>
  );
};

export default Description;
