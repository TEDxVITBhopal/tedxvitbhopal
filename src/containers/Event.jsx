import React from 'react';
import RegsiterEvent from '../components/event/RegisterEvent';
import Speaker from "../components/event/Speaker"
import './Event.css'
// speaker images
import speakerImg from '../resources/test-person.jpg';
// venue image (yes we change this)
import VITImage from "../resources/vit.jpg";

const Event = () => {
  return (
    <>
      <div className='page' id='slideshow'>
        slideshow
      </div>
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
