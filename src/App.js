import React from "react";
import "./index.css"; // Ensure the path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Contents from "./Pages/Contents";
import Variants from "./Pages/Variants";
import Combination from "./Pages/Combination";
import PriceInfo from "./Pages/PriceInfo";
import Description from "./Pages/Description";
import { ProductProvider } from "./Pages/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/description" element={<Description />} />
          <Route path="/variants" element={<Variants />} />
          <Route path="/combination" element={<Combination />} />
          <Route path="/priceinfo" element={<PriceInfo />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
