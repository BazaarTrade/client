import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWebSocketContext } from "./wscontext";
import TradeRow from "../components/ThreeColumnTable/TradeRow";

type TradeContextType = {
  tradeList: TradeRow[] | undefined;
  lastPrice: string;
};

const TradeContext = createContext<TradeContextType>(
  {} as TradeContextType
);
type ContextType = PropsWithChildren<{}>;

export const TradeProvider = ({ children }: ContextType) => {
  const { trades } = useWebSocketContext();
  const [tradeList, setTradeList] = useState<TradeRow[]>([]);
  const [lastPrice, setLastPrice] = useState<string>("0");


useEffect(() => {
  if (trades && trades.params && trades.params) {
    const tradeArray = trades.params;
    setTradeList((prevTradeList) => [...tradeArray, ...prevTradeList]);
    setLastPrice(tradeArray[0].price);
  }
}, [trades]);




  return (
    <TradeContext.Provider value={{ tradeList, lastPrice }}>
      {children}
    </TradeContext.Provider>
  );
};

export const useTradeContext = () => useContext(TradeContext);
