import ReactDom from "react-dom";
import { Fragment } from "react";
import styles from "./Popup.module.css";
import Card from "./Card";

const Backoverlay = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const types = [
    "Registeration Closed",
    "Registered",
    "Already Registered",
    "Paywall",
  ];
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>EVENT</h2>
      </header>
      <div className={styles.content}>
        <p>{types[0]}</p>
      </div>
      <footer className={styles.actions}>
        <button className={styles.btn} onClick={props.onConfirm}>
          Okay
        </button>
      </footer>
    </Card>
  );
};

const PopUp = (props) => {
  console.log(props.data);
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backoverlay onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default PopUp;
