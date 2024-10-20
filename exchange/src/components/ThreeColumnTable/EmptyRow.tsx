import "./threecolumntable.css";

const EmptyRow = () => {
  return (
    <tr className="orderrow">
      <td className="first-column red"></td>
      <td className="second-column"></td>
      <td className="third-column"></td>
    </tr>
  );
};

export default EmptyRow;
