import React, { useState } from "react";
import "./BuySellButton.css";

const BuySellButtons = () => {
  const [activeButton, setActiveButton] = useState("buy"); 

  return (
    <div className="button-container">
      <button
        className={`buy primary-btn ${activeButton === "buy" ? "active" : ""}`}
        onClick={() => setActiveButton("buy")}
      >
        Buy
      </button>
      <button
        className={`sell primary-btn ${activeButton === "sell" ? "active" : ""}`}
        onClick={() => setActiveButton("sell")}
      >
        Sell
      </button>
    </div>
  );
};

export default BuySellButtons;
