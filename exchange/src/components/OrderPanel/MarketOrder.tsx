import React from "react";
import AmountInput from "./AmountInput";

const MarketOrder = () => {
  return (
    <div>
      <div className="item value-space-between availiable-amount">
        <span className="label">Availiable balance</span>
        <span className="amount">10000 USDT</span>
      </div>
      <div className="item amount-input-wrapper">
        <AmountInput></AmountInput>
        <div className="value-space-between est-fee">
          <span className="label">Est. Trading Fee</span>
          <span className="amount">0.000 BTC</span>
        </div>
        <button className="primary-btn black buysell-spot-button">
          Buy BTC
        </button>
      </div>
    </div>
  );
};

export default MarketOrder;
