import React from 'react';
import { useOrderContext } from '../../../contexts/OrdersContext';

  export interface OrderRowType {
    orderID: number,
    userID: number,
    isBid: string,
    pair: string,
    price: string,
    qty: string,
    sizeFilled: string,
    status: string,
    type: string,
    createdAt: string,
    closedAt: string
  }

const OpenOrderRow: React.FC<OrderRowType> = ({isBid, createdAt, pair, type, price, qty, sizeFilled, orderID }) => {
  const side = (isBid ? "Buy" : "Sell");
  const orderValue = parseInt(qty) * parseInt(price);
  const ENDPOINT = "http://localhost:8080";
  const {closeOrder} = useOrderContext();

  const cancelOrder = async (id: number) => {
    try {
      const response = await fetch(`${ENDPOINT}/order/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log("Response Data:", responseData);
      closeOrder(id);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  }; 

  return (
    <tr className='open-order-row'>
      <td className='cell'>{createdAt}</td>
      <td className='cell'>{pair}</td>
      <td className='cell'>{type}</td>
      <td className={side == 'Buy' ? 'cell green' : 'cell red'}>{side}</td>
      <td className='cell'>{price}</td>
      <td className='cell'>{sizeFilled}/{qty}</td>
      <td className='cell'>{orderValue}</td>
      <td className='cell underlined' onClick={() => {cancelOrder(orderID)}}>Close</td>
    </tr>
  );
}

export default OpenOrderRow


