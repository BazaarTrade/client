import "../orders.css";
import OpenOrderRow from "./OpenOrderRow";
import { useOrderContext } from "../../../contexts/OrdersContext";

const OpenOrders = () => {
  const { openOrders } = useOrderContext();
  

  // useEffect(() => {}, [updatedOrder])
  
  return (
    <div className="open-orders orders">
      {openOrders && openOrders.length > 0 ? (
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
            {openOrders.map((order) => (
              <OpenOrderRow key={order.orderID} {...order} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-records-found">No records found</p>
      )}
    </div>
  );
};

export default OpenOrders;
