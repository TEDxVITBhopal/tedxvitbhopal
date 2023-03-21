import React, { useState } from 'react';
import RegsiterEvent from '../components/event/RegisterEvent';
import Speaker from "../components/event/Speaker"
import './Event.css'
// speaker images
import speakerImg from '../resources/test-person.jpg';
// venue image (yes we change this)
import VITImage from "../resources/vit.jpg";
import bullseye from '../resources/bullseye.png'
// import ellipse from '../resources/ellipse.png'
import { EventList } from './EventList';

const Event = () => {
  // hooks
  const [slide, changeSlide] = useState(EventList.one)

  // handlers
  const handleSlideChange = async (slideObj) => {
    const card = document.getElementById('slide-container')
    card.className = 'push-back slideshow-slide'
    changeSlide(slideObj)
    setTimeout(() => {
      card.className = 'slideshow-slide'
    }, 1000);
  }

  return (
    <>
      <section className='slideshow-page'>
        <menu className="slideshow-menu">
          <img src={bullseye} alt="" />
          <div className='slideshow-bullseye'>
            <div className='slideshow-ring' style={{rotate: slide.rotation}}>
              <div className='slideshow-ball'>
                <span id='slideshow-number'>{slide.slideNumber}</span>
              </div>
            </div>
          </div>
          <section className='slideshow-dots'>
            <button className={slide.slideNumber === '1'? 'slideshow-dot current': 'slideshow-dot'} onClick={() => handleSlideChange(EventList.one)}></button>
            <button className={slide.slideNumber === '2'? 'slideshow-dot current': 'slideshow-dot'} onClick={() => handleSlideChange(EventList.two)}></button>
            <button className={slide.slideNumber === '3'? 'slideshow-dot current': 'slideshow-dot'} onClick={() => handleSlideChange(EventList.three)}></button>
          </section>
        </menu>
        <section className='slideshow-images'>
          <article id='slide-container' className='slideshow-slide'></article>
          <article id='slide-cover' className='slideshow-cover'></article>
        </section>
      </section>
      <div className='page' id='venue'>
        <img id="venue-photo" src={VITImage} alt={"VITBhopal"}/>
        <h1 id="college-name">Vellore Institute of Technology, Sehore</h1>
      </div>
      <div className='page' id='speakers'>
        <Speaker
          images={[speakerImg, speakerImg, speakerImg, speakerImg]}/>
      </div>
      <div className='page' id='register'>
        <RegsiterEvent
          eventURL={"https://tedxvitbhopal-178a6-default-rtdb.firebaseio.com/event.json"}
          eventTitle={"Event Name"}/>
      </div>
      {/* Add footer here */}
    </>
  );
};

export default Event;
