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
                This is a <span className="red">very inspiring</span> quote,
                and you should <span className="red">learn something</span>.
            </h1>
        </div>
        </>
    )
}

export default WelcomeScreen;