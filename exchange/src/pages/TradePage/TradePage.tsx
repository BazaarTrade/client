import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import OrderBook from '../../components/OrderBook/OrderBook'
import OrderPanel from '../../components/OrderPanel/OrderPanel'
import "./tradepage.css"
import Ticker from '../../components/Ticker/Ticker'
import Orders from '../../components/Orders/Orders'
import AssetsPanel from '../../components/AssetsPanel/AssetsPanel'
import { useWebSocketContext } from '../../contexts/wscontext'
import { OrderBookProvider } from '../../contexts/OrderBookContext'
import { OrderPanelProvider } from '../../contexts/OrderPanelContext'
import { TradeProvider } from '../../contexts/TradeContext'
import Trade from '../../components/Trade/Trade'
import Tabs from '../../components/MultiTab/MultiTab'


const TradePage = () => {
  const {sendMessage, connectionStatus} = useWebSocketContext();

  useEffect(() => {
    console.log("Subscribing...");
    if (connectionStatus === 1) {
      const ob_subscription = {
        action: "subscribe",
        topic: "orderBook",
        params: {
          pair: "BTC_USDT",
          precision: -1
        }
      }

      const trade_subscription = {
        action: "subscribe",
        topic: "trades",
        params: {
          pair: "BTC_USDT",
          precision: -1
        }
      }
      sendMessage(ob_subscription);
      sendMessage(trade_subscription);
      console.log("subscribed");
    }
  }, [connectionStatus]);

  return (
    <div className='trade-page' >
        <Header></Header>
        <TradeProvider>
          <OrderBookProvider>
          <div className="trade-page-layout">
            <div className="item name"><Ticker></Ticker></div>
            <div className="item chart"></div>
            <div className="item chart"><img src='./src/assets/chart.jpg'/></div>
            {/* <div className="item chart"><img src='./src/assets/chart_light.jpg'/></div> */}
            <div className="item orderbook-area">
           
                <Tabs tabNames={["Order Book", "Trades"]}>
                  <OrderBook limit={9} fullLimit={18}/>
                  <Trade limit={24}></Trade>
                </Tabs>
              
              </div>
            <div className="item order-panel"><OrderPanelProvider><OrderPanel/></OrderPanelProvider></div>
            <div className="item order-tabs"><Orders></Orders></div>
            <div className="item assets"><AssetsPanel></AssetsPanel></div>
        </div>
          </OrderBookProvider>
        </TradeProvider>
        
    </div>
  )
}

export default TradePage