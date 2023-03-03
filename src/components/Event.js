import Forms from "./Forms";
import styles from "./Event.module.css";

const Event = () => {
  return (
    <div>
      Event Page
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
    </div>
  );
};

export default Event;
