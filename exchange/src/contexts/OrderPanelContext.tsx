import {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
  } from "react";

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

    const placeOrder = async (userID: number, isBuy: boolean, symbol: string, amount: number, price: number, type: string) => {
      try {
        const order = {
                  userID: userID,
                  isBid: isBuy,
                  pair: symbol,
                  qty: amount.toString(),
                  price: price.toString(),
                  type: type
              }
              console.log(order);
        await fetch(`${ENDPOINT}/order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });
      } catch (error) {
        console.error("Error adding task:", error);
      }
    };

    return (
      <OrderPanelContext.Provider value={{isBuy, setIsBuy, placeOrder}}>
          {children}
      </OrderPanelContext.Provider>
    )
  };
  
  export const useOrderPanelContext = () => useContext(OrderPanelContext);