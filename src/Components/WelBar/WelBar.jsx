import React from "react";
import "./WelBar.css";
import TypewriterGlitchText from "../TypewriterGlitchText";

function WelcomeBar(){
    return(
        <div id="welcome-section" className="section" >
            <div id="WelOne" className="welcome-only">
                <TypewriterGlitchText as="h1" id="WelText" text="Welcome" typingSpeed={100} hoverOnly baseOnly intensity="high" />
            </div>
        </div>
    )
}export default WelcomeBar;