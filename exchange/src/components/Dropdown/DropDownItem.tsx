import React, { ReactNode } from 'react';
import "./dropdown.css"
import { useWebSocketContext } from '../../contexts/wscontext';
import { usePrecisionContext } from '../../contexts/PrecisionContext';

interface DropDownItemProps {
    index: number;
    value: number;
  }



const DropDownItem:React.FC<DropDownItemProps> = ({value, index}) => {
  const {sendMessage, connectionStatus} = useWebSocketContext();
  const {currentPrecision, setCurrentPrecision, precision} = usePrecisionContext();
  
  
  const switchPrecision = (prevPrecision: number, newPrecision: number) => {
    if (connectionStatus === 1) {
      const unsub = {
        action: "unsubscribe",
        topic: "orderBook",
        params: {
          pair: "BTC_USDT",
          precision: prevPrecision,
        },
      };
      const sub = {
        action: "subscribe",
        topic: "orderBook",
        params: {
          pair: "BTC_USDT",
          precision: newPrecision,
        },
      };
      sendMessage(unsub);
      sendMessage(sub);
      if (precision) {
        console.log(unsub, sub);
      }
      
      console.log(currentPrecision);
      setCurrentPrecision(newPrecision);
      console.log(currentPrecision);
    }
    
  }
  return (
    <div className='dropdown-item' onClick={() => precision && switchPrecision(currentPrecision, index)}> 
      <div className="dropdown-value">{value}</div>
    </div>
  );
}

export default DropDownItem;
