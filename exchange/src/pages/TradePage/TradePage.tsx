import React from 'react'
import Header from '../../components/Header/Header'
import OrderBook from '../../components/OrderBook/OrderBook'
import OrderPanel from '../../components/OrderPanel/OrderPanel'
import Tabs from '../../components/MultiTab/MultiTab'
import "./tradepage.css"
import Ticker from '../../components/Ticker/Ticker'
import Orders from '../../components/Orders/Orders'

const TradePage = () => {
  return (
    <div className='trade-page' >
        <Header></Header>
        <div className="trade-page-layout">
            <div className="item name"><Ticker></Ticker></div>
            <div className="item chart"></div>
            {/* <div className="item chart"><img src='./src/assets/chart.jpg'/></div> */}
            <div className="item orderbook"><OrderBook limit={10} fullLimit={20}/></div>
            <div className="item order-panel"><OrderPanel/></div>
            <div className="item order-tabs"><Orders></Orders></div>
            <div className="item assets"></div>
        </div>
    </div>
  )
}

export default TradePage