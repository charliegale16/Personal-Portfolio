import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='Hero'>
      <Hero />
      </div>
      <div className='Header'>
      <Header />
      </div>
      <div className='Projects'>
      <Projects />
      </div>


    </div>
  );
}

export default App;
