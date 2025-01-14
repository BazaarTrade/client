import React from 'react'
import Tabs from '../MultiTab/MultiTab'
import OpenOrders from './OpenOrders/OpenOrders'
import { useOrderContext } from '../../contexts/OrdersContext'
import ClosedOrders from './TradeHistory/TradeHistory'

const Orders = () => {
  
  return (
    <div>
        <Tabs tabNames={["Open Orders", "Order History", "Trade History"]}>
          <OpenOrders></OpenOrders>
          <ClosedOrders></ClosedOrders>
        </Tabs>
    </div>
  )
}

export default Orders