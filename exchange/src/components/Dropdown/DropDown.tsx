import { ReactNode, useState } from "react"
import "./dropdown.css"
import { usePrecisionContext } from "../../contexts/PrecisionContext";

interface DropDownProps {
    children: ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({children}) => {
    const [toggleDropdown, setToggleDropDown] = useState(false);
    const {currentPrecision, transformPrecision} = usePrecisionContext();
  return (
    <div className='dropdown'>
        <div className="dropdown-btn" onClick={() => setToggleDropDown(!toggleDropdown)}>
            {transformPrecision(currentPrecision)}
        </div>
        {toggleDropdown && (
            <div className="dropdown-content">
                {children}
            </div>
        )}
    </div>
  )
}

export default DropDown