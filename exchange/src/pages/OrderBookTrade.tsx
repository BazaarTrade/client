import OrderBook from '../components/OrderBook/OrderBook'
import Trade from '../components/Trade/Trade'
import "./orderbooktrade.css"
import Header from '../components/Header/Header'
import { OrderBookProvider } from '../contexts/OrderBookContext'
import { TradeProvider } from '../contexts/TradeContext'
import { useEffect } from 'react'
import { useWebSocketContext } from '../contexts/wscontext'


const OrderBookTrade = () => {
  const {sendMessage, connectionStatus} = useWebSocketContext();

  useEffect(() => {
    console.log("Subscribing...");
    if (connectionStatus === 1) {
      const ob_subscription = {
        action: "subscribe",
        topic: "orderBook",
        params: {
          symbol: "BTC_USDT",
          precision: -1
        }
      }

      const trade_subscription = {
        action: "subscribe",
        topic: "trades",
        params: {
          symbol: "BTC_USDT"
        }
      }
      sendMessage(ob_subscription);
      sendMessage(trade_subscription);
      console.log("subscribed");
    }
  }, [connectionStatus]);
  return (
    <div className='orderbook-trade'>
      <Header></Header>
      <div className='symbol'>
        <h1>BTC/USDT</h1>

      </div>
      <div className='main-section'>
          <div className="main-item">
            <h2>Order Book</h2>
            <OrderBookProvider><OrderBook limit={15} fullLimit={30}/></OrderBookProvider>
          </div>
          <div className="main-item">
            <h2>Trade</h2>
            <TradeProvider><Trade limit={50}/></TradeProvider>
          </div>
      </div>
    </div>
  )
}

export default OrderBookTrade   