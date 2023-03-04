import { useState } from 'react';
import React from 'react';
import Forms from './Forms';
import styles from "./Event.module.css";
import PopUp from './Popup';

const RegsiterEvent = ({eventURL, eventTitle}) => {
  const [popup, setPopup] = useState(false);
  const poppupHandler  = () =>{
    setPopup(!popup);
  }

  const saveEventDataHandler = async (enteredSavedData) => {
    const savedData={
      ...enteredSavedData,
    }

    console.log(savedData);

    try {
      const response = await fetch(eventURL, {
        method: "POST",
        body: JSON.stringify(savedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("error in the submitting");
      }

      // setInterval(() => {
      //   setPopup(false)
      // }, 60000)
    } catch (err) {
      console.log(err);
    }

   
  }
  return (
      <div>
        <div className={styles.heading}>
          <span className={styles.heading}>
            Register for <span className='red'>{eventTitle}</span> today!
          </span>
        </div>
        <Forms
          popup={poppupHandler}
          onSaveData={saveEventDataHandler}
        />
        {popup && <PopUp onConfirm={poppupHandler} />}
      </div>
  );
};

export default RegsiterEvent;
