import React from "react";
import "./OurMessage.css";
import questionMark from "../resources/Question-mark.png";

function OurMessage() {
  return (
    <div className="container">
      <div className="center">
        <span className="red">Our </span>
        <span className="black">Message</span>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img className="question-mark" src={questionMark} alt="" />
        </div>
        <div className="content1">
          TEDx is a grassroots initiative, created in the spirit of TED’s overall
          mission to research and discover “ideas worth spreading.” TEDx brings
          the spirit of TED to local communities around the globe through TEDx
          events. These events are organized by passionate individuals who seek to
          uncover new ideas and to share the latest research in their local areas
          that spark conversations in their communities. TEDx events include live
          speakers and recorded TED Talks, and are organized independently under a
          free license granted by TED. These events are not controlled by TED, but
          event organizers agree to abide by our format, and are offered
          guidelines for curation, speaker coaching, event organizing and more.
          They learn from us and from each other. More than 3000 events are now
          held annually.
        </div>
      </div>
    </div>
  );
}

export default OurMessage;
