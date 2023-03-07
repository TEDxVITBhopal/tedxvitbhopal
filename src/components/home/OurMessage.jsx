import React from "react";
import "./OurMessage.css";
import Logo from "../../resources/logo.png";

function OurMessage() {
  return (
    <div className="container">
      <div className="content-container">
        <div className="image-container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="right-side">
          <div className="center">
            <span className="red">Cosmic&nbsp;</span>
            <span className="black">Butterfly</span>
        </div>
          <div className="content1">
          TEDx VIT Bhopal's chapter theme of "Cosmic Butterfly" is in itself a mission to explore the intersection of science, art, and the metaphysical, and to promote a deeper understanding of the interconnectedness of all things in the universe. We hope to evoke awe and curiosity about the mysteries of the cosmos and encourage attendees to think deeply about how we can create a more sustainable and harmonious relationship with the world naturally, and as such - the message of TEDx VIT Bhopal's "Cosmic Butterfly" theme is to ignite action and build together a diverse community of individuals who are passionate about creating positive change and fostering a greater appreciation for the beauty and complexity of the universe. Speakers at the event explore a wide range of topics, from the latest scientific discoveries about the universe to the metaphysical and physiological perspectives on our place in it. Ultimately, the mission of TEDx VIT Bhopal's "Cosmic Butterfly" theme is to foster a sense of wonder, curiosity, and connection among attendees, and to inspire them to take action towards creating a more sustainable and harmonious world.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMessage;
