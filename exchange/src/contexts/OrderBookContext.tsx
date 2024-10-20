import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWebSocketContext } from "./wscontext";
import OrderRow from "../components/ThreeColumnTable/OrderRow";
import EmptyRow from "../components/ThreeColumnTable/EmptyRow";

type OrderBookContextType = {
  runningAsksTotal: number;
  runningBidsTotal: number;
  asksRows: ReactNode[];
  bidsRows: ReactNode[];
};

const OrderBookContext = createContext<OrderBookContextType>(
  {} as OrderBookContextType
);
type ContextType = PropsWithChildren<{}>;

export const OrderBookProvider = ({ children }: ContextType) => {
  const { orderBook } = useWebSocketContext();
  const emptyRows = Array.from({ length: 30 }, () => <EmptyRow />);
  const [runningAsksTotal, setRunningAsksTotal] = useState(0);
  const [runningBidsTotal, setRunningBidsTotal] = useState(0);
  const [bidsRows, setBidRows] = useState<JSX.Element[]>([]);
  const [asksRows, setAsksRows] = useState<JSX.Element[]>([]);

  

  useEffect(() => {
    if (!orderBook) return;

    let runningTotal = 0;

    const mapOrderRows = (orders: any[] | null, isBid: boolean) => {
        const mappedRows = orders?.map((orderRow) => {
          const price = parseFloat(orderRow.price);
          const volume = parseFloat(orderRow.qty);
          const total = price * volume;
          runningTotal += total;
      
          return (
            <OrderRow
              key={orderRow.price}
              isBid={isBid}
              price={price}
              volume={volume}
              total={total}
              runningTotal={runningTotal}
            />
          );
        }) || []; 
      
        return isBid ? mappedRows : mappedRows.reverse();
      };
      
    const mappedAsksRows = mapOrderRows(orderBook.params.asks, false);
    setAsksRows(mappedAsksRows);
    setRunningAsksTotal(runningTotal);
    runningTotal = 0;
    const mappedBidsRows = mapOrderRows(orderBook.params.bids, true);
    setBidRows(mappedBidsRows);
    setRunningBidsTotal(runningTotal);
  }, [orderBook]);

  return (
    <OrderBookContext.Provider value={{runningAsksTotal, runningBidsTotal, asksRows, bidsRows}}>
        {children}
    </OrderBookContext.Provider>
  )
};

export const useOrderBookContext = () => useContext(OrderBookContext);
