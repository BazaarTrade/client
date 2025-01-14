import {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
  } from "react";
import { useOrderContext } from "./OrdersContext";
import { OrderRowType } from "../components/Orders/OpenOrders/OpenOrderRow";


  type OrderPanelContextType = {
    isBuy: boolean
    setIsBuy: Function;
    placeOrder: Function;
  };
  
  const OrderPanelContext = createContext<OrderPanelContextType>(
    {} as OrderPanelContextType
  );
  type ContextType = PropsWithChildren<{}>;

  const ENDPOINT = "http://localhost:8080";
  
  export const OrderPanelProvider = ({ children }: ContextType) => {
    const [isBuy, setIsBuy] = useState(true);
    const {openOrders, setOpenOrders, setClosedOrders} = useOrderContext();

    const orderDistributor = (orderType: string, responseData: Response) => {
      if (orderType == "limit") {
        setOpenOrders((prevOpenOrders: OrderRowType[]) => [responseData, ...prevOpenOrders]);
      }
      if (orderType == "market") {
        setClosedOrders((prevClosedOrders: OrderRowType[]) => [responseData, ...prevClosedOrders])
      }
    }

    const placeOrder = async (
      userID: number, 
      isBuy: boolean, 
      symbol: string, 
      amount: number, 
      price: number, 
      type: string
    ) => {
      try {
        const order = {
          userID: userID,
          isBid: isBuy,
          pair: symbol,
          qty: amount.toString(),
          price: price.toString(),
          type: type,
        };
        console.log("Order:", order);
    
        const response = await fetch(`${ENDPOINT}/order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log("Response Data:", responseData);
      
        orderDistributor(order.type, responseData)
        
    
      } catch (error) {
        console.error("Error placing order:", error);
      }
    };
    
    return (
      <OrderPanelContext.Provider value={{isBuy, setIsBuy, placeOrder}}>
          {children}
      </OrderPanelContext.Provider>
    )
  };
  
  export const useOrderPanelContext = () => useContext(OrderPanelContext);