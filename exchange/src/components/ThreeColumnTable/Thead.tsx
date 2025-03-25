import "./threecolumntable.css";
import React from "react";

interface TableHeadProps {
  tableType: "trade" | "order";
  className?: string; 
}

const Thead: React.FC<TableHeadProps> = ({ tableType }) => {
  return (
      <table>
        <thead>
        {tableType === "trade" ? (
          <tr className="table-headings">
            <th className="first-column">Fill price ()</th>
            <th className="second-column">Total ()</th>
            <th className="third-column">Time ()</th>
          </tr>
        ) : (
          <tr className="table-headings">
            <th className="first-column">Price ()</th>
            <th className="second-column">Qty ()</th>
            <th className="third-column">Total ()</th>
          </tr>
        )}
      </thead>
      </table>
  );
};

export default Thead;