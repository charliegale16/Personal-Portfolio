import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './pages/About';
import Project from './pages/Project';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'app-light' : 'app-dark';
  }, [theme]);
  return (
      
<div className={`app ${theme === 'dark' ? 'app-light' : 'app-dark'}`}>
    <Nav theme={theme} toggleTheme={toggleTheme} />
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
