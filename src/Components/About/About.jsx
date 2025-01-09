import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import theme from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile1.jpeg';

const About = () => {
    const [counts, setCounts] = useState({ experience: 0, projects: 0, clients: 0 }); // Counter state
    const aboutRef = useRef(null); // Ref for "About" section
    const [isVisible, setIsVisible] = useState(false); // Tracks visibility of the "About" section

    useEffect(() => {
        // Intersection Observer to detect when the "About" section is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger counting animation
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current); // Observe the "About" section
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current); // Cleanup observer on unmount
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Counting animation logic
            const duration = 2000; // Total animation duration in milliseconds
            const incrementCounts = () => {
                const start = { experience: 0, projects: 0, clients: 0 };
                const end = { experience: 2, projects: 9, clients: 11 }; // Final target numbers
                const steps = 60; // Number of animation steps
                const interval = duration / steps; // Time per step

                let currentStep = 0;

                const intervalId = setInterval(() => {
                    if (currentStep >= steps) {
                        setCounts(end); // Ensure numbers stop at their targets
                        clearInterval(intervalId);
                    } else {
                        const progress = currentStep / steps;
                        setCounts({
                            experience: Math.ceil(start.experience + (end.experience - start.experience) * progress),
                            projects: Math.ceil(start.projects + (end.projects - start.projects) * progress),
                            clients: Math.ceil(start.clients + (end.clients - start.clients) * progress),
                        });
                        currentStep++;
                    }
                }, interval);
            };

            incrementCounts(); // Start animation
        }
    }, [isVisible]); // Dependency ensures animation starts only when visible

    return (
        <div id='about' className='about' ref={aboutRef}>
            <div className="about-title">
                <h1>About me</h1>
                <img className='about-img' src={theme} alt='' />
            </div>
            <div className='about-section'>
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>
                            Dynamic Fullstack Developer pursuing a
                            Master's in Computer Science at the
                            <span>  <a href='https://www.umassd.edu/'>University
                                of Massachusetts Dartmouth.</a> </span>Skilled in React.js
                            with proficiency in backend technologies like
                            Node.js and database management.
                        </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>React Js</p>
                            <div className='skill-bar'>
                                <hr style={{ width: '90%' }} />
                                <span className='skill-percentage'>90%</span>
                            </div>
                        </div>
                        <div className='about-skill'>
                            <p>Python & Machine Learning</p>
                            <div className='skill-bar'>
                                <hr style={{ width: '80%' }} />
                                <span className='skill-percentage'>80%</span>
                            </div>
                        </div>
                        <div className='about-skill'>
                            <p>Node Js</p>
                            <div className='skill-bar'>
                                <hr style={{ width: '70%' }} />
                                <span className='skill-percentage'>70%</span>
                            </div>
                        </div>
                        <div className='about-skill'>
                            <p>Cloud Services (Azure , AWS)</p>
                            <div className='skill-bar'>
                                <hr style={{ width: '70%' }} />
                                <span className='skill-percentage'>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>{counts.experience}+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>{counts.projects}+</h1>
                    <p>PROJECTS</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>{counts.clients}+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;
