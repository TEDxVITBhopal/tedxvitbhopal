import styles from "./Section.module.css";
import up from "./../../../resources/up.png";
import down from "./../../../resources/down.png";

const Section = (props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card}`}>{props.children}</div>
      <div className={styles.arrow}>
        {!props.show && (
          <div onClick={props.showHandler}>
            <img src={up} alt="uparrow" />
          </div>
        )}
        {props.show && (
          <div onClick={props.showHandler}>
            <img src={down} alt="downarrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
