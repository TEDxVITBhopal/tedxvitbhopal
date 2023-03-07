import React from "react";
import "./Welcome.css";
import WelcomeImg from "../../resources/tempo-welcome.png";

const WelcomeScreen = () => {
    return(
        <>
        <div className="left">
            <img src={WelcomeImg} alt={"Welcome"} className="welcome-img"/>
        </div>
        <div className="right">
            <h1 className="quote">
                Vision begins with the eyes,
                <span className="red"> but it truly takes place in the brain</span>.
            </h1>
        </div>
        </>
    )
}

export default WelcomeScreen;