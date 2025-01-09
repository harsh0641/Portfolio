import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');  // Clear error when user starts typing again
        setSuccessMessage(''); // Clear success message when user starts typing again
    };

    const validateEmail = () => {
        // Regular expression for validating email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            setSuccessMessage('Thank you for subscribing!');

            // Hide success message after 1 second
            setTimeout(() => {
                setSuccessMessage('');
                setEmail('')
            }, 1500);
        }
    };

    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src={footer_logo} alt='' />
                    <p>Grow together, succeed together.
                        <br /><span><b>Let’s Connect!</b></span></p>
                </div>
                <div className='footer-top-right'>
                    <div>
                        <div className='footer-email-input'>
                            <img src={user_icon} alt='' />
                            <input
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <div className='footer-subscriber' onClick={validateEmail}>
                                Subscribe
                            </div>
                        </div>
                        {error && <p className='footer-message footer-error'>{error}</p>}
                        {successMessage && <p className='footer-message footer-success'>{successMessage}</p>}
                    </div>
                </div>

            </div>

            <hr />

            <div className='footer-bottom'>
                <p className='footer-bottom-left'>&copy; 2024 Harsh Vora. All rights reserved.</p>

                <div className='footer-bottom-right'>
                    <p><a href='mailto:hvora@umassd.edu' style={{ textDecoration: 'none', color: 'white' }}>Terms & Services</a></p>

                    <p><a href='mailto:hvora@umassd.edu' style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</a></p>

                    <p><a href='mailto:hvora@umassd.edu' style={{ textDecoration: 'none', color: 'white' }}>Connect with me</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
