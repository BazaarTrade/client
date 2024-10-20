import React, { useState } from 'react';
import "./orderpanel.css";
import Tabs from '../MultiTab/MultiTab';
import BuySellButtons from '../BuySellButtons/BuySellButton';
import MarketOrder from './MarketOrder';
import LimitOrder from './LimitOrder';
import TPSLOrder from './TPSLOrder';

const OrderPanel = () => {
  return (
    <div className='order-panel'>
        <div className="order-panel-layout">
            <div className="item panel-menu-bar"><h2>Spot</h2></div>
            <div className="item buy-sell-bar"><BuySellButtons/></div>
            <div className="item spot-multi-tab-bar">
              <Tabs tabNames={["Market", "Limit", "TP/SL"]}>
                <MarketOrder />
                <LimitOrder/>
                <TPSLOrder/>
              </Tabs>
            </div>
        </div>
    </div>
  )
}

export default OrderPanel;
