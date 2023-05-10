import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

function Hero({isDarkMode}) {
  const titles = ['Problem Solver', 'Web Developer', 'Software Engineer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [showBlink, setShowBlink] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let currentTitle = '';
    let intervalId = setInterval(() => {
      if (currentIndex === titles[titleIndex].length) {
        // setShowBlink(!showBlink);
        setTimeout(() => {
        //   setShowBlink(!showBlink);
          setTitle('');
          currentIndex = 0;
          setTitleIndex((titleIndex + 1) % titles.length);
        }, 1200);
        return clearInterval(intervalId);
      }
      currentTitle += titles[titleIndex].charAt(currentIndex);
      setTitle(currentTitle);
      currentIndex++;
    }, 180);
    return () => clearInterval(intervalId);
  }, [titleIndex]);

  return (
    <Container style={{background: isDarkMode ? '#343A40' : 'white', height:'100vh',marginTop:"115px" }} fluid className="hero-container">

      
        <Col style={{position:"relative", top:"100px"}} className="hero-content">
          <h1 style={{ color: isDarkMode ? 'white' : 'black', fontSize: '7vw', whiteSpace: 'nowrap' }} className="hero-title">
            {title}
            {showBlink && <span>|</span>}
          </h1>
          <p style={{ color: isDarkMode ? 'white' : 'black',fontSize: '3.5vw', whiteSpace: 'nowrap' }} className="hero-subtitle">
            I design and implement technical solutions
          </p>
          <Button style={{fontSize:"2.5vw", borderRadius:'40px', position:"relative", bottom: "100px"}} variant={isDarkMode ? 'light' : 'dark'} className="hero-button">
            Contact Me Today
          </Button>
          <img
            style={{ height: '650px', width: '550px',position:'relative', bottom: "100px"}}
            src={!isDarkMode ? "/images/BlackLogo.png" : '/images/WhiteLogo.png'}
            alt="Hero"
            className="hero-image"
          />
        </Col>
        
      
    </Container>
  );
}

export default Hero;
