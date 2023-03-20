import Photo from "./UI/Photo";
import styles from "./Heads.module.css";

const Heads = () => {
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.flexs}>
          <div className={styles.marginBottom}>
            <Photo />
          </div>
          <div className={styles.text}>
            <span>Faculity coordinator</span>
          </div>
        </div>
        <div className={styles.flexs}>
          <div className={styles.marginBottom}>
            <Photo />
          </div>
          <div className={styles.text}>
            <span>Faculity coordinator</span>
          </div>
        </div>
      </div>
      <div className={styles.Flex}>
        <div className={styles.flexs}>
          <div className={styles.marginBottom}>
            <Photo />
          </div>
          <div className={styles.text}>
            <span>President</span>
          </div>
        </div>
        <div className={styles.flexs}>
          <div className={styles.marginBottom}>
            <Photo />
          </div>
          <div className={styles.text}>
            <span>Tech/non-Tech Lead</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heads;
