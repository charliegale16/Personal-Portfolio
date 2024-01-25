import React from 'react'
import "./Contact.css";

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
              <a href="https://www.github.com/charliegale16" target="_blank" rel="noreferrer"> <picture> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" alt="github" width="50" height="50" /> </picture> </a>
              <a href="https://www.linkedin.com/in/charlesgale1" target="_blank" rel="noreferrer"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" alt="linkedin" width="50" height="50" /> </picture> </a>
                <a href="https://discord.com/users/chawwwa" target="_blank" rel="noreferrer"> <picture> <source media="(prefers-color-scheme: dark)" srcset="undefined" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" alt="discord" width="50" height="50" /> </picture> </a>
                <h1>Email</h1>
                <h1>Resume</h1>
              </div>
            </div>  
        </div>
  )
}

export default Contact