import OrderBook from '../components/OrderBook/OrderBook'
import Trade from '../components/Trade/Trade'
import "./orderbooktrade.css"
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'

const OrderBookTrade = () => {
  return (
    <div className='orderbook-trade'>
      <Header></Header>
      <div className='symbol'>
        <h1>BTC/USDT</h1>

      </div>
      <div className='main-section'>
          <OrderBook/>
          <Trade/>
      </div>
      
    </div>
  )
}

export default OrderBookTrade   