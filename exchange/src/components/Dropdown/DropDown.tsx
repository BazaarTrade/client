import { ReactNode, useState } from "react"
import "./dropdown.css"

interface DropDownProps {
    children: ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({children}) => {
    const [toggleDropdown, setToggleDropDown] = useState(false);
  return (
    <div className='dropdown'>
        <div className="dropdown-btn" onClick={() => setToggleDropDown(!toggleDropdown)}>
            Choose
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