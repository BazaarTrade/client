import React from 'react'
import Header from '../../components/Header/Header'
import OrderBook from '../../components/OrderBook/OrderBook'
import OrderPanel from '../../components/OrderPanel/OrderPanel'
import Tabs from '../../components/MultiTab/MultiTab'
import "./tradepage.css"

const TradePage = () => {
  return (
    <div className='trade-page' >
        <Header></Header>
        <div className="trade-page-layout">
            <div className="item name">name</div>
            <div className="item chart">chart</div>
            <div className="item orderbook"><OrderBook/></div>
            <div className="item order-panel"><OrderPanel/></div>
            <div className="item order-tabs"><Tabs tabNames={["Open Orders", "Order History", "Trade History"]}/></div>
            <div className="item assets"></div>
        </div>
    </div>
  )
}

export default TradePage