import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div>
      <div className={styles.heading}>
        <span>Meet Our Team</span>
      </div>
      <div className={styles.text}>
        <span>
          Our teams are composed of highly skilled individuals who are passionate about their work and strive to produce exceptional results. Each team brings a unique set of skills and expertise, collaborating seamlessly to achieve our shared goals. From Content & Editorial to Web & App and Registrations, our teams work cohesively and collaborate to deliver top-notch products and services. With a diverse range of talents and backgrounds, we bring a wealth of perspectives to the table, fostering a culture of innovation and creativity. We are dedicated to delivering excellence, whether it's creating compelling content, driving our ideas to fruition, or enhancing community experience. Together, we are a dynamic and successful team, working to make the TEDx dream experience a reality.
        </span>
      </div>
    </div>
  );
};

export default Heading;
