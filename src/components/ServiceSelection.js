import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';

const ServiceSelection = ({ isDarkMode }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  });
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/f/myyavaqj', formData);

      // Handle success and show modal
      setShowModal(true);
      setName(formData.name);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        notes: ''
      });
    } catch (error) {
      // Handle error
      console.error('Error sending email:', error);
    }
  };

  const handleGoBack = () => {
    setSelectedService(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <Container>
        <h1 style={{ color: isDarkMode ? 'white' : 'black' }}>Tell Me More...</h1>
        <p style={{ color: isDarkMode ? 'white' : 'black' }}>
          Your {selectedService} is only one message away! Please provide any specifications and/or details, and I will immediately respond with either an offer or follow-up questions.
        </p>
        <Form style={{ color: isDarkMode ? 'white' : 'black', textAlign: 'left' }} onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>

          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} name="notes" value={formData.notes} onChange={handleInputChange} required />
          </Form.Group>

          <div className="button-container" style={{ marginBottom: '100px' }}>
            <Button style={{ width: '25%' }} variant="secondary" onClick={handleGoBack}>
              Back
            </Button>
            <Button style={{ width: '75%' }} variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Your message has been sent!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for reaching out {name}, I will review your notes and get back to you shortly.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
 
}

return (
<Container>
<h1 style={{ color: isDarkMode ? 'white' : 'black' }}>Select A Service</h1>
<Row className="button-container" style={{ marginBottom: '100px', whiteSpace: 'nowrap' }}>
<Col xs={12} md={4} className="mb-3">
<Button variant="primary" style={{ borderRadius: '40px', width: '100%', height: '100%' }} onClick={() => handleServiceSelect('Website / Web Application')}>
Website / Web Application
</Button>
</Col>
<Col xs={12} md={4} className="mb-3">
<Button variant="primary" style={{ borderRadius: '40px', width: '100%', height: '100%' }} onClick={() => handleServiceSelect('Mobile Application')}>
Mobile Application
</Button>
</Col>
<Col xs={12} md={4} className="mb-3">
<Button variant="primary" style={{ borderRadius: '40px', width: '100%', height: '100%' }} onClick={() => handleServiceSelect('Other Digital Product')}>
Other Digital Product
</Button>
</Col>
</Row>
</Container>
);
};

export default ServiceSelection;