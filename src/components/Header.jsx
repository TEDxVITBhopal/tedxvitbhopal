import './Header.css'
import logoBlack from '../resources/TEDXVITB-logo-black.png'
import logoWhite from '../resources/TEDXVITB-logo-white.png'
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
        if(Math.floor((scrollPostion)/Math.max(window.innerHeight, 600)) === sectionNumber)
            return 'navlink active'
        else
            return 'navlink'
    }
    const scrollTo = (sectionNumber) => {
        window.scrollTo(0, sectionNumber * Math.max(window.innerHeight, 600))
    }
    const toggleNavbar = () => {
        const navbar = document.getElementById('collapsible-navbar')
        const pluscross = document.getElementById('toggle-icon')
        navbar.style.display = navbar.style.display==='none'? 'flex':'none'
        pluscross.style.transform = pluscross.style.transform==='none'? 'rotateZ(45deg)':'none'
    }

    return(
        <>
        <div className="spacer"></div>
        <header className={scrollPostion>minimiseAtPoint? 'header mini':'header'}>
            <img src={scrollPostion>minimiseAtPoint? logoWhite:logoBlack} alt="tedxvitbhopal logo" className={scrollPostion>minimiseAtPoint? 'header-logo mini':'header-logo'}/>
            <button id='toggle-menu' className='open-menu button' onClick={() => toggleNavbar()}><h1 id='toggle-icon'>+</h1></button>
            <nav className='header-navbar'>
                <h6 className={findActivesSection(0)} onClick={() => window.scrollTo(0, 0)}>Home</h6>
                <h6 className={findActivesSection(1)} onClick={() => scrollTo(1)}>Goals</h6>
                <h6 className={findActivesSection(2)} onClick={() => scrollTo(2)}>Find Us</h6>
                <h6 className={findActivesSection(3)} onClick={() => scrollTo(3)}>About Us</h6>
                <h6 className={findActivesSection(4)} onClick={() => scrollTo(4)}>Events</h6>
            </nav>
        </header>
        <nav id='collapsible-navbar' className={scrollPostion>minimiseAtPoint? 'header-navbar-dropdown mini':'header-navbar-dropdown'}>
                <h6 className={findActivesSection(0) + ' colaplink'} onClick={() => window.scrollTo(0, 0)}>Home</h6>
                <h6 className={findActivesSection(1) + ' colaplink'} onClick={() => scrollTo(1)}>Goals</h6>
                <h6 className={findActivesSection(2) + ' colaplink'} onClick={() => scrollTo(2)}>Find Us</h6>
                <h6 className={findActivesSection(3) + ' colaplink'} onClick={() => scrollTo(3)}>About Us</h6>
                <h6 className={findActivesSection(4) + ' colaplink'} onClick={() => scrollTo(4)}>Events</h6>
        </nav>
        </>
    )
}

export default Header