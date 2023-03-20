import { useState } from "react";
import styles from "./Index.module.css";
import Heading from "./Heading.js";
import Heads from "./Heads";
import Lead from "./UI/Section";

const Index = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <div>
        <div>
          <Heading />
        </div>
        <div className={styles.margin}>
          <Heads />
        </div>
      </div>
      <div className={`${styles.marginTop}`}>
        <Lead show={show} showHandler={showHandler}>
          {" "}
          Web and App Team{" "}
        </Lead>
        {!show && <span>hello Web and app team</span>}
      </div>
    </div>
  );
};

export default Index;
