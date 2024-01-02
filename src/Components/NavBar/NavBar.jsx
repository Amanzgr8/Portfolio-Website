import React from "react";
import './NavBar.css';
import TypeWriter from "../TypeWriter";

//Navigation bar of the website, shoud be avaliable on all pages
function Navbar(){
    return(
        <div id="NavBar">
            {/* Need to attach links to each button */}
            <button id="NavHead"> <TypeWriter text={"Amanuel's Portfolio"} typingSpeed={50}/></button>
            <button id="Option"><TypeWriter text={"About Me"} typingSpeed={50}/></button>
            <button><TypeWriter text={"Projects"} typingSpeed={50}/></button>
            <button><TypeWriter text={"Honors Program"} typingSpeed={50}/></button>       
    </div>
    )
}
export default Navbar