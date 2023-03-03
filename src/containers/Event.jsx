import React from 'react';
import RegsiterEvent from '../components/event/RegisterEvent';
import Speaker from "../components/event/Speaker"
import './Event.css'
// speaker images
import rectangle from '../resources/rectangle.png';

const Event = () => {
  return (
    <>
      <div className='page' id='slideshow'>
        slideshow
      </div>
      <div className='page' id='venue-photo'>
        venue-photo
      </div>
      <div className='page' id='speakers'>
        <Speaker
          images={[rectangle, rectangle, rectangle, rectangle]}/>
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
