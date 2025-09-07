import React from "react";
import './ContactMe.css'
 
//a component for the contact me section of the home page
function ContactMe(){

    // stores input values in a state variable
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    // updates state variables on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const resetForm = () =>
        setForm({ name: "", email: "", subject: "", message: "" });

    return(
        <div id="ContactMe">
            <h1 id="Header">Contact Me</h1>
            <div id="TngsToFill">
                <div id="Name">
                    <h2 >Name: </h2>
                    <input placeholder="Type Your Name" type="text" name="name" value={form.name} onChange={handleChange} />
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