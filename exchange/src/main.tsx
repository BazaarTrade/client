import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './utils.css'
import OrderBookTrade from './pages/OrderBookTrade'
import { ThemeProvider } from './state/themeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <OrderBookTrade />
    </ThemeProvider>
  </React.StrictMode>,
)
