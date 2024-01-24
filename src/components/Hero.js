import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
<div className='hero-container'>
  <div className='hero-left'>
    <img src='https://i.imgur.com/5rlpyyZ.jpg' alt='Profile Picture'></img>
  </div>
  <div className='hero-right'>
    <h1>Charlie Gale</h1>
    <p>Hey there 👋, I'm Charlie, a software engineer passionate about creating new things and bringing ideas to life with programming.</p>
    <div className='hero-right-3-under'>
        <button>Download CV</button>
        <button>Connect with me ⚡️</button>
    </div>
  </div>
</div>
  )
}

export default Hero