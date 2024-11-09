import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const Contents = () => {
  const { productDetails, price, discount, discountType } = useContext(ProductContext);
  const [showCategoryBox, setShowCategoryBox] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategory = () => setShowCategoryBox(true);

  const closePopup = () => {
    setShowCategoryBox(false);
    setCategoryName("");
  };

  const handleProduct = () => navigate("/description");

  const save = () => {
    if (categoryName.trim()) {
      const newCategory = {
        name: categoryName.trim(),
        productName: productDetails.productName,
        brand: productDetails.brand,
        price: price,
        discount: discount,
        discountType: discountType
      };
      setCategories([...categories, newCategory]);
      closePopup();
    }
  };

  return (
    <div className="container">
      <div className="twoButtons">
        <button type="button" className="btn_1" onClick={handleCategory}>
          Add Category
        </button>
        <button type="button" className="btn_2" onClick={handleProduct}>
          Add Product
        </button>
      </div>

      <div className="contentsAtTop">
        <p>Products</p>
      </div>

      {showCategoryBox && (
        <div className="boxForCategory">
          <h3>Add Category</h3>
          <p>Category Name:</p>

          <input
            type="text"
            id="inputForCategory"
            placeholder="Enter Category"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <div className="popButtons">
            <button type="button" id="cancel" onClick={closePopup}>
              Cancel
            </button>
            <button type="button" id="save" onClick={save}>
              Save
            </button>
          </div>
        </div>
      )}

      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <h4>{category.name.toUpperCase()}</h4>
            {category.productName && <p>Product: {category.productName}</p>}
            {category.brand && <p>Brand: {category.brand}</p>}
            {category.price && <p>Price: ₹ {category.price}</p>}
            {category.discount && (
              <p>
                Discount: {category.discount} {category.discountType}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
