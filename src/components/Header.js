import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
        
        <div className='header-header'> 
            <h1>My evolving tech stack</h1>

</div>
        <p>I'm currently familiar with these technologies, but always eager to learn and explore new ones!</p>

        <div className='header-sub-1'>
            <h2>Frontend</h2> 
            <div className='header-sub-icons'>

            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="75" height="75" alt="JavaScript" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="75" height="75" alt="React" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="75" height="75" alt="HTML5" /></a>
            <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="75" height="75" alt="CSS3" /></a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="75" height="75" alt="Bootstrap" /></a>
            <a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="75" height="75" alt="Material UI" /></a>
            </div>
        </div>

        <div className='header-sub-2'>
            <h2>Backend</h2> 
            <div className='header-sub-icons2'>

            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="75" height="75" alt="NodeJS" /></a>  
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"width="75" height="75" alt="Express" /></a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="75" height="75" alt="MySQL" /></a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="75" height="75" alt="PostgreSQL" /></a>
            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="75" height="75" alt="Firebase" /></a>
            <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width="75" height="75" alt="Django" /></a>
            </div>
        </div>
        <div className='header-sub-3'>
            <h2>Other</h2> 
            <div className='header-sub-icons3'>
            <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="75" height="75" alt="C" /></a>
            <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="75" height="75" alt="C++" /></a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="75" height="75" alt="Git" /></a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="75" height="75" alt="Python" /></a>
            <a href="https://developer.apple.com/swift/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg" width="75" height="75" alt="Swift" /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Header