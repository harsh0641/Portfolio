import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure the page scrolls to the top when it reloads
    window.scrollTo(0, 0);

    // Scroll to the home section with smooth scroll
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false); // Close the mobile menu when an item is clicked
  };

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt='Logo' className='navbar-logo' />
        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <AnchorLink className='anchorlink' href='#home'>
              <p onClick={() => handleMenuClick('home')}>Home</p>
            </AnchorLink>
            <img
              src={underline}
              alt='Underline'
              className={menu === 'home' ? 'active' : ''}
            />
          </li>

          <li>
            <AnchorLink className='anchorlink' offset={100} href='#about'>
              <p onClick={() => handleMenuClick('about')}>About Me</p>
            </AnchorLink>
            <img
              src={underline}
              alt='Underline'
              className={menu === 'about' ? 'active' : ''}
            />
          </li>

          <li>
            <AnchorLink className='anchorlink' offset={100} href='#blog'>
              <p onClick={() => handleMenuClick('services')}>Blog</p>
            </AnchorLink>
            <img
              src={underline}
              alt='Underline'
              className={menu === 'services' ? 'active' : ''}
            />
          </li>

          <li>
            <AnchorLink className='anchorlink' offset={100} href='#work'>
              <p onClick={() => handleMenuClick('work')}>Portfolio</p>
            </AnchorLink>
            <img
              src={underline}
              alt='Underline'
              className={menu === 'work' ? 'active' : ''}
            />
          </li>

          <li>
            <AnchorLink className='anchorlink' offset={100} href='#contact'>
              <p onClick={() => handleMenuClick('contact')}>Contact</p>
            </AnchorLink>
            <img
              src={underline}
              alt='Underline'
              className={menu === 'contact' ? 'active' : ''}
            />
          </li>
        </ul>

        <div className='nav-connect'>
          <AnchorLink className='anchorlink' offset={100} href='#contact'>
            <p onClick={() => handleMenuClick('contact')}>Connect with me</p>
          </AnchorLink>
        </div>

        <div
          className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
