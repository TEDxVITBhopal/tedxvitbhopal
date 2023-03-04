import React from 'react';
import globe from '../../resources/globe.png';
import './Speaker.css';
import mic from '../../resources/mic.png'

function Speaker({images}) {

  let showBottom = true;

  if (images.length <= 4){
     showBottom = false;
  }
  return (
    <div className="container">
      <span className='heading1'>The Speakers</span>
      <div className="flexImages">
        <div className="imageWrapper">
          <img className='globe' src={globe} alt="" />
        </div>
        <div className="imageWrapper up">
          <img className='rect1' src={images[0]} alt="" />
          <img className='rect2' id='top-upper' src={images[1]} alt="" />
        </div>
      </div>
      <div className="flexImages down">
        <div className="imageWrapper">
          <img className='rect1' src={images[2]} alt="" />
          <img className='rect2' src={images[3]} alt="" />
        </div>
      </div>
      { showBottom ? <div className="flexImages" >
        <div className="second"></div>
        <div className="imageWrapper up1">
          <img className='rect1' src={images[4]} alt="" />
          <img className='rect2' id='top-upper' src={images[5]} alt="" />
        </div>
      </div> : <div></div>} 
      { showBottom ? <div className="flexImages down1" >
        <div className="imageWrapper ">
          <img className='rect1 rectD1' src={images[6]} alt="" />
          <img className='rect2 rectD2' src={images[7]} alt="" />
        </div>
        <div className="imageWrapper" >
          <img className='mic' src={mic} alt="" />
        </div>
      </div> : <div></div> }  
    </div>
  )
}

export default Speaker;
