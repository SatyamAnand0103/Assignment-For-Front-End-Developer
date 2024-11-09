import React, { createContext, useState } from "react";

// Create ProductContext
export const ProductContext = createContext();

// Create ProductProvider component
export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    category: "shoes",
    brand: "",
    options: [],
  });

  const [combinations, setCombinations] = useState([]);
  const [price, setPrice] = useState(""); // Add price state
  const [discount, setDiscount] = useState(""); // Add discount state
  const [discountType, setDiscountType] = useState("%"); // Add discount type state

  // Function to save combinations
  const saveCombinations = (newCombinations) => {
    setCombinations(newCombinations);
  };

  // Function to save price and discount information
  const savePriceInfo = (newPrice, newDiscount, newDiscountType) => {
    setPrice(newPrice);
    setDiscount(newDiscount);
    setDiscountType(newDiscountType);
  };

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        setProductDetails,
        combinations,
        saveCombinations,
        price,
        discount,
        discountType,
        savePriceInfo, // Expose savePriceInfo function
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
