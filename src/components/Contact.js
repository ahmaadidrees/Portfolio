import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';


const Contact = ({isDarkMode, isPage}) => {
    const [shouldApplyHeight, setShouldApplyHeight] = useState(false);

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
  return (
    <div style={{textAlign:"left", background: isDarkMode ? '#343A40' : 'white', height: shouldApplyHeight ? '100vh' : undefined, marginTop: isPage && '150px'}}>
    <Container >
      <h1 style={{color: isDarkMode ? 'white' : 'black', fontSize:"45px", textAlign:"center", marginTop:"50px"}}>Contact Me</h1>

      <Row>
          
        
          <p style={{  whiteSpace:'nowrap', textAlign:"center", color: isDarkMode ? 'white' : 'black'}} ><FaPhone style={{color: isDarkMode ? 'white' : 'black', height:'20px', width:"20px"}} />&nbsp;&nbsp;&nbsp;&nbsp;Phone: 925-818-4544</p>
      </Row>

      <Row>
       
          
        
          <p style={{whiteSpace:'nowrap',textAlign:"center",color: isDarkMode ? 'white' : 'black'}}><FaEnvelope style={{color: isDarkMode ? 'white' : 'black', height:'20px', width:"20px"}} />&nbsp;&nbsp;&nbsp;&nbsp;Email: ahmaadidrees@gmail.com</p>
       
      </Row>

      <Row>
       
          
        
          <p style={{ whiteSpace:'nowrap',textAlign:"center",color: isDarkMode ? 'white' : 'black'}}><FaLinkedin style={{color: isDarkMode ? 'white' : 'black', height:'20px', width:"20px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn: www.linkedin.com/in/ahmaad-idrees</p>
        
      </Row>

      <h2 style={{marginTop:"50px", textAlign:"center", color: isDarkMode ? 'white' : 'black', fontSize:"40px"}}>Send me a message</h2>

      <Form style={{color: isDarkMode ? 'white' : 'black'}}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
        </Form.Group>

        <Button style={{marginTop:'20px', width: '100%', marginBottom:"50px"}} variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
    </div>
  );
};

export default Contact;
