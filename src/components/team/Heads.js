import styles from "./Heads.module.css";

const Heads = (props) => {
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.flexs}>
          <img className={styles.pic} src={props.pic1} alt="img" />
          <div className={styles.text}>
            <span>{props.pos1}</span>
            <br />
            <span>{props.name1}</span>
          </div>
        </div>

        <div className={styles.flexs}>
          <img className={styles.pic} src={props.pic2} alt="img" />
          <div className={styles.text}>
            <span>{props.pos2}</span>
            <br />
            <span>{props.name2}</span>
          </div>
        </div>
      </div>
      <div className={styles.Flex}>
        <div className={styles.flexs}>
          <img className={styles.pic} src={props.pic3} alt="img" />
          <div className={styles.text}>
            <span>{props.pos3}</span> <br />
            <span>{props.name3}</span>
          </div>
        </div>
        <div className={styles.flexs}>
          <img className={styles.pic} src={props.pic4} alt="img" />
          <div className={styles.text}>
            <span>{props.pos4}</span>
            <br />
            <span>{props.name4}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heads;
