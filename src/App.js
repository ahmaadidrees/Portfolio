import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Details from './components/Details';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  let isPage = true;
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement the logic to toggle dark mode
  };
  return (
    <Router>
      <div className="App" style={{background: isDarkMode ? "#343A40" : "white" }}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path = "/" element = {<Home isPage = {!isPage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path = "/services" element = {<Details isDarkMode = {isDarkMode} />} />
          <Route path = "/projects" element = {<Projects isPage ={isPage} isDarkMode={isDarkMode} />} />
          <Route path = "/about" element = {<About isPage ={isPage} isDarkMode = {isDarkMode} />} />
          <Route path = "/contact" element = {<Contact isPage ={isPage} isDarkMode={isDarkMode} />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;
