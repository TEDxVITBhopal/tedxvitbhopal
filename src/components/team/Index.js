import styles from "./Index.module.css";
import Heading from "./Heading.js";
import Heads from "./Heads";

const Index = () => {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className={styles.margin}>
        <Heads />
      </div>
    </div>
  );
};

export default Index;
