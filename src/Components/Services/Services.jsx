import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import './Services.css';

const Services = () => {
  return (
    <div id='blog' className='services'>
      <div className='services-title'>
        <h1>My Blogs</h1>
        <img className='services-img' src={theme_pattern} alt='' />
      </div>
      <div className="services-container">
        {
          Services_Data.map((service, index) => (
            <div className='services-format' key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='services-randomore'>
                <a href={service.link} target='_blank' className="read-more-link">
                  <p>Read More</p>
                  <img src={arrow_icon} alt='arrow' />
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
