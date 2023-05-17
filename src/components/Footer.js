import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Footer = ({ isDarkMode, toggleDarkMode }) => {
  const toggleIcon = isDarkMode ? <IoSunny /> : <IoMoon />;

  return (
    <footer style={{padding:"20px"}} className= {!isDarkMode ? "bg-light" : "bg-dark"}>
      <Container>
        <Row className="align-items-center">
          
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Home</a></li>
              <li className="list-inline-item"><a href="/services">Services</a></li>
              <li className="list-inline-item"><a href="/projects">Projects</a></li>
              <li className="list-inline-item"><a href="/about">About</a></li>
              <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
          
          
            <button className="btn btn-link" onClick={toggleDarkMode}>
              {isDarkMode ? <IoSunny style={{color:'white'}} /> : <IoMoon style={{color:'black'}} />}
            </button>
         
        </Row>

        <Row className="text-center">
          <Col>
            <p style={{color: isDarkMode ? 'white':'black'}}>&copy; 2023 Ahmaad Idrees</p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col style={{color: isDarkMode ? 'white':'black'}} >
            <FaPhone style={{marginRight:'20px'}} className="icon" />
            <FaEnvelope className="icon" />
            <FaLinkedin style={{marginLeft:'20px'}} className="icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
