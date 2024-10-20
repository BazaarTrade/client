import React, { useState } from "react";
import AmountInput from "./AmountInput";
import BuyCryptoButton from "./BuyCryptoButton";
import { useWebSocketContext } from "../../contexts/wscontext";
import { useOrderPanelContext } from "../../contexts/OrderPanelContext";

const MarketOrder = () => {
    const [value, setValue] = useState<number>(0); 
    const [amount, setAmount] = useState<number>();
    const [total, setTotal] = useState<number>();
    const [price, setPrice] = useState<number>(0.07);
    const {placeOrder, isBuy} = useOrderPanelContext();
  return (
    <div>
      <div className="item value-space-between availiable-amount">
        <span className="label">Availiable balance</span>
        <span className="amount">10000 USDT</span>
      </div>
      <div className="item amount-input-wrapper">
        <AmountInput value={value} setValue={setValue} amount={amount} setAmount={setAmount} total={total} setTotal={setTotal} price={price} ></AmountInput>
        <div className="value-space-between est-fee">
          <span className="label">Est. Trading Fee</span>
          <span className="amount">0.000 BTC</span>
        </div>
       <BuyCryptoButton onClick={()=> placeOrder(1, isBuy, "BTC_USDT", amount, price, "market")}/>
      </div>
    </div>
  );
};

export default MarketOrder;
