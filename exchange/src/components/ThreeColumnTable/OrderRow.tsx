import React, { useState, useEffect } from "react";
import "./threecolumntable.css";

interface OrderRowProps {
    isBid: boolean;
    price: number;
    volume: number;
    total: string;
}

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

const OrderRow: React.FC<OrderRowProps> = ({ isBid, price, volume, total }) => {
    const backgroundClass = isBid ? "rgba(19, 109, 73, 0.274)" : "rgba(255, 0, 0, 0.1)";
    const [widthPercentage, setWidthPercentage] = useState<number>(0);

    useEffect(() => {
        // Function to update the widthPercentage
        const updateWidthPercentage = () => {
            setWidthPercentage(getRandomNumber(10, 100));
        };

        // Set an interval to update the widthPercentage every second
        const intervalId = setInterval(updateWidthPercentage, 500);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <tr className="orderrow" style={{ '--volume-bar-width': `${widthPercentage}%`, '--volume-bar-color': `${backgroundClass}` } as React.CSSProperties}>
            <td className={isBid ? "first-column green" : "first-column red"}>
                {price.toFixed(1)}
            </td>
            <td className="second-column">{volume.toFixed(5)}</td>
            <td className="third-column">{total}</td>
        </tr>
    );
};

export default OrderRow;

