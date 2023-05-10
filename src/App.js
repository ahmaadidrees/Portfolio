import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement the logic to toggle dark mode
  };
  return (
    <div className="App">
     <NavBar isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
     <Hero isDarkMode = {isDarkMode}/>
     <Services isDarkMode = {isDarkMode} />
     <Projects isDarkMode = {isDarkMode}/>
     <About isDarkMode = {isDarkMode} />
    </div>
  );
}

export default App;
