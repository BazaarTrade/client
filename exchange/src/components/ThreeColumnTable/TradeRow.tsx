import "./threecolumntable.css"
import { parseISO, format } from 'date-fns';

interface TradeRow {
    isBid: boolean;
    price: string;
    qty: string;
    time: string;
}

const TradeRow: React.FC<TradeRow> = ({isBid, price, time, qty}) => {
  return (
    <tr className="traderow">
        <td className="first-column">{format(parseISO(time), 'HH:mm:ss')}</td>
        <td className={isBid ? "second-column green" : "second-column red"}>{price}</td>
        <td className="third-column">{qty}</td>
    </tr>
  )
}

export default TradeRow