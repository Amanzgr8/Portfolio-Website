import React from "react";
import './DeeperBar.css'
 
// Component that displys the other pages as options to chose from
function DeeperBar(){
    return(
        <div id="DeeperBar">
            <h1 id="Header">Dive Deeper</h1>
            <div id="Options">
                <div id="Me">
                    <h2>More About Me</h2>
                </div>
                <div id="Projects">
                    <h2>Projects</h2>
                </div>
                <div id="Honors">
                    <h2>Honors</h2>
                </div>
            </div>
        </div>
    )

}export default DeeperBar