import React, { useState } from 'react';
import './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Message sent!');
    };

    return (
        <div id="contact" className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                    />
                </label>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Send</button>
                    <button type="button" className="close-button" onClick={() => setFormData({ name: '', email: '', message: '' })}>Close</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
