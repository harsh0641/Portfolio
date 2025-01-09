import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.jpeg'
import HV from '../../assets/Harsh_Vora_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='hero-img' src={profile} alt='' />
      <h1>I'm<span> Harsh Vora </span>, Full-Stack Developer Based in USA.</h1>
      <p>
        Where Code Meets Creativity to Shape the Future.
      </p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className='anchorlink' offset={50} href='#contact'>
            <p>Connect with me</p>
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href={HV} style={{textDecoration:'none', color:'white'}} download='Harsh_Vora_Resume.pdf'>
            My resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
