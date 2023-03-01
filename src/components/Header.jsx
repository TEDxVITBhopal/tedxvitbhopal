import './Header.css'
import logo from '../resources/TEDXVITB-logo-white.png'

const Header = () => {
    return(
        <header className='header'>
            <img src={logo} alt="tedxvitbhopal logo" className='header-logo'/>
            <nav className='header-navbar'>
                <a href="/" className='navlink'>Home</a>
                <a href="/" className='navlink'>Discover</a>
                <a href="/" className='navlink'>About</a>
                <a href="/" className='navlink'>Attend</a>
                <a href="/" className='navlink'>Watch</a>
            </nav>
        </header>
    )
}

export default Header