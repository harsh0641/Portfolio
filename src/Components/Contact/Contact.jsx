import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import phone from '../../assets/call_icon.svg';
import location from '../../assets/location_icon.svg';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required.';
    if (!formState.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = 'Enter a valid email.';
    if (!formState.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const formData = new FormData(event.target);

    formData.append('access_key', 'cde6b886-67a2-48c7-82c6-b42c1aeffe0f');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert('Email Sent Successfully');
      setFormState({ name: '', email: '', message: '' }); // Clear form
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
          Reach out for collaborations or questions ! Let’s create something amazing together.
          </p>
          <div className="contact-details">
            <div className="contact-detail" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="mailto:hvora@umassd.edu" className="contact-link" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={mail} alt="" style={{ marginRight: '8px' }} />
                <p>hvora@umassd.edu</p>
              </a>
            </div>
            <div className="contact-detail" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="tel:+17747040799" className="contact-link" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={phone} alt="" style={{ marginRight: '8px' }} />
                <p>+1 (774)-704-0799</p>
              </a>
            </div>
            <div className="contact-detail" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://maps.google.com/?q=285+old+westport+rd" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={location} alt="" style={{ marginRight: '8px' }} />
                <p>Dartmouth, MA 02747</p>
              </a>
            </div>
            {/* New Social Media Links */}
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/harshvora14/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/harsh0641" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.youtube.com/@jainisminsights1406" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right" autoComplete="off">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message">Write Your Message</label>
          <textarea
            rows="8"
            placeholder="Enter your message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
