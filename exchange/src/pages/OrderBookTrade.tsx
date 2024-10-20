import OrderBook from '../components/OrderBook/OrderBook'
import Trade from '../components/Trade/Trade'
import "./orderbooktrade.css"
import Header from '../components/Header/Header'
import { OrderBookProvider } from '../contexts/OrderBookContext'


const OrderBookTrade = () => {
  return (
    <div className='orderbook-trade'>
      <Header></Header>
      <div className='symbol'>
        <h1>BTC/USDT</h1>

      </div>
      <div className='main-section'>
          <OrderBookProvider><OrderBook limit={15} fullLimit={30}/></OrderBookProvider>
          <Trade/>
      </div>
    </div>
  )
}

export default OrderBookTrade   