import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import OrderBook from "../../components/OrderBook/OrderBook";
import OrderPanel from "../../components/OrderPanel/OrderPanel";
import "./tradepage.css";
import Ticker from "../../components/Ticker/Ticker";
import Orders from "../../components/Orders/Orders";
import AssetsPanel from "../../components/AssetsPanel/AssetsPanel";
import { useWebSocketContext } from "../../contexts/wscontext";
import { OrderBookProvider } from "../../contexts/OrderBookContext";
import { OrderPanelProvider } from "../../contexts/OrderPanelContext";
import { TradeProvider } from "../../contexts/TradeContext";
import Trade from "../../components/Trade/Trade";
import Tabs from "../../components/MultiTab/MultiTab";
import { OrdersProvider } from "../../contexts/OrdersContext";
import { PrecisionProvider } from "../../contexts/PrecisionContext";
import Chart from "../../components/Chart/Chart";
import { ChartProvider, useChartContext } from "../../contexts/ChartContext";
import InfiniteCanvas from "../../components/Chart/InfiniteCoordinateSystem";

const TradePage = () => {
  const { sendMessage, connectionStatus } = useWebSocketContext();

  useEffect(() => {
    console.log("Subscribing...");
    if (connectionStatus === 1) {
      const ob_subscription = {
        action: "subscribe",
        topic: "orderBook",
        params: {
          pair: "BTC_USDT",
          precision: 0,
        },
      };

      const trade_subscription = {
        action: "subscribe",
        topic: "trades",
        params: {
          pair: "BTC_USDT",
        },
      };

      const chart_subscription = {
        action: "subscribe",
        topic: "candleStick",
        params: {
          pair: "BTC_USDT",
          timeframe: "1m",
        },
      };

      sendMessage(ob_subscription);
      sendMessage(trade_subscription);
      sendMessage(chart_subscription);
      console.log("subscribed");
    }
  }, [connectionStatus]);

  const sampleData = [
    { time: 1, open: 80, high: 90, low: 75, close: 85 },
    { time: 2, open: 85, high: 95, low: 80, close: 92 },
    { time: 3, open: 92, high: 98, low: 88, close: 90 },
    { time: 4, open: 90, high: 96, low: 85, close: 87 },
    { time: 5, open: 87, high: 140, low: 70, close: 90 },
  ];

  return (
    <div className="trade-page">
      <Header></Header>
      <TradeProvider>
        <OrderBookProvider>
          <OrdersProvider>
            <PrecisionProvider>
              <div className="trade-page-layout">
                <div className="item name">
                  <Ticker></Ticker>
                </div>
                <ChartProvider>
                  <div className="item chart"><Chart/></div>
                </ChartProvider>
                {/* <div className="item chart"><InfiniteCanvas></InfiniteCanvas></div> */}
                

                {/* <div className="item chart"><img src='./src/assets/chart_light.jpg'/></div> */}
                <div className="item orderbook-area">
                  <Tabs tabNames={["Order Book", "Trades"]}>
                    <OrderBook limit={9} fullLimit={18} />
                    <Trade limit={24}></Trade>
                  </Tabs>
                </div>
                <div className="item order-panel">
                  <OrderPanelProvider>
                    <OrderPanel />
                  </OrderPanelProvider>
                </div>
                <div className="item order-tabs">
                  <Orders></Orders>
                </div>
                <div className="item assets">
                  <AssetsPanel></AssetsPanel>
                </div>
              </div>
            </PrecisionProvider>
          </OrdersProvider>
        </OrderBookProvider>
      </TradeProvider>
    </div>
  );
};

export default TradePage;
