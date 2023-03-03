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
                <h6 className={findActivesSection(0)} onClick={() => {window.scrollTo(0, 0)}}>Home</h6>
                <h6 className={findActivesSection(1)} onClick={() => {window.scrollTo(0, window.innerHeight + 50)}}>Goals</h6>
                <h6 className={findActivesSection(2)} onClick={() => {window.scrollTo(0, 2 * window.innerHeight + 50)}}>Find Us</h6>
                <h6 className={findActivesSection(3)} onClick={() => {window.scrollTo(0, 3 * window.innerHeight + 50)}}>About Us</h6>
                <h6 className={findActivesSection(4)} onClick={() => {window.scrollTo(0, 4 * window.innerHeight + 50)}}>Events</h6>
            </nav>
            <nav className='header-navbar-dropdown'>
                <h6 className={findActivesSection(0)} onClick={() => {window.scrollTo(0, 0)}}>Home</h6>
                <h6 className={findActivesSection(1)} onClick={() => {window.scrollTo(0, window.innerHeight + 50)}}>Goals</h6>
                <h6 className={findActivesSection(2)} onClick={() => {window.scrollTo(0, 2 * window.innerHeight + 50)}}>Find Us</h6>
                <h6 className={findActivesSection(3)} onClick={() => {window.scrollTo(0, 3 * window.innerHeight + 50)}}>About Us</h6>
                <h6 className={findActivesSection(4)} onClick={() => {window.scrollTo(0, 4 * window.innerHeight + 50)}}>Events</h6>
            </nav>
        </header>
        </>
    )
}

export default Header