import React from "react";
import './ContactMe.css'
 
//a component for the contact me section of the home page
function ContactMe(){

    <script>
        document.querySelector("#contact").addEventListener("submit", async (e) => {
            e.preventDefault();
            const f = e.target;
            const data = {
                name: f.name.value,
                email: f.email.value,
                message: f.message.value
            };

        const res = await fetch("YOUR_WEB_APP_URL", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        alert(res.ok ? "Message sent! 🎉" : "Something went wrong 😕");
        
        });
    </script>
    
    return(
        <div id="ContactMe">
            <h1 id="Header">Contact Me</h1>
            <div id="TngsToFill">
                <div id="Name">
                    <h2 >Name: </h2>
                    <input placeholder="Type Your Name" type="text" />
                </div>
                <div id="Email">
                    <h2>Email: </h2>
                    <input placeholder="Type Your Email" type="text" pattern="amanuelk81@gmail.com" />
                </div>
                <div id="Subject">
                    <h2>Subject: </h2>
                    <input placeholder="Type Subject" type="text" />
                </div>
                <div id="Message">
                    <h2>Message: </h2>
                    {/* <input placeholder="Type Message Here" id="MessageBox"  type="text"/> */}
                    <textarea  name="messageInput" rows="4" cols="100">
                        Enter your message here...
                    </textarea>
                </div>
            </div>
            <button id="SubmitButton" type="button">Submit</button>
        </div> 
    )
}export default ContactMe