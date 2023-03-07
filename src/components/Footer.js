import React from 'react'
import Button from 'react-bootstrap/Button';
function Footer() {
  return (
    <footer>
      <div className="Footer">
        <img alt='tedx' src={require("../resources/TEDXVITB-logo-white.png")} />
        <div className="row">
          <div className="f first">
            <Button className="NewsLetter" variant="dark">JOIN OUR NEWSLETTER</Button>
            <p>Be the first one to hear from us ! You can unsubscribe our update anytime you want</p>
          </div>

          <div className="f second">
            <h3> Explore </h3>
            <ul className="links">
              <li><a href="">Main Event 2023</a></li>
              <li><a href="">LookBook</a></li>
              <li><a href="">Partners</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">TedxVITBhopal Newsletter</a></li>
              <li><a href="">Community Conversation</a></li>
            </ul>
          </div>

          <div className="f third">
            <h3>Contact Us</h3>
            <div className="contactLogo">
              <img alt="gmail" onclick="contacts()" src={require("./resources/gmail.png")} />
              <img alt="insta" onclick="contacts()" src={require("./resources/instagram.png")} />
              <img alt="fb" onclick="contacts()" src={require("./resources/facebook.png")} />
              <img alt="twt" onclick="contacts()" src={require("./resources/linkedin.png")} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
