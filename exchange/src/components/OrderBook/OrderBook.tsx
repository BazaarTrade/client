import "./orderbook.css";
import DropDown from "../Dropdown/DropDown";
import DropDownItem from "../Dropdown/DropDownItem";
import TrendBar from "../TrendBar/TrendBar";
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable";
import Thead from "../ThreeColumnTable/Thead";
import Price from "./Price";
import { useState } from "react";
import { OrderBookProvider, useOrderBookContext } from "../../contexts/OrderBookContext";

interface OrderBookProps {
  limit: number;
  fullLimit: number;
}

const OrderBook: React.FC<OrderBookProps> = ({ limit, fullLimit }) => {
  const [activeTab, setActiveTab] = useState<"both" | "bids" | "asks">("both");
  const {asksRows, bidsRows} = useOrderBookContext();

  return (
    <div className="book-trade-container orderbook">
      <h2>Order Book</h2>
      <div className="container">
        <div className="button-dropdown-box">
          <div className="button-box">
            <div
              className={`order-all-btn btn${
                activeTab === "both" ? "active" : ""
              }`}
              onClick={() => setActiveTab("both")}
            >
              <div className="right-icon"></div>
            </div>
            <div
              className={`order-buy-btn btn${
                activeTab === "bids" ? "active" : ""
              }`}
              onClick={() => setActiveTab("bids")}
            >
              <div className="right-icon"></div>
            </div>
            <div
              className={`order-sell-btn btn${
                activeTab === "asks" ? "active" : ""
              }`}
              onClick={() => setActiveTab("asks")}
            >
              <div className="right-icon"></div>
            </div>
          </div>
          <DropDown>
            <DropDownItem>0.00001</DropDownItem>
            <DropDownItem>0.00000001</DropDownItem>
            <DropDownItem>0.00000000001</DropDownItem>
          </DropDown>
        </div>
        <TrendBar />
        <OrderBookProvider>
        <div className="order-list">
          <Thead tableType="order"></Thead>
          <div className="orderbook-wrapper">
            <div className={activeTab === "bids" ? "hidden" : ""}>
              <ThreeColumnTable
                symbol={"BTC_USDT"}
                limit={activeTab === "asks" ? fullLimit : limit}
              >
                {asksRows}
              </ThreeColumnTable>
            </div>
            <Price></Price>
            <div className={activeTab === "asks" ? "hidden" : ""}>
              <ThreeColumnTable
                symbol={"BTC_USDT"}
                limit={activeTab === "bids" ? fullLimit : limit}
              >
                {bidsRows}
              </ThreeColumnTable>
            </div>
          </div>
        </div>
        </OrderBookProvider>
      </div>
    </div>
  );
};

export default OrderBook;
