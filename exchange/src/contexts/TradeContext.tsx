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
};

const TradeContext = createContext<TradeContextType>(
  {} as TradeContextType
);
type ContextType = PropsWithChildren<{}>;

export const TradeProvider = ({ children }: ContextType) => {
  const { trades } = useWebSocketContext();
  const [tradeList, setTradeList] = useState<TradeRow[]>([]);

useEffect(() => {
  console.log("Trade trigger");
  if (trades && trades.params && trades.params.trades) {
    const tradeArray = trades.params.trades;
    setTradeList((prevTradeList) => [...tradeArray, ...prevTradeList]);
  }
}, [trades]);

useEffect(() => {
  console.log("TradeList changed", tradeList);
}, [tradeList])

  return (
    <TradeContext.Provider value={{ tradeList }}>
      {children}
    </TradeContext.Provider>
  );
};

export const useTradeContext = () => useContext(TradeContext);
