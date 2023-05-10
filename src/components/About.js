import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = ({isDarkMode}) => {
  return (
    <div style={{background: isDarkMode ? '#21252A':"#f8f9fa"}}>
    <Container style={{padding:"100px"}}>
      <h1 style={{color: isDarkMode ? 'white' : 'black', marginBottom:"50px"}}>About Me</h1>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <Image style={{borderRadius:"20px"}} src="/images/about.jpg" alt="My Image" fluid />
        </Col>
        <Col xs={12} md={6}>
          <p style={{color: isDarkMode ? 'white' : 'black'}}>
            Hi, my name is [Your Name] and I am a [Your Profession] based in [Your Location]. I have been working in the field of [Your Field] for [Number of Years] years and I am passionate about [Your Interests]. In my free time, I enjoy [Your Hobbies].
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
