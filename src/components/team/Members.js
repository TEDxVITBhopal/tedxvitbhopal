import React from "react";
import styles from "./Heads.module.css";

function Members(props) {
  return (
    <div className={styles.flex}>
      <div className={styles.flexs}>
        <img className={styles.pic} src={props.pic1} alt="img" />
        <div className={styles.flexs}>
          <div>
            <b>{props.pos1}</b>
          </div>
          <div>{props.name1}</div>
        </div>
      </div>

      <div className={styles.flexs}>
        <img className={styles.pic} src={props.pic2} alt="img" />
        <div className={styles.flexs}>
          <div>
            <b>{props.pos2}</b>
          </div>
          <div>{props.name2}</div>
        </div>
      </div>
    </div>
  );
}

export default Members;
