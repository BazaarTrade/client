import { useRef, useEffect } from "react";
import InfiniteCanvas from "../../components/Chart/InfiniteCoordinateSystem";
import "./chart.css"


const Chart = () => {
  return (
    <div className="chart-layout">
      <div className="item name-area">name</div>
      <div className="item tf-area">tf</div>
      <div className="item tool-area">tools</div>
      <div className="item chart-area"><InfiniteCanvas></InfiniteCanvas></div>
      <div className="item price-axis-area">price</div>
      <div className="item time-axis-area">time</div>
    </div>
  )
}

export default Chart
