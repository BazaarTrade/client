import "./orderbook.css"
import DropDown from "../Dropdown/DropDown"
import DropDownItem from "../Dropdown/DropDownItem"
import TrendBar from "../TrendBar/TrendBar"
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable"
import Thead from "../ThreeColumnTable/Thead"
import OrderRow from "../ThreeColumnTable/OrderRow"
import Price from "./Price"
import { useState } from "react"

interface OrderBookProps {
  limit: number;
  fullLimit: number;
}

const OrderBook: React.FC<OrderBookProps> = ({limit, fullLimit}) => {
  const [activeTab, setActiveTab] = useState<"both" | "bids" | "asks">("both");
  return (
    <div className='book-trade-container orderbook'>
      <h2>Order Book</h2>
      <div className="container">
        <div className="button-dropdown-box">
          <div className="button-box">
           <div className={`order-all-btn btn${activeTab === "both" ? "active" : ""}` } onClick={() => setActiveTab("both")}>
              <div className="right-icon"></div>
            </div> 
            <div className={`order-buy-btn btn${activeTab === "bids" ? "active" : ""}` } onClick={() => setActiveTab("bids")}>
              <div className="right-icon"></div>
            </div>
            <div className={`order-sell-btn btn${activeTab === "asks" ? "active" : ""}` } onClick={() => setActiveTab("asks")}>
              <div className="right-icon"></div>
            </div>
          </div>
          <DropDown>
            <DropDownItem>0.00001</DropDownItem>
            <DropDownItem>0.00000001</DropDownItem>
            <DropDownItem>0.00000000001</DropDownItem>
          </DropDown>
        </div> 
        <TrendBar/>
        <div className="order-list">
        <Thead tableType="order"></Thead>
          <div className={activeTab === "bids" ? "hidden" : ""}> 
            <ThreeColumnTable symbol={"BTC_USDT"} limit={activeTab === "asks" ? fullLimit : limit}>
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
              <OrderRow isBid={false} price={59400.5} volume={0.98} total="40K" />
              <OrderRow isBid={false} price={59400.5} volume={0.98} total="30K" />
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
          </div>
          <Price></Price>
          <div className={activeTab === "asks" ? "hidden" : ""}>
            <ThreeColumnTable symbol={"BTC_USDT"} limit={activeTab === "bids" ? fullLimit : limit}>
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
    </div>  
  )
}

export default OrderBook