import React from "react";
import "./WelBar.css";
import MyPic from '/Users/amanuels/Desktop/personal-website/src/pics/homepage.jpg'
import TypeWriter from "../TypeWriter";

function WelcomeBar(){
    return(
        <div id="WelBar">
            <div id="WelOne">
                <b id="WelText"> <TypeWriter text={"Welcome To My Portfolio"}/> </b>
            </div>
            <div id="WelTwo">
                <div id="WelNote">
                    <b>INTRO</b>
                    <p> 
                        Welcome. My name is Amanuel Kebede Fissiha. I am a student who is growing with the purpose 
                        of becoming someone very useful to society. This online website aims to showcase my professional and personal journey 
                        in life. Throughout the website, I'll be sharing some details of my journey, my
                        achievements, and my challenges. I hope it is insightful into the type of person I am, and trying to be.
                    </p>
                </div>
                <div>< img id="pic" src={MyPic} alt="A pic of Me" /> </div>
            </div>
        </div>
    )
}export default WelcomeBar;