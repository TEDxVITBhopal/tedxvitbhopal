import React from 'react';
import Forms from './Forms';
import styles from "./Event.module.css";

const RegsiterEvent = ({eventURL, eventTitle}) => {
  return (
      <div>
        <div className={styles.heading}>
          <span className={styles.heading}>
            Register for <span className='red'>{eventTitle}</span> today!
          </span>
        </div>
        <Forms
          event={eventURL}
        />
      </div>
  );
};

export default RegsiterEvent;
