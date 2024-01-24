import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Header from './components/Header';

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


    </div>
  );
}

export default App;
