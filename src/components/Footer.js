import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = ({ isDarkMode, toggleDarkMode }) => {
  const toggleIcon = isDarkMode ? <IoSunny /> : <IoMoon />;

  const handlePhoneClick = () => {
    window.location.href = 'tel:925-818-4544';
  };

  const handleEmailClick = () => {
    window.open('mailto:ahmaadidrees@gmail.com');
  };
  
  

  return (
    <footer style={{ padding: '20px' }} className={!isDarkMode ? 'bg-light' : 'bg-dark'}>
      <Container>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} to="/services">Services</Link>
          </li>
          <li className="list-inline-item">
            <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} to="/projects">Projects</Link>
          </li>
          <li className="list-inline-item">
            <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} to="/about">About</Link>
          </li>
          <li className="list-inline-item">
            <Link onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} to="/contact">Contact</Link>
          </li>
        </ul>

        <Row className="justify-content-center">
          <Col xs="auto">
            <button className="btn btn-link" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <IoSunny style={{ color: '#fff', fontSize: '1.5rem' }} />
              ) : (
                <IoMoon style={{ color: '#000', fontSize: '1.5rem' }} />
              )}
            </button>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <p style={{ color: isDarkMode ? '#fff' : '#000' }}>&copy; 2023 Ahmaad Idrees</p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <Button variant="link" className="icon-button" onClick={handlePhoneClick}>
              <FaPhone style={{ marginRight: '20px', color: isDarkMode ? '#fff' : '#000' }} className="icon" />
            </Button>
            <Button variant="link" className="icon-button" onClick={handleEmailClick}>
              <FaEnvelope style={{ color: isDarkMode ? '#fff' : '#000' }} className="icon" />
            </Button>
            <Button
              variant="link"
              className="icon-button"
              href="https://www.linkedin.com/in/ahmaad-idrees/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ marginLeft: '20px', color: isDarkMode ? '#fff' : '#000' }} className="icon" />
</Button>
</Col>
</Row>
</Container>
</footer>
);
};

export default Footer;