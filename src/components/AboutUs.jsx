import React from 'react';
import './AboutUs.css'
import XLogo from '../resources/x-logo.png';

function AboutUs() {
    return(
        <div className='about-us' >
            <div id='about-tedx' className='about'>
                <h1>About TEDx</h1>
                <div className='text-box'>
                    TEDx is a worldwide community that organises TED-style events wherever and everywhere with the goal of celebrating and elevating locally-driven ideas to a global platform. Our event is known as TEDxVITBhopal, where x stands for independently organised event.
                </div>
            </div>
            <div id='about-tedxvitb' className='about'>
                <h1>About TED<img src={XLogo} alt={"x"} className="x-logo"/><br/>VITBHOPAL</h1>
                <div className='text-box'>
                    TEDxVITBhopal, which inaugurated in 2023, is a cooperation between students of Vellore Institute of Technology Bhopal and the larger  community to bring Technology, Entertainment, and Design from diverse visionaries, thinkers, and doers right to our doorstep.
                </div>
            </div>
        </div>
    )
}

export default AboutUs;