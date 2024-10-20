import { ReactNode } from "react";
import "./threecolumntable.css";
import React from "react";

interface TableProps {
  children: ReactNode; 
  symbol: "BTC_USDT";
  className?: string; 
  limit?: number; 
}

const ThreeColumnTable: React.FC<TableProps> = ({ children, symbol, className, limit }) => {
  const displayedChildren = limit ? React.Children.toArray(children).slice(0, limit) : children;

  return (
    <table className={className}>
      <tbody>
        {displayedChildren}
      </tbody>
    </table>
  );
};

export default ThreeColumnTable;

