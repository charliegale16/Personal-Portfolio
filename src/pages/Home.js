import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import { useRef } from 'react';

const Home = ({theme}) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='App'>
      <Hero theme={theme} scrollToContact={scrollToContact}/>
      <Header />
      <Projects />
      <div ref={contactRef}>
      <Contact  />
      </div>
    </div>
  )
}

export default Home