import React, { useState, useEffect } from "react";
import "./threecolumntable.css";
import { useOrderBookContext } from "../../contexts/OrderBookContext";

interface OrderRowProps {
  isBid: boolean;
  price: number;
  volume: number;
  total: number;
  runningTotal: number;
}

const OrderRow: React.FC<OrderRowProps> = ({ isBid, price, volume, total, runningTotal }) => {
  const backgroundClass = isBid ? "var(--bid-volume-color)" : "var(--ask-volume-color)";
  const [widthPercentage, setWidthPercentage] = useState<number>(0);
  const { runningAsksTotal, runningBidsTotal } = useOrderBookContext();

  useEffect(() => {
    const totalForCalculation = isBid ? runningBidsTotal : runningAsksTotal;
    const percentage = (runningTotal / totalForCalculation) * 100;
    setWidthPercentage(percentage);
  }, [isBid, runningTotal, runningAsksTotal, runningBidsTotal]);

  return (
    <tr
      className="orderrow"
      style={
        {
          "--volume-bar-width": `${widthPercentage}%`,
          "--volume-bar-color": `${backgroundClass}`,
        } as React.CSSProperties
      }
    >
      <td className={isBid ? "first-column green" : "first-column red"}>{price.toFixed(1)}</td>
      <td className="second-column">{volume.toFixed(5)}</td>
      <td className="third-column">{total}</td>
    </tr>
  );
};

export default OrderRow;


