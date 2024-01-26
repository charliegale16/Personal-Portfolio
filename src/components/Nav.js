import React, { useState } from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';
import house from '../assets/icons8-home-50.png';
import bino from '../assets/icons8-binoculars-50.png';
import computer from '../assets/icons8-home-office-50.png';
import linkedin from '../assets/icons8-linkedin-50.png';
import github from '../assets/icons8-github-50.png';
import sun from '../assets/icons8-sun-96.png';
import moon from '../assets/icons8-new-moon-96.png';


const mainNavItems = [
    { url: '/', icon: house,  label: 'Home' },
    { url: '/projects', icon: computer,  label: 'Projects' },
    { url: '/about', icon: bino,  label: 'About' },
  ]

  const socialNavItems = [
    { url: 'https://github.com/charliegale16', icon: github, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/charlesgale1', icon: linkedin, label: 'LinkedIn' }
  ]

  const Nav = ({theme, toggleTheme}) => {

  


    return (
      <section className="navigation">
        <div className="container">
        <nav className={`app ${theme === 'dark' ? 'app-light' : 'app-dark'}`}>
              <div className="nav-items"> {/* Use a ul to contain the buttons */}
                {mainNavItems.map((item) => (
                  <div className="nav-item-left" key={item.url}>
                    <Link
                      to={item.url}
                      key={item.label}
                      className={`item ${item.mobileOnly ? 'mobile-only' : ''}`}
                    >
                     <button> 
                     <img src={item.icon} alt={item.label} className="nav-image" />
                      <span>{item.label}</span>
                      </button>
                    </Link>
                  </div>
                ))}
          

            {socialNavItems.map((item) => (
            <div className="nav-item-right" key={item.url}>
              <a
                href={item.url}
                key={item.label}
                className={`desktop-only item ${(item.label)}`}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                <img src={item.icon} alt={item.label} className="nav-image" />
                    <span>{item.label}</span>
                  </button>
                </a>
            </div>
            
          ))}
                    <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? (
        <>
          <img src={sun} alt="Sun" className="mr-2" />
        </>
      ) : (
        <>
          <img src={moon} alt="Moon" className="mr-2" />
        </>
      )}
          </button>
          </div>
          </nav>
        </div>
      </section>
    );
  };
  
  export default Nav;