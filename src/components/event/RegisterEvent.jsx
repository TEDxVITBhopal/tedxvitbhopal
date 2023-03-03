import React from 'react';
import Forms from './Forms';
import styles from "./Event.module.css";

const RegsiterEvent = () => {
  return (
      <div>
        <div className={styles.heading}>
          <span className={styles.heading}>Register for TedX Event.</span>
        </div>
        <Forms
          event={
            "https://tedxvitbhopal-178a6-default-rtdb.firebaseio.com/event.json"
          }
        />
      </div>
  );
};

export default RegsiterEvent;
