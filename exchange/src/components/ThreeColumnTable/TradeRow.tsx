import "./threecolumntable.css"

interface TradeRowProps {
    isBid: boolean;
}

type TradeRow = {
    traderow: TradeRowProps
}

const TradeRow: React.FC<TradeRowProps> = (traderow) => {
  return (
    <tr className="traderow">
        <td className="first-column">19:12:34</td>
        <td className={traderow.isBid === true ? "second-column green" : "second-column red"}>59,200.2</td>
        <td className="third-column">23</td>
    </tr>
  )
}

export default TradeRow