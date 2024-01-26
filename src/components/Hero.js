import React from 'react'
import "./Hero.css";
import resdown from '../assets/resume2024.pdf';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resdown; // Replace with the correct path to your resume file
  link.download = 'Charlie-Gale-Resume-2024.pdf'; // Specify the file name to be downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Hero = () => {
  return (
<div className='hero-container'>
  <div className='hero-left'>
    <img src='https://i.imgur.com/5rlpyyZ.jpg' alt='Profile'></img>
  </div>
  <div className='hero-right'>
    <h1>Charlie Gale</h1>
    <p>Hey there 👋, I'm Charlie, a software engineer passionate about creating new things and bringing ideas to life with programming.</p>
    <div className='hero-right-3-under'>
        <button onClick={handleDownload}>Download CV</button>
        <button>Connect with me ⚡️</button>
    </div>
  </div>
</div>
  )
}

export default Hero