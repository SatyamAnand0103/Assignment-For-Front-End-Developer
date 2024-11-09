import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const productImage = require("../images/cart.png");
  return (
    <>
      {/* Header */}

      <div className="header">
        <h1>This is my Header !</h1>
      </div>

      {/* SliderBar */}
      <div className="sideBar">
        <h2 className="dashBoard"> DASHBOARD </h2>

        <p className="hyperLink">
          <span>
            {" "}
            <img src={productImage} alt="Product image" />
          </span>
          <Link to="/" id="link">
            {" "}
            Products
          </Link>
        </p>
      </div>
    </>
  );
};

export default Sidebar;
