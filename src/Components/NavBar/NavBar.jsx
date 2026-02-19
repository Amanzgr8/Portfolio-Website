import React from "react";
import './NavBar.css';
import TypewriterGlitchText from "../TypewriterGlitchText";

//Navigation bar of the website, shoud be avaliable on all pages
function Navbar(){
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <div id="NavBar">
            {/* Need to attach links to each button */}
            <button id="NavHead" onClick={() => scrollToSection('welcome-section')}>
                <TypewriterGlitchText text="Amanuel's Portfolio" typingSpeed={80} hoverOnly baseOnly />
            </button>
            <button className="nav-option" onClick={() => scrollToSection('about-section')}>
                <TypewriterGlitchText text="About Me" typingSpeed={80} hoverOnly baseOnly />
            </button>
            <button className="nav-option" onClick={() => scrollToSection('deeper-section')}>
                <TypewriterGlitchText text="Projects" typingSpeed={80} hoverOnly baseOnly />
            </button>
    </div>
    )
}
export default Navbar