import { useThemeContext } from "../../state/themeContext";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const {isDark, setIsDark} = useThemeContext();
    const navigate = useNavigate();
  return (
    <header className='header'>
        <div className="logo-tabs">
            <div className='logo'>
                <h1>BAZAAR</h1>
            </div>
            <div className="tabs">
                <div className="tab" onClick={() => navigate("/")}>Spot</div>
                <div className="tab">Futures</div>
                <div className="tab" onClick={() => navigate("/orderbook")}>Order Book</div>
            </div>
        </div>
        <div className="button-box">
            <button className='primary-btn has-no-bg'>Log In</button>
            <button className='primary-btn bg-white black'>Sign Up</button>
            <button className='btn'><FontAwesomeIcon icon={faGlobe} size='xl' /></button>
            <button className='btn' onClick={() => setIsDark(!isDark)}><FontAwesomeIcon icon={isDark ? faSun : faMoon} size='xl'/></button>
        </div>
    </header>
  )
}

export default Header