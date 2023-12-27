import React from "react";
import './NavBar.css';

//Navigation bar of the website, shoud be avaliable on all pages
function Navbar(){
    return(
        <div id="NavBar">
            {/* Need to attach links to each button */}
            <button id="NavHead">Amanuel's Portfolio</button>
            <button id="Option">About Me</button>
            <button>Projects</button>
            <button>Honors Program</button>       
    </div>
    )
}
export default Navbar