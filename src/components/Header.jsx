import './Header.css'
import logo from '../resources/TEDXVITB-logo-white.png'
import { useEffect, useState } from 'react'

const Header = () => {

    const minimiseAtPoint = 100

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
    const findActivesSection = (sectionNumber) => {
        console.log(window.innerHeight)
        if(Math.floor(scrollPostion/window.innerHeight) === sectionNumber)
            return 'navlink active'
        else
            return 'navlink'
    }

    return(
        <>
        <div className="spacer"></div>
        <header className={scrollPostion>minimiseAtPoint? 'header mini':'header'}>
            <img src={logo} alt="tedxvitbhopal logo" className={scrollPostion>minimiseAtPoint? 'header-logo mini':'header-logo'}/>
            <nav className='header-navbar'>
                <a href="#root" className={findActivesSection(0)}>Home</a>
                <a href="#our-message" className={findActivesSection(1)}>Goals</a>
                <a href="#find-us" className={findActivesSection(2)}>Find Us</a>
                <a href="#about-us" className={findActivesSection(3)}>About Us</a>
                <a href="#our-events" className={findActivesSection(4)}>Events</a>
            </nav>
            <nav className='header-navbar-dropdown'>
            <a href="#root" className={findActivesSection(0)}>Home</a>
                <a href="#our-message" className={findActivesSection(1)}>Goals</a>
                <a href="#find-us" className={findActivesSection(2)}>Find Us</a>
                <a href="#about-us" className={findActivesSection(3)}>About Us</a>
                <a href="#our-events" className={findActivesSection(4)}>Events</a>
            </nav>
        </header>
        </>
    )
}

export default Header