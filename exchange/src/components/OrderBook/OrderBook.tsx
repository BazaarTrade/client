import "./orderbook.css"
import DropDown from "../Dropdown/DropDown"
import DropDownItem from "../Dropdown/DropDownItem"
import TrendBar from "../TrendBar/TrendBar"
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable"
import OrderRow from "../ThreeColumnTable/OrderRow"
import Price from "./Price"

const OrderBook = () => {
  return (
    <div className='book-trade-container orderbook'>
      <h2>Order Book</h2>
      <div className="container">
        <div className="button-dropdown-box">
          <div className="button-box">
            <button style={{ border: 'none', background: 'none', height: "20px" }}> <img src="../src/assets/all.png" className="chart-button"/></button>
            <button style={{ border: 'none', background: 'none', height: "20px" }}> <img src="../src/assets/asks.png" className="chart-button"/> </button>
            <button style={{ border: 'none', background: 'none', height: "20px" }}> <img src="../src/assets/bids.png" className="chart-button"/></button>
          </div>
          <DropDown>
            <DropDownItem>0.00001</DropDownItem>
            <DropDownItem>0.00000001</DropDownItem>
            <DropDownItem>0.00000000001</DropDownItem>
          </DropDown>
        </div> 
        <TrendBar/>
        <div className="order-list">
          <ThreeColumnTable symbol={"BTC_USDT"} tableType={"order"}>
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
          </ThreeColumnTable>
          <Price></Price>
          <ThreeColumnTable symbol={"BTC_USDT"} tableType={"order"} className="has-no-thead">
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
            <OrderRow isBid={true} price={59400.5} volume={0.98} total="40K" />
          </ThreeColumnTable>
        </div>
        </div>
    </div>  
  )
}

export default OrderBook