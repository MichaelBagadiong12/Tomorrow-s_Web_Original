"use client";

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState(''); // to show backend response or errors
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('https://tomorrow-s-web-original.onrender.com/api/contact', {   //fetching the server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const data = await res.json();
      setResponseMsg(data.msg || 'Message sent successfully!');
      setIsSuccess(true);

       //Adds a timer for the message for 4 seconds
      setTimeout(() => {
        setResponseMsg("");
        setIsSuccess(null);
      }, 4000);

      // Clear form inputs after successful submit
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponseMsg(error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>
        Send us a message about your concerns. Alternatively, you can contact us through our FB Page:{' '}
        <a href="https://www.facebook.com/profile.php?id=100080473587303" target="_blank" rel="noopener noreferrer">
          Gym Warrior
        </a>
      </h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-input-row">
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {responseMsg && <p className={`response-message ${isSuccess ? 'success' : 'error'}`}>{responseMsg}</p>}
    </div>
  );
};

export default Contact;