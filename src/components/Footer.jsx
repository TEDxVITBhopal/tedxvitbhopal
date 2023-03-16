import gmail from "../resources/gmail.png";
import insta from "../resources/instagram.png";
import linkedin from "../resources/linkedin.png";
import medium from "../resources/medium.png";
import logo from "../resources/TEDXVITB-logo-white.png";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-section">
      <section className="footer-block subscribe">
        <figure>
          <img className="footer-logo" src={logo} alt="TEDxVITB logo" />
        </figure>
        <button className="newsletter-button">JOIN OUR NEWSLETTER</button>
        <p className="newsletter-text">
          Be the first to hear from us! You can unsubscribe from updates
          anytime.
        </p>
      </section>
      <section className="footer-block links">
        <h2>Explore</h2>
        <a href="/" className="footer-link">
          ⎋ All Events
        </a>
        <a href="/" className="footer-link">
          ⎋ Members
        </a>
        <a href="/blogs" className="footer-link">
          ⎋ Blog
        </a>
        <a href="tel:9561412330" className="footer-link">
          ⎋ Contact
        </a>
      </section>
      <section className="footer-block socials">
        <h2>Socials</h2>
        <section className="footer-social-icons">
          <a href="mailto:tedxvitbwebteam@gmail.com" className="social-link">
            <img src={gmail} alt="gmail icon" />
          </a>
          <a
            href="https://www.instagram.com/tedx.vitbhopal/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src={insta} alt="instagram icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/tedxvitbhopal/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a
            href="https://medium.com/@tedxvitbhopal"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src={medium} alt="medium icon" />
          </a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
