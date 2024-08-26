import React, { useState } from "react";
import PizzaLeft from "../assets/contact.jpg";
import "../styles/Contact.css";
import emailjs from 'emailjs-com';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });

    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
