import React from "react";
import "./WelBar.css";
import MyPic from '/Users/amanuels/Desktop/personal-website/src/pics/homepage.png'
import TypeWriter from "../TypeWriter";
import ScrollText from "../scrolltext";

function WelcomeBar(){
    return(
        <div id="WelBar">
            <div id="WelOne">
                <b id="WelText"> <TypeWriter text={"Welcome To Amanuel's Portfolio"}/> </b>
            </div>
            <div id="WelTwo">
                <div id="WelNote">
                   <b> <ScrollText text = {'Intro'} scrollLength = {300}/></b>

                    <ScrollText 
                        speed={20} 
                        scrollLength={300} 
                        text={`
                            Welcome. My name is Amanuel Kebede Fissiha.
                            I am a student who is growing with the purpose of becoming someone very useful to society.
                            This online website aims to showcase my professional and personal journey in life.
                            Throughout the website, I'll be sharing some details of my journey, my achievements, and my challenges.
                            I hope it is insightful into the type of person I am, and trying to be.
                            `}
                    /> 
                        
                    
                </div>
                <div>< img id="pic" src={MyPic} alt="A pic of Me" /> </div>
            </div>
        </div>
    )
}export default WelcomeBar;