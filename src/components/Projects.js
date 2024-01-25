import React from 'react'
import './Projects.css';
import workout from "../assets/workout_generator1.png";
import cloudmap from '../assets/cloudmap_screenshot.JPG';
import spaceinvaders from '../assets/space_invaders_screenshot.PNG'

const projectsItems = [
    {name:"Workout Generator", icon: workout, desc:'Workout Generator is a web application that generates random workouts based on user input.', id:"projects-card-button1", date:" Made in 2023"},
    {name:"Space Invaders", icon: spaceinvaders, desc:'Python-based Space Invaders made with custom sprites, creating an immersive gaming experience', id:"projects-card-button2", date:" Made in 2022"},
    {name:"CloudMap", icon: cloudmap, desc:'A web application that displays a google maps page with custom filters provided by the user.', id:"projects-card-button3", date:" Made in 2022"}


  ]


const Projects = () => {
  return (
    <section id='projects'>
        <div className='projects-container'>
            <div className='projects-header'>
                <h1>Projects</h1>
                <button>View All</button>
                
            </div>
            <div className='projects-description'>
            <p>I'm currently familiar with these technologies, but always eager to learn and explore new ones!</p>
            </div>
            <div className='projects-card-container'>
                {projectsItems.map((item) => (
                <div className='projects-card'>
                    <div className='projects-card-left'>
                        <h2>{item.name}</h2>
                        <i>{item.date}</i>
                        <p>{item.desc}</p>
                        <div className={item.id}>
                            <button className='github'>Github</button>
                            <button className='live'>Live</button>
                        </div>
                    </div>
                    <div className='projects-card-right'>
                        <img src={item.icon} alt={item.name} className="project-image" />
                    </div>
                        
                </div>
                ))}
            </div>    
        </div>
    </section>
  )
}

export default Projects