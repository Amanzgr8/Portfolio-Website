import React from "react";
import './ContactMe.css'
import TypewriterGlitchText from '../TypewriterGlitchText';
 
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:amanuel.fissiha@mnsu.edu?subject=${subject}&body=${body}`;
        resetForm();
    };

    return(
        <div id="contact-section">
            <TypewriterGlitchText as="h1" className="section-header" text="Contact Me" typingSpeed={80} hoverOnly />
            <form id="TngsToFill" onSubmit={handleSubmit}>
                <div id="Name">
                    <h2 >Name: </h2>
                    <input placeholder="Type Your Name" type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div id="Email">
                    <h2>Email: </h2>
                    <input placeholder="Type Your Email" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div id="Subject">
                    <h2>Subject: </h2>
                    <input placeholder="Type Subject" type="text" name="subject" value={form.subject} onChange={handleChange} />
                </div>
                <div id="Message">
                    <h2>Message: </h2>
                    <textarea
                        name="message"
                        rows="4"
                        cols="100"
                        placeholder="Enter your message here..."
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button id="SubmitButton" type="submit">Submit</button>
            </form>
        </div> 
    )
}export default ContactMe