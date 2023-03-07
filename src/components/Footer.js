import React from "react";
import Button from "react-bootstrap/Button";
import gmail from "./../resources/gmail.png";
import facebook from "./../resources/facebook.png";
import insta from "./../resources/instagram.png";
import link from "./../resources/linkedin.png";
import styles from "./App.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.Footer}>
        <img alt="tedx" src={require("../resources/TEDXVITB-logo-white.png")} />
        <div className={styles.row}>
          <div className={`${styles.f} ${styles.first}`}>
            <Button className={styles.NewsLetter} variant="dark">
              JOIN OUR NEWSLETTER
            </Button>
            <p>
              Be the first one to hear from us ! You can unsubscribe our update
              anytime you want
            </p>
          </div>

          <div className={`${styles.f} ${styles.second}`}>
            <h3> Explore </h3>
            <ul className={styles.links}>
              <li>
                <span className={styles.link}>Main Event 2023</span>
              </li>
              <li className={styles.link}>
                <span>LookBook</span>
              </li>
              <li className={styles.link}>
                <span>Partners</span>
              </li>
              <li className={styles.link}>
                <span>Privacy Policy</span>
              </li>
              <li className={styles.link}>
                <span>TedxVITBhopal Newsletter</span>
              </li>
              <li className={styles.link}>
                <span>Community Conversation</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.f} ${styles.third}`}>
            <h3>Contact Us</h3>
            <div className={styles.contactLogo}>
              <img alt="gmail" onclick="contacts()" src={gmail} />
              <img alt="insta" onclick="contacts()" src={insta} />
              <img alt="fb" onclick="contacts()" src={facebook} />
              <img alt="twt" onclick="contacts()" src={link} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
