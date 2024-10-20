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

const TradePage = () => {
  const {sendMessage, connectionStatus} = useWebSocketContext();

  useEffect(() => {
    console.log("Subscribing...");
    if (connectionStatus === 1) {
      const subscription = {
        action: "subscribe",
        topic: "orderBook",
        params: {
          symbol: "BTC_USDT",
          precision: -1
        }
      }
      sendMessage(subscription);
      console.log("subscribed");
    }
  }, [connectionStatus]);

  return (
    <div className='trade-page' >
        <Header></Header>
        <div className="trade-page-layout">
            <div className="item name"><Ticker></Ticker></div>
            <div className="item chart"></div>
            {/* <div className="item chart"><img src='./src/assets/chart.jpg'/></div> */}
            {/* <div className="item chart"><img src='./src/assets/chart_light.jpg'/></div> */}
            <div className="item orderbook"><OrderBookProvider><OrderBook limit={10} fullLimit={20}/></OrderBookProvider></div>
            <div className="item order-panel"><OrderPanelProvider><OrderPanel/></OrderPanelProvider></div>
            <div className="item order-tabs"><Orders></Orders></div>
            <div className="item assets"><AssetsPanel></AssetsPanel></div>
        </div>
    </div>
  )
}

export default TradePage