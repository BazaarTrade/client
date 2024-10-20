import React, { useState } from "react";
import "./BuySellButton.css";
import { useOrderPanelContext } from "../../contexts/OrderPanelContext";


const BuySellButtons = () => {
  const [activeButton, setActiveButton] = useState("buy"); 
  const {setIsBuy} = useOrderPanelContext();

  return (
    <div className="button-container">
      <button
        className={`buy primary-btn ${activeButton === "buy" ? "active" : ""}`}
        onClick={() => {
          setActiveButton("buy");
          setIsBuy(true);
        }}
      >
        Buy
      </button>
      <button
        className={`sell primary-btn ${activeButton === "sell" ? "active" : ""}`}
        onClick={() => {
          setActiveButton("sell");
          setIsBuy(false);
        }}
      >
        Sell
      </button>
    </div>
  );
};

export default BuySellButtons;
