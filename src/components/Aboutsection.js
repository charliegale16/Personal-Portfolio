import React from 'react'
import './Aboutsection.css'

const Aboutsection = () => {
  return (
    <div className='about-container'>
        <div className='about-header'> 
            <h1>About me</h1>
        </div>
        <div className='about-bio'>
            <p>Hello there! I'm Charlie, a recent graduate from California State University Fullerton, where I earned my bachelor's degree in computer science. I'm currently seeking opportunities to apply my skills and passion for software engineering in a dynamic work environment. With a keen interest in building innovative projects, I'm excited to contribute to meaningful initiatives that push the boundaries of technology.</p>
            <p>Outside of work, I enjoy gaming 🎮, going for hikes 🥾, and staying active at the gym 💪. </p>
            <p>Feel free to explore my portfolio to see some of my projects and get in touch if you'd like to discuss how we can collaborate on your next project!</p>
            <div className='about-email-section'>
            <p>You can contact me by </p><p>email at </p> <p className='underlined'>charliegale16@gmail.com</p>
            </div>
            </div>
    </div>
  )
}

export default Aboutsection