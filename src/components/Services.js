import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiDesktop, BiMobileAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import './Service.css';

function Services({ isDarkMode }) {
  return (
    <Container style={{ background: !isDarkMode ? "#f8f9fa" : "#21252A", paddingTop: "120px" }} fluid className="services-container">
        <div className='services-content'>
      <h2 style={{ color: isDarkMode ? 'white' : 'black', margin: "50px" }} className="services-title">What I Can Do For You</h2>
      <Row className="services-row">
        <Col md={4} sm={12}>
          <BiDesktop style={{ color: isDarkMode ? 'white' : 'black', height: '100px', width: "100px" }} className="services-icon" />
          <p style={{ color: isDarkMode ? 'white' : 'black' }} className="services-text">Website Design/Development</p>
        </Col>
        <Col md={4} sm={12}>
          <BiMobileAlt style={{ color: isDarkMode ? 'white' : 'black', height: '100px', width: "100px" }} className="services-icon" />
          <p style={{ color: isDarkMode ? 'white' : 'black' }} className="services-text">Mobile Application Design/Development</p>
        </Col>
        <Col md={4} sm={12}>
          <FaLaptopCode style={{ color: isDarkMode ? 'white' : 'black', height: '100px', width: "100px" }} className="services-icon" />
          <p style={{ color: isDarkMode ? 'white' : 'black' }} className="services-text">Web Application Design/Development</p>
        </Col>
      </Row>
      <Button variant="primary" className="services-button">Learn More</Button>
      </div>
    </Container>
  );
}

export default Services;
