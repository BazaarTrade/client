import { ReactNode } from "react";
import "./threecolumntable.css";

interface TableProps {
  children: ReactNode;
  symbol: "BTC_USDT";
  tableType: "trade" | "order";
  className?: string; // Add this line to accept additional class names
}

const ThreeColumnTable: React.FC<TableProps> = ({ children, symbol, tableType, className }) => {
  return (
    <table className={className}>
      <thead>
        {tableType === "trade" ? (
          <tr>
            <th className="first-column">Time</th>
            <th className="second-column">Fill Price ()</th>
            <th className="third-column">Total ()</th>
          </tr>
        ) : (
          <tr>
            <th className="first-column">Price ()</th>
            <th className="second-column">Qty ()</th>
            <th className="third-column">Total ()</th>
          </tr>
        )}
      </thead>
      {children}
    </table>
  );
};

export default ThreeColumnTable;
