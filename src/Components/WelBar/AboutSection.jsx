import React from "react";
import "./WelBar.css";
import MyPic from '../../pics/homepage.png';
import TypewriterGlitchText from "../TypewriterGlitchText";

function AboutSection() {
    return (
        <div id="about-section" className="section">
            <div id="WelTwo" className="content-row">
                <div id="WelNote">
                    <TypewriterGlitchText as="h1" className="sub-header" text="About Me" typingSpeed={85} hoverOnly baseOnly />
                    <p className="about-copy">
                        Welcome. My name is Amanuel Kebede Fissiha.
                        I am a student who is growing with the purpose of becoming someone very useful to society.
                        This online website aims to showcase my professional and personal journey in life.
                        Throughout the website, I'll be sharing some details of my journey, my achievements, and my challenges.
                        I hope it is insightful into the type of person I am, and trying to be.
                    </p>
                </div>
                <div id="picWrap"><img id="pic" src={MyPic} alt="A pic of Me" /></div>
            </div>
        </div>
    );
}

export default AboutSection;
