import React from 'react'
import Tabs from '../MultiTab/MultiTab'
import OpenOrders from './OpenOrders/OpenOrders'

const Orders = () => {
  return (
    <div>
        <Tabs tabNames={["Open Orders", "Order History", "Trade History"]}>
          <OpenOrders></OpenOrders>
        </Tabs>
    </div>
  )
}

export default Orders