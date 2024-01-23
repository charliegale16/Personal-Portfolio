import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
<div class='hero-container'>
  <div class='hero-left'>
    <img src='https://i.imgur.com/5rlpyyZ.jpg' alt='Profile Picture'></img>
  </div>
  <div class='hero-right'>
    <h1>Charlie Gale</h1>
    <p>Hey there, I'm Charlie, a software engineer passionate about creating new things and bringing ideas to life with programming.</p>
  </div>
</div>
  )
}

export default Hero