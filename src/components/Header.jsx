import './Header.css'
import logo from '../resources/TEDXVITB-logo-white.png'
import { useEffect, useState } from 'react'

const Header = () => {

    // hooks
    let [scrollPostion, setScrollPosition] = useState(0)
    useEffect(() => {
        document.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    })

    // handlers
    const onScroll = () => {
        setScrollPosition(window.scrollY)
    }

    return(
        <header className={scrollPostion>0? 'header mini':'header'}>
            <img src={logo} alt="tedxvitbhopal logo" className='header-logo'/>
            <nav className='header-navbar'>
                <a href="/" className='navlink'>Home</a>
                <a href="/" className='navlink'>Discover</a>
                <a href="/" className='navlink'>About</a>
                <a href="/" className='navlink'>Attend</a>
                <a href="/" className='navlink'>Watch</a>
            </nav>
            <nav className='header-navbar-dropdown'>
                <a href="/" className='navItem'>Home</a>
                <a href="/" className='navItem'>Discover</a>
                <a href="/" className='navItem'>About</a>
                <a href="/" className='navItem'>Attend</a>
                <a href="/" className='navItem'>Watch</a>
            </nav>
        </header>
    )
}

export default Header