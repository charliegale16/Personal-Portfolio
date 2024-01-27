import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
        <p> Developed by </p>
        <Link to='/about' className='underlined'>
        <p className='underlined' >
          Charlie Gale
        </p> 
        </Link>
        <p> © 2024</p>
        </div>
  )
}

export default Footer