import React from "react";
import "./OurMessage.css";
import chapterLogo from "../../resources/chapter-logo.png";

function OurMessage() {
  return (
    <>
      <aside id="message-modal" className="read-more-modal">
        <section className="read-more-writeup">
          <div>
            <h1><strong>Cosmic <span style={{color: 'red'}}>Butterfly</span></strong></h1>
            <br></br>
            The message of TEDx VIT Bhopal's<em>&nbsp;Cosmic Butterfly&nbsp;</em>
            theme is to ignite action and build together a diverse community of individuals who are
            passionate about creating positive change and fostering a greater appreciation for the
            beauty and complexity of the universe. Speakers at the event explore a wide range of topics,
            from the latest scientific discoveries about the universe to the metaphysical and
            physiological perspectives on our place in it. Ultimately, the mission of TEDx VIT Bhopal's
            "Cosmic Butterfly" theme is to foster a sense of wonder, curiosity, and connection among
            attendees, and to inspire them to take action towards creating a more sustainable and
            harmonious world.
          </div>
          <button 
            style={{width : '100px'}} 
            className="read-more-button"
            onClick={() => document.getElementById('message-modal').style.display = 'none'}>
              Close
          </button>
        </section>
      </aside>
      <section id="our-message-container" className="our-message-container">
        <header className="our-message-title">
          Cosmic&nbsp;<span style={{color: 'red'}}>Butterfly</span>
        </header>
        <section className="our-message-content">
          <figure className="left pane">
            <img className="our-message-image" src={chapterLogo} alt="TEDx logo with VITB lion" />
          </figure>
          <article className="right pane">
            <p className="our-message-writeup">
              TEDx VIT Bhopal's chapter theme of <em>"Cosmic Butterfly"</em> is in itself a mission to explore
              the intersection of science, art, and the metaphysical, and to promote a deeper
              understanding of the interconnectedness of all things in the universe. We hope to
              evoke awe and curiosity about the mysteries of the cosmos and encourage attendees to
              think deeply about how we can create a more sustainable and harmonious relationship with
              the world naturally.
            </p>
            <button 
              className="read-more-button"
              onClick={() => document.getElementById('message-modal').style.display = 'flex'}>
                Read More
            </button>
          </article>
        </section>
      </section>
    </>
  );
}

export default OurMessage;
