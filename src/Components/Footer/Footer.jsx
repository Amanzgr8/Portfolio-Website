import React from "react";
import './Footer.css'
import Linkeden from '../../pics/linkedin.png';
import Instagram from '../../pics/Instagram.png';

 
// Component that displys the other pages as options to chose from
function Footer(){
    const year = new Date().getFullYear();

    return(
        <div id="footer">
            <div><h2 id="Text"> Email: amanuel.fissiha@mnsu.edu <br/> Copyright: {year}; Designed By Amanuel Fissha</h2></div>
            <div id="logos">
                <a href="https://www.linkedin.com/in/amanuel-kebede-80b91a231/" target="_blank" rel="noreferrer">
                    <img src={Linkeden} alt="Linkedin Logo" height={40} width={40}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="Instagram Logo" height={40} width={40}/>
                </a>
            </div>
        </div>
    )

}export default Footer