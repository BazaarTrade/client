import { ReactNode } from "react";
import "./threecolumntable.css";
import React from "react";

interface TableProps {
  children: ReactNode; // Accept React nodes as children
  symbol: "BTC_USDT";
  className?: string; // Accept additional class names
  limit?: number; // Prop name to limit the number of children rendered
}

const ThreeColumnTable: React.FC<TableProps> = ({ children, symbol, className, limit }) => {
  // If a limit is provided, slice the children
  const displayedChildren = limit ? React.Children.toArray(children).slice(0, limit) : children;

  return (
    <table className={className}>
      <tbody>
        {displayedChildren} {/* Directly render the children */}
      </tbody>
    </table>
  );
};

export default ThreeColumnTable;

