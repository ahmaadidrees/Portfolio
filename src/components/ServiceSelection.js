import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      notes: ''
    });
  };

  const handleGoBack = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <Container>
        <h1>Tell Me More...</h1>
        <p>Your {selectedService} is only one message away! Please provide any specifications and/or details, and I will immediately respond with either an offer or follow-up questions.</p>
        <Form onSubmit={handleSubmit}>
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

          <div className="button-container">
            <Button variant="secondary" onClick={handleGoBack}>Back</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Select A Service</h1>
      <div className="button-container">
        <Button variant="primary" onClick={() => handleServiceSelect('Website / Web Application')}>Website / Web Application</Button>
        <Button variant="primary" onClick={() => handleServiceSelect('Mobile Application')}>Mobile Application</Button>
        <Button variant="primary" onClick={() => handleServiceSelect('Other Digital Product')}>Other Digital Product</Button>
      </div>
    </Container>
  );
};

export default ServiceSelection;
