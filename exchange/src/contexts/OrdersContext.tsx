import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { OrderRowType } from "../components/Orders/OpenOrders/OpenOrderRow";
import { useWebSocketContext } from "./wscontext";

type OrderContextType = {
  openOrders: OrderRowType[] | undefined;
  setOpenOrders: Function;
  closedOrders: OrderRowType[] | undefined;
  setClosedOrders: Function;
  closeOrder: Function;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);
type ContextType = PropsWithChildren<{}>;

export const OrdersProvider = ({ children }: ContextType) => {
  const [openOrders, setOpenOrders] = useState<OrderRowType[]>([]);
  const [closedOrders, setClosedOrders] = useState<OrderRowType[]>([]);
  const { updatedTrade } = useWebSocketContext();

  useEffect(() => {
    if (updatedTrade?.status === "filling") {
      console.log("updating the order", updatedTrade.orderID);
      setOpenOrders((prevOpenOrders) =>
        prevOpenOrders.map((order) => {
          console.log(order.orderID);
          if (order.orderID === updatedTrade.orderID) {
            console.log("Found matching order:", { ...order, ...updatedTrade });
            return { ...order, ...updatedTrade };
          }
          return order;
        })
      );
    }
    if (updatedTrade?.status === "filled") {
      setOpenOrders((prevOpenOrders) =>
        prevOpenOrders.filter((order) => order.orderID !== updatedTrade.orderID)
      );
      setClosedOrders((prevClosedOrders: OrderRowType[]) => [
        updatedTrade,
        ...prevClosedOrders,
      ]);
    }
  }, [updatedTrade]);

  const closeOrder = (orderID: string) => {
    setOpenOrders((prevOpenOrders) =>
      prevOpenOrders.filter((order) => order.orderID !== Number(orderID))
    );
    setClosedOrders((prevClosedOrders: OrderRowType[]) => [
      ...prevClosedOrders,
      openOrders.filter((order) => order.orderID === Number(orderID))[0],
    ]);
  };

  return (
    <OrderContext.Provider
      value={{ openOrders, setOpenOrders, closedOrders, setClosedOrders, closeOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
