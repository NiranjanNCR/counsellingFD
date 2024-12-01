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
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data for submission
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) {
      data.append('file', file);
    }

    try {
const response = await fetch('https://counselling-b.vercel.app/submit', {
  method: 'POST',
  body: data,
});


      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', number: '', message: '' });
        setFile(null);
      } else {
        const errorData = await response.text();
        console.error('Server error:', errorData);
        alert('Failed to submit the form. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
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
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="107"
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
