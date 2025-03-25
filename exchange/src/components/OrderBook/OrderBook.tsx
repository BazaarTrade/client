import "./orderbook.css";
import DropDown from "../Dropdown/DropDown";
import DropDownItem from "../Dropdown/DropDownItem";
import TrendBar from "../TrendBar/TrendBar";
import ThreeColumnTable from "../ThreeColumnTable/ThreeColumnTable";
import Thead from "../ThreeColumnTable/Thead";
import Price from "./Price";
import { Key, useEffect, useState } from "react";
import { OrderBookProvider, useOrderBookContext } from "../../contexts/OrderBookContext";
import { usePrecisionContext } from "../../contexts/PrecisionContext";

interface OrderBookProps {
  limit: number;
  fullLimit: number;
}

const OrderBook: React.FC<OrderBookProps> = ({ limit, fullLimit }) => {
  const [activeTab, setActiveTab] = useState<"both" | "bids" | "asks">("both");
  const {asksRows, bidsRows} = useOrderBookContext();
  const [listHeight, setListHeight] = useState<string>("200px");
  const [orderListHeight, setOrderListHeight] = useState<string>("450px");
  const {precision, getPrecisions, transformPrecision, setCurrentPrecision, currentPrecision} = usePrecisionContext();

  useEffect(() => {
    if (fullLimit == 30) {
      setListHeight("300px");
      setOrderListHeight("700px");
    }

    getPrecisions();
    console.log(precision); 
    console.log(typeof precision); 
         

  }, [])

  return (
    <div className="book-trade-container orderbook">
      <div className="">
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
            {precision ? (precision.map((item: number, index: number) => (
              <DropDownItem key={index} value={transformPrecision(item)} index={item}></DropDownItem>
            ))) : null}
          </DropDown>
        </div>
        <TrendBar />
        <OrderBookProvider>
        <div className="order-list" style={{height: orderListHeight}}>
          <Thead tableType="order"></Thead>
          <div className="orderbook-wrapper">
  {(() => {
    let asksClass = "";
    let bidsClass = "";
    let height = "";
    
    switch (activeTab) {
      case "bids":
        asksClass = "hidden";
        bidsClass = "display-full-bids";
        height = "auto";
        break;
      case "asks":
        asksClass = "display-full-asks"; 
        bidsClass = "hidden";
        height = "auto";
        break;
      default:
        asksClass = "display-both-asks";
        bidsClass = "display-both-bids";
        height = listHeight;
    }
    return (
      <>
        <div className={asksClass} style={{height: height}}>
          <ThreeColumnTable
            symbol={"BTC_USDT"}
            limit={activeTab === "asks" ? fullLimit : limit}
          >
            {asksRows}
          </ThreeColumnTable>
        </div>
        <Price />
        <div className={bidsClass} style={{height: height}}>
          <ThreeColumnTable
            symbol={"BTC_USDT"}
            limit={activeTab === "bids" ? fullLimit : limit}
          >
            {bidsRows}
          </ThreeColumnTable>
        </div>
      </>
    );
  })()}
</div>

        </div>
        </OrderBookProvider>
      </div>
    </div>
  );
};

export default OrderBook;
