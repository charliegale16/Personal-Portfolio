import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = ({theme}) => {
  return (
    <div className='App'>
      <Hero theme={theme}/>
      <Header />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home