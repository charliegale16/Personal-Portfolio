import React from 'react'
import "./Nav.css";
import { BrowserRouter as Link } from 'react-router-dom';


const mainNavItems = [
    { url: '/',  label: 'Home' },
    { url: '/projects',  label: 'Projects' },
    { url: '/about',  label: 'About' },
  ]

  const socialNavItems = [
    { url: 'https://github.com/charliegale16', label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/charlesgale1', label: 'LinkedIn' }
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
                     <button> {item.label} </button>
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
                <button>{item.label}</button>
                </a>
            </div>
            
          ))}
        <div className="theme-toggle">
          <button >
          🌙
          </button>
        </div>
          </div>
          </nav>
        </div>
      </section>
    );
  };
  
  export default Nav;