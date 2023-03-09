import React from "react";
import "./Welcome.css";
import WelcomeImg from "../../resources/tempo-welcome.png";

const WelcomeScreen = () => {
    return(
        <section className="welcome-section">
            <figure className="welcome-pane">
                <img src={WelcomeImg} alt="Welcome" className="welcome-image"/>
            </figure>
            <blockquote className="welcome-pane">
                <h1 className="quote">
                Vision begins with the eyes,
                <span className="#eb0028">&nbsp;but it truly takes place in the brain</span>.
                </h1>
            </blockquote>
        </section>
    )
}

export default WelcomeScreen;