import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({isDarkMode, toggleDarkMode, isPage}) => {
  return (
    <div>
        
        <Hero isDarkMode = {isDarkMode}/>
        <Services isDarkMode = {isDarkMode} />
        <Projects isPage = {isPage} isDarkMode = {isDarkMode}/>
        <About isPage = {isPage} isDarkMode = {isDarkMode} />
        <Contact isPage ={isPage} isDarkMode = {isDarkMode} />
       
    </div>
  )
}

export default Home