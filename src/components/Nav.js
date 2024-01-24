import React from 'react'
import "./Nav.css";
import { BrowserRouter as Link } from 'react-router-dom';
import house from '../assets/icons8-home-50.png';
import bino from '../assets/icons8-binoculars-50.png';
import computer from '../assets/icons8-home-office-50.png';
import linkedin from '../assets/icons8-linkedin-50.png';
import github from '../assets/icons8-github-50.png';

const mainNavItems = [
    { url: '/', icon: house,  label: 'Home' },
    { url: '/projects', icon: computer,  label: 'Projects' },
    { url: '/about', icon: bino,  label: 'About' },
  ]

  const socialNavItems = [
    { url: 'https://github.com/charliegale16', icon: github, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/charlesgale1', icon: linkedin, label: 'LinkedIn' }
  ]

  const Nav = () => {
    return (
      <section className="navigation">
        <div className="container">
          <nav>
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
                    <button className="theme-toggle">
          🌙
          </button>
          </div>
          </nav>
        </div>
      </section>
    );
  };
  
  export default Nav;