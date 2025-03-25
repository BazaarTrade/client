import { formatPrice, formatTotal } from "../../utilfunctions";
import "./threecolumntable.css"
import { parseISO, format } from 'date-fns';

interface TradeRow {
    isBid: boolean;
    pair: string;
    price: string;
    qty: string;
    time: string;
}

const TradeRow: React.FC<TradeRow> = ({isBid, price, time, qty}) => {
  return (
    <tr className="traderow">
        <td className={isBid ? "first-column green" : "first-column red"}>{formatPrice(price)}</td>
        <td className="second-column">{qty}</td>
        <td className="third-column">{format(parseISO(time), 'HH:mm:ss')}</td>
        
    </tr>
  )
}

export default TradeRow