import React from 'react'
import "./Contact.css";
import email from '../assets/icons8-email-100.png';
import resume from '../assets/icons8-resume-64.png';
import resdown from '../assets/resume2024.pdf';
import github from '../assets/icons8-github-64.png'
import linkedin from '../assets/icons8-linkedin-100.png';
import discord from '../assets/icons8-discord-100.png';


function sendEmail() {
  window.location.href = 'mailto:charliegale16@gmail.com'; // Replace with your email address
}

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resdown; // Replace with the correct path to your resume file
    link.download = 'Charlie-Gale-Resume-2024.pdf'; // Specify the file name to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


const Contact = () => {
  return (
    <div className='contact-container'>
        
            <div className='contact-header'>
                <h1>Get in touch with me!</h1>
                
            </div>
            <div className='contact-description'>
              <p>Are you interested in collaboration? Feel free to reach out!</p>
            </div>
            <div className='contact-socials-container'>
              <div className='contact-socials'>
              <a href="https://www.github.com/charliegale16" target="_blank" rel="noreferrer"> <button><img src={github} id="github" alt="github" width="55" height="55" /><p>Github</p></button></a>
              <a href="https://www.linkedin.com/in/charlesgale1" target="_blank" rel="noreferrer"><button> <img src={linkedin} id="linkedin" alt="linkedin" width="55" height="55" /><p>LinkedIn</p></button></a>
              <a href="https://discord.com/users/chawwwa" target="_blank" rel="noreferrer"><button><img src={discord} id="discord" alt="discord" width="55" height="55" /><p>Discord</p></button></a> 
              <a><button onClick={sendEmail}><img className='icon' id="email" src={email} alt="email" width="55" height="55" ></img><p>Email</p></button></a>
              <a ><button onClick={handleDownload}> <img className='icon' id="resume" src={resume} alt="resume" width="55" height="55"></img><p>Resume</p></button></a> 
              </div>
            </div>  
        </div>
  )
}

export default Contact