import styles from "./Photo.module.css";

const Photo = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Photo;
