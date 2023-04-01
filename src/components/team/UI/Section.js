import styles from "./Section.module.css";
import up from "./../../../resources/up.png";
import down from "./../../../resources/down.png";

const Section = (props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card}`}>{props.children}</div>
      <div className={styles.arrow}>
        {!props.show && (
          <div onClick={props.showHandler} className={styles.leftarrowgap}>
            <img
              src={up}
              alt="uparrow"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
        )}
        {props.show && (
          <div onClick={props.showHandler} className={styles.leftarrowgap}>
            <img src={down} alt="downarrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
