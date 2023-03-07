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
            <span className="black">Butterflies</span>
        </div>
          <div className="content1">
            TEDx is a grassroots initiative, created in the spirit of TED’s overall
            mission to research and discover “ideas worth spreading.” TEDx brings
            the spirit of TED to local communities around the globe through TEDx
            events. These events are organized by passionate individuals who seek to
            uncover new ideas and to share the latest research in their local areas
            that spark conversations in their communities.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMessage;
