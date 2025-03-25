import React from "react";
import Price from "../OrderBook/Price";
import "./ticker.css"
import { useTradeContext } from "../../contexts/TradeContext";
import { formatPrice } from "../../utilfunctions";

const Ticker = () => {
  const { lastPrice } = useTradeContext();
  return (
    <div className="ticker">
      <div className="ticker-wrapper">
        <div className="symbol-name-wrapper">
          <img src="./src/assets/Bitcoin.svg.png" className="icon"/>
          <span className="symbol-name">BTC/USDT</span>
        </div>
        <div className="price-wrapper">
          <span className="latest-price">{formatPrice(lastPrice)}</span>
          <span className="latest-fiat-price">59,400.34$</span>
        </div>
        <span className="rate-value">+4.22%</span>
        <div className="data-item">
          <span className="data-name">24H Volume</span>
          <span className="value">679.79 BTC</span>
        </div>
        <div className="data-item">
          <span className="data-name">24H High</span>
          <span className="value">62,021.01</span>
        </div>
        <div className="data-item">
          <span className="data-name">24H Low</span>
          <span className="value">43,814.44</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
