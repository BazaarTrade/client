import "./trade.css"
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable"
import TradeRow from "../ThreeColumnTable/TradeRow"
import Thead from "../ThreeColumnTable/Thead"

const Trade = () => {
  return (
    <div className='book-trade-container trade'>
      <h2>Trade</h2>  
      <div className="container">
        <div className="list">
          <Thead tableType="trade"></Thead>
          <ThreeColumnTable symbol={"BTC_USDT"}>
            <TradeRow isBid = {true} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {false} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
            <TradeRow isBid = {true} />
          </ThreeColumnTable>
        </div>
      </div>
    </div>
  )
}

export default Trade