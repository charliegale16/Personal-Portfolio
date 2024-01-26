import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='App'>
      <Hero />
      <Header />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home