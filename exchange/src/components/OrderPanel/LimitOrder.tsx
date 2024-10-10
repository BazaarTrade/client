import React from 'react'
import AmountInput from './AmountInput'
import PrimaryInput from '../PrimaryInput/PrimaryInput'

const LimitOrder = () => {
  return (
    <div>
      <div className="item value-space-between availiable-amount">
        <span className="label">Availiable balance</span>
        <span className="amount">10000 USDT</span>
      </div>
      <div className="item amount-input-wrapper">
        <PrimaryInput title='Price'></PrimaryInput>
        <AmountInput></AmountInput>
        <div className="value-space-between est-fee">
          <span className="label">Est. Trading Fee</span>
          <span className="amount">0.000 BTC</span>
        </div>
        <button className="primary-btn black buysell-spot-button">
          Buy BTC
        </button>
      </div>
    </div>
  )
}

export default LimitOrder