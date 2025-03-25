
import { useTradeContext } from "../../contexts/TradeContext";
import "./price.css"
import { formatPrice } from "../../utilfunctions";


const Price = () => {
  const { lastPrice } = useTradeContext();
  return (
    <div className="price">
        <div className="symbol-price">{formatPrice(lastPrice)}</div>
        <div className="fiat-price">$59,400.5</div>
    </div>
  )
}

export default Price