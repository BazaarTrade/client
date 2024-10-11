import React from "react";
import "../orders.css";
import OpenOrderRow from "./OpenOrderRow";

const OpenOrders = () => {
  return (
    <div className="open-orders">
      <table>
        <thead>
          <tr>
            <th className="cell">Time</th>
            <th className="cell">Pair</th>
            <th className="cell">Type</th>
            <th className="cell">Side</th>
            <th className="cell">Price</th>
            <th className="cell">Filled Amount</th>
            <th className="cell">Order Value</th>
            <th className="cell">Operation</th>
          </tr>
        </thead>
        <tbody>
          <OpenOrderRow />
          <OpenOrderRow />
          <OpenOrderRow />
          <OpenOrderRow />
          <OpenOrderRow />
          <OpenOrderRow />
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrders;
