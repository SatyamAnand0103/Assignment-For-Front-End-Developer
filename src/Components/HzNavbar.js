import React from "react";
import { Link, useLocation } from "react-router-dom";
const HzNavbar = () => {
  // Define pages with paths in order
  const pages = ["/add-product", "/variants", "/combination", "/priceinfo"];

  // Get current pathname from location
  const location = useLocation();
  const currentPathIndex = pages.indexOf(location.pathname);

  // "Next" and "Previous" button click handlers
  const handleNext = () => {
    if (currentPathIndex < pages.length - 1) {
      window.location.href = pages[currentPathIndex + 1];
    }
  };

  const handlePrev = () => {
    if (currentPathIndex > 0) {
      window.location.href = pages[currentPathIndex - 1];
    }
  };
  return (
    <>
      <div className="contentsAtTop">
        <p id="heading">Add Products</p>
      </div>
      <div className="navigateInProducts">
        <Link to="/description">Description </Link>
        <Link to="/variants">Variants</Link>
        <Link to="/combination">Combination</Link>
        <Link to="/priceinfo">Price Info</Link>
      </div>
    </>
  );
};

export default HzNavbar;
