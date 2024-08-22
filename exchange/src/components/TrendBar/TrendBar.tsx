
import "./trendbar.css"

const TrendBar = () => {
  return (
    <div className="trendbar">
        <div className="greenbar"></div>
        <div className="redbar"></div>
        <div className="percentage">
            <div className="buy">Buy 70%</div>
            <div className="sell">Sell 30%</div>
        </div>
    </div>
  )
}

export default TrendBar