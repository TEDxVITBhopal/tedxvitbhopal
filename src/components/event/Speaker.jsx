import React from 'react';
import globe from '../../resources/globe.png';
import './Speaker.css';
import rectangle from '../../resources/rectangle.png';
import mic from '../../resources/mic.png'

function Speaker() {
  return (
    <div className="container">
      <span className='heading1'>The Speakers</span>
      <div className="flexImages">
        <div className="imageWrapper">
          <img className='globe' src={globe} alt="" />
        </div>
        <div className="imageWrapper up">
          <img className='rect1' src={rectangle} alt="" />
          <img className='rect2' src={rectangle} alt="" />
        </div>
      </div>
      <div className="flexImages down">
        <div className="imageWrapper">
          <img className='rect1' src={rectangle} alt="" />
          <img className='rect2' src={rectangle} alt="" />
        </div>
      </div>
      <div className="flexImages">
        <div className="second"></div>
        <div className="imageWrapper up1">
          <img className='rect1' src={rectangle} alt="" />
          <img className='rect2' src={rectangle} alt="" />
        </div>
      </div>
      <div className="flexImages down1">
        <div className="imageWrapper ">
          <img className='rect1 rectD1' src={rectangle} alt="" />
          <img className='rect2 rectD2' src={rectangle} alt="" />
        </div>
        <div className="imageWrapper">
          <img className='mic' src={mic} alt="" />
        </div>
      </div>     
    </div>
  )
}

export default Speaker;
