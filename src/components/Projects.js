import React from 'react'
import './Projects.css';
import workout from "../assets/workout_generator1.png";
import cloudmap from '../assets/cloudmap_screenshot.JPG';
import spaceinvaders from '../assets/space_invaders_screenshot.PNG'
import { Link } from 'react-router-dom';

const projectsItems = [
    {name:"Workout Generator", icon: workout, desc:'Workout Generator is a web application that generates random workouts based on user input.', id:"projects-card-button1", date:" Made in 2023", github:"https://github.com/charliegale16/Workout-Generator",live:"https://workout-generator-charliegale.netlify.app"},
    {name:"Space Invaders", icon: spaceinvaders, desc:'Python-based Space Invaders made with custom sprites, creating an immersive gaming experience', id:"projects-card-button2", date:" Made in 2022", github:"https://github.com/charliegale16/Space_Invaders_CPSC",live:""},
    {name:"CloudMap", icon: cloudmap, desc:'A web application that displays a google maps page with custom filters provided by the user.', id:"projects-card-button3", date:" Made in 2022", github:"https://github.com/charliegale16/CloudMap",live:"https://workout-generator-charliegale.netlify.app"}


  ]




const Projects = () => {
  return (
    <section id='projects'>
        <div className='projects-container'>
            <div className='projects-header'>
                <h1>Projects</h1>
                <Link to='/projects'>
                <button>View All</button>
                </Link>
                
            </div>
            <div className='projects-description'>
            <p>Check out the projects i've developed. They're a great showcase of my skills and passion for building new things! </p>
            </div>
            <div className='projects-card-container'>
                {projectsItems.map((item) => (
                <div className='projects-card' key={item}>
                    <div className='projects-card-left'>
                        <h2>{item.name}</h2>
                        <i>{item.date}</i>
                        <p>{item.desc}</p>
                        <div className={item.id}>
                        <a href={item.github} target="github" rel="noopener noreferrer">
                            <button className='github'>Github</button>
                            </a>
                            <a href={item.live} target="workoutgenerator" rel="noopener noreferrer">
                            <button className='live'>Live</button>
                            </a>
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