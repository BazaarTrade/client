import { useThemeContext } from "../../state/themeContext";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const {isDark, setIsDark} = useThemeContext();
  return (
    <header className='header'>
        <div className="logo-tabs">
            <div className='logo'>
                <h1>FRECZ</h1>
            </div>
            <div className="tabs">
                <div className="tab">Spot</div>
                <div className="tab">Futures</div>
                <div className="tab">Order Book</div>
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