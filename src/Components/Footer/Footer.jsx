import React from "react";
import './Footer.css'
import Linkeden from '/Users/amanuels/Desktop/personal-website/src/pics/linkedin.png'

 
// Component that displys the other pages as options to chose from
function Footer(){
    return(
        <div id="footer">
            <div><h2 id="Text"> Email: amanuel.fissiha@mnsu.edu <br/> Copyright: 2022; Designed By Amanuel Fissha</h2></div>
            <div id="logos">
                <a href="https://www.linkedin.com/in/amanuel-kebede-80b91a231/">
                    <img src={Linkeden} alt="Linkedin Logo" height={40} width={40}/>
                </a>
            </div>
        </div>
    )

}export default Footer