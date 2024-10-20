import React from 'react';
import { useOrderPanelContext } from '../../contexts/OrderPanelContext';

interface BuyCryptoButtonProps {
  onClick?: () => void; // Optional onClick prop for external use
}

const BuyCryptoButton: React.FC<BuyCryptoButtonProps> = ({ onClick }) => {
  const { isBuy } = useOrderPanelContext();

  return (
    <button
      className="primary-btn black buysell-spot-button"
      onClick={onClick} // Use the onClick prop passed from the parent
    >
      {isBuy ? "Buy" : "Sell"}
    </button>
  );
};

export default BuyCryptoButton;
