import React from "react";
import './DeeperBar.css'
import AboutMe from '../../pics/AboutMe.png';
import Projects from '../../pics/Projects.png';
import TypewriterGlitchText from '../TypewriterGlitchText';
 
// Component that displys the other pages as options to chose from
function DeeperBar(){
    return(
        <div id="deeper-section">
            <TypewriterGlitchText as="h1" className="section-header" text="Dive Deeper" typingSpeed={80} hoverOnly />
            <div id="Options">
                <img id="AboutMe" src={AboutMe} alt="representation of about me"/>

                <img id="Projects" src={Projects} alt="representation of projects"/>
            </div>
        </div>
    )

}export default DeeperBar