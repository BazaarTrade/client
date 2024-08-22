import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './utils.css'
import OrderBookTrade from './pages/OrderBookTrade'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrderBookTrade />
  </React.StrictMode>,
)
