import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button, Modal } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = ({ isDarkMode, isPage }) => {
  const [shouldApplyHeight, setShouldApplyHeight] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia('(min-height: 985px)');
      setShouldApplyHeight(isPage && mq.matches);
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isPage]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      await axios.post('https://formspree.io/f/myyavaqj', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success and show modal
      setShowModal(true);
      setName(formData.get('name'));
      form.reset();
    } catch (error) {
      // Handle error
      console.error('Error sending email:', error);
    }
  };
  const handlePhoneClick = () => {
    window.location.href = 'tel:925-818-4544';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmaadidrees@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ahmaad-idrees/');
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        textAlign: 'left',
        background: isDarkMode ? '#343A40' : 'white',
        height: shouldApplyHeight ? '100vh' : undefined,
        marginTop: isPage && '150px',
      }}
    >
      <Container>
        <h1 style={{ color: isDarkMode ? 'white' : 'black', fontSize: '45px', textAlign: 'center', marginTop: '50px' }}>
          Contact Me
        </h1>

        <Row>
          <p style={{ whiteSpace: 'nowrap', textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
            <Button onClick={handlePhoneClick} style={{background:'transparent', border:'none'}}>
            <FaPhone style={{ color: isDarkMode ? 'white' : 'black', height: '20px', width: '20px' }} /></Button>
            &nbsp;&nbsp;&nbsp;&nbsp;Phone: 925-818-4544
          </p>
        </Row>

        <Row>
          <p style={{ whiteSpace: 'nowrap', textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
            <Button onClick={handleEmailClick} style={{background:'transparent', border:'none'}}><FaEnvelope style={{ color: isDarkMode ? 'white' : 'black', height: '20px', width: '20px' }} /></Button>
            &nbsp;&nbsp;&nbsp;&nbsp;Email: ahmaadidrees@gmail.com
          </p>
        </Row>

        <Row>
          <p style={{ whiteSpace: 'nowrap', textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
            <Button onClick={handleLinkedInClick} style={{background:'transparent', border:'none'}}><FaLinkedin style={{ color: isDarkMode ? 'white' : 'black', height: '20px', width: '20px' }} /></Button>
            &nbsp;&nbsp;&nbsp;&nbsp;LinkedIn: www.linkedin.com/in/ahmaad-idrees
          </p>
        </Row>

        <h2 style={{ marginTop: '50px', textAlign: 'center', color: isDarkMode ? 'white' : 'black', fontSize: '40px' }}>

      Send me a message
    </h2>

    <Form onSubmit={handleFormSubmit} style={{ color: isDarkMode ? 'white' : 'black' }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" required />
      </Form.Group>

      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter a subject" name="subject" required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" required />
      </Form.Group>

      <Button style={{ marginTop: '20px', width: '100%', marginBottom: '50px' }} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your message has been sent! </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for reaching out {name}, I will get back to you shortly.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
</div>
);
};

export default Contact;