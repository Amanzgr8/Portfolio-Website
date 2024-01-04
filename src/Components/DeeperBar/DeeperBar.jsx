import React from "react";
import './DeeperBar.css'
import AboutMe from "/Users/amanuels/Desktop/personal-website/src/pics/AboutMe.png"
import Projects from "/Users/amanuels/Desktop/personal-website/src/pics/Projects.png"
import Honors from "/Users/amanuels/Desktop/personal-website/src/pics/Honors.png"
 
// Component that displys the other pages as options to chose from
function DeeperBar(){
    return(
        <div id="DeeperBar">
            <h1 id="Header">Dive Deeper</h1>
            <div id="Options">
                <img id="AboutMe" src={AboutMe} alt="representation of about me"/>

                <img id="Projects" src={Projects} alt="representation of projects"/>
                
                <img id="Honors" src={Honors} alt="representation of honors"/>
                
            </div>
        </div>
    )

}export default DeeperBar