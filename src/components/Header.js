import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
        
        <div className='header-header'> 
            <h1>My evolving tech</h1>
        </div>

        <div className='header-sub-1'>
            <h2>Frontend</h2> 
            <div className='header-sub-icons'>
                
            <img className='react' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="75" height="75" alt="React" />
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="75" height="75" alt="React" />
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="75" height="75" alt="React" />
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="75" height="75" alt="React" />          
            </div>
        </div>
        
    </div>
  )
}

export default Header