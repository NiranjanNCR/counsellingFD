import React, { useState } from 'react';
import '../css/style.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-zmca.onrender.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', email: '', number: '', message: '' });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="form-sec">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-items">
          <h1>Contact Us</h1>
          <div className="div-input">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="div-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
