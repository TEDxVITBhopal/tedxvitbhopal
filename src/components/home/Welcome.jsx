import React from 'react';
import RedBulb from '../../resources/ideabulb.png';
import './Welcome.css';

const WelcomeScreen = () => {
  return(
    <div className='container'>
      <img src={RedBulb} alt="idea" className='redbulb'/>
      <div className='titleContainer'>
        <p>Ideas worth spreading</p>
      </div>
      <div className='textContainer'>
        <p>Welcome to <span style={{color: '#eb0028', fontWeight: 'bold'}}>TEDx</span>VITBhopal, where we showcase inpiring talks from our local community. Join us in spreading ideas and sparking change in the world.</p>
      </div>
      <div className='buttons'>
        <div className='button'>
          Know more
        </div>
        <div className='button'>
          Cognitive Chrysalis
        </div>
      </div>
    </div>
  )
};

export default WelcomeScreen;
