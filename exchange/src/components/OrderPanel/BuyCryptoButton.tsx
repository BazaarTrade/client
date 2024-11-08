import React from 'react';
import { useOrderPanelContext } from '../../contexts/OrderPanelContext';

interface BuyCryptoButtonProps {
  onClick?: () => void; 
}

const BuyCryptoButton: React.FC<BuyCryptoButtonProps> = ({ onClick }) => {
  const { isBuy } = useOrderPanelContext();

  return (
    <button
      className="primary-btn black buysell-spot-button"
      onClick={onClick} 
    >
      {isBuy ? "Buy" : "Sell"}
    </button>
  );
};

export default BuyCryptoButton;
