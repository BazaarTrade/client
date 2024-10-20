import React from 'react'
import "./assetspanel.css"

const AssetsPanel = () => {
  return (
    <div className='assets-panel'>
        <div className="container">
            <div className="title">
                <h2>Assets</h2>
            </div>

            <div className='assets-buttons-wrapper'>
                <button className='secondary-button'>Deposit</button>
                <button className='secondary-button'>Transfer</button>
            </div>

            <div className="account-info-wrapper">
                <div className="asset-item">
                    <span className="item-name">Total USDT</span>
                    <span className="item-value">100.000</span>
                </div>
                <div className="asset-item">
                    <span className="item-name">Total BTC</span>
                    <span className="item-value">100.000</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssetsPanel