import "./trade.css";
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable";
import TradeRow from "../ThreeColumnTable/TradeRow";
import Thead from "../ThreeColumnTable/Thead";
import { useTradeContext } from "../../contexts/TradeContext";

interface TradeProps {
  limit: number;
}

const Trade: React.FC<TradeProps> = ({limit}) => {
  const { tradeList } = useTradeContext();

  return (
    <div className='book-trade-container trade'>
      <div className="">
        <div className="list">
          <Thead tableType="trade"></Thead>
          <ThreeColumnTable symbol={"BTC_USDT"} limit={limit}>
            {tradeList ? (
              tradeList.map((trade, index) => (
                <TradeRow 
                  key={index} 
                  isBid={trade.isBid} 
                  price={trade.price} 
                  time={trade.time} 
                  qty={trade.qty} 
                />
              ))
            ) : (
              ""
            )}
          </ThreeColumnTable>
        </div>
      </div>
    </div>
  );
}

export default Trade;
