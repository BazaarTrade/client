import React, { ReactNode } from 'react';
import "./dropdown.css"

interface DropDownItemProps {
    children: ReactNode;
  }

const DropDownItem:React.FC<DropDownItemProps> = ({ children }) => {
  return (
    <div className='dropdown-item'>
      {children}
    </div>
  );
}

export default DropDownItem;
