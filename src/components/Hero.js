import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

function Hero({ isDarkMode }) {
  const titles = ['Problem Solver', 'Web Developer', 'Software Engineer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [containerHeight, setContainerHeight] = useState('100vh');
  const [showBlink, setShowBlink] = useState(false); // Initialize with false to hide blinking initially

  useEffect(() => {
    let currentIndex = 0;
    let currentTitle = '';
    let intervalId = setInterval(() => {
      if (currentIndex === titles[titleIndex].length) {
        setTimeout(() => {
          setTitle('');
          currentIndex = 0;
          setTitleIndex((titleIndex + 1) % titles.length);
          setShowBlink(false); // Enable blinking effect after title transition
        }, 2000);
        return clearInterval(intervalId);
      }
      currentTitle += titles[titleIndex].charAt(currentIndex);
      setTitle(currentTitle);
      currentIndex++;
    }, 180);
    return () => clearInterval(intervalId);
  }, [titleIndex]);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      let maxHeight = Math.max(viewportHeight, 1050);
      if (window.innerWidth < 475) {
        maxHeight = Math.max(viewportHeight, 800);
      }
      if (window.innerWidth < 306) {
        maxHeight = Math.max(viewportHeight, 650);
      }

      setContainerHeight(`${maxHeight}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const blinkIntervalId = setInterval(() => {
      setShowBlink((prevShowBlink) => !prevShowBlink);
    }, 500);

    return () => clearInterval(blinkIntervalId);
  }, []);

  return (
    <Container fluid style={{ background: isDarkMode ? 'transparent' : 'white', height: containerHeight }} className="hero-container">
      <Col className="hero-content">
        <h1 style={{ color: isDarkMode ? 'white' : 'black' }} className="hero-title">
          {title}<span style={{ opacity: showBlink ? 1 : 0 }}>|</span> {/* Add opacity based on showBlink */}
        </h1>
        <p style={{ color: isDarkMode ? 'white' : 'black' }} className="hero-subtitle">I design and implement technical solutions</p>
        <Button variant="primary" className="hero-button">Contact Me Today</Button>
        <img
          src={!isDarkMode ? "/images/BlackLogo.png" : '/images/WhiteLogo.png'}
          alt="Hero"
          className="hero-image"
        />
      </Col>
    </Container>
  );
}

export default Hero;
