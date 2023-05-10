import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the first project',
    tags: ['tag1', 'tag2'],
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the second project',
    tags: ['tag3', 'tag4'],
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is the third project',
    tags: ['tag3', 'tag4'],
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project3',
  },
];

const Projects = ({isDarkMode}) => {
  return (
    <div style={{background: isDarkMode ? '#343A40' : 'white'}}>
    <Container style={{ padding:"100px"}}>
      <h1 style={{color: isDarkMode ? 'white' : 'black'}}>Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <Card >
              <Card.Img variant="top" src={project.image} />
              <Card.Body style={{background: isDarkMode ? '#343a40': '#f8f9fa'}} >
                <Card.Title style={{color: isDarkMode ? 'white' : 'black'}}>{project.title}</Card.Title>
                <Card.Text style={{color: isDarkMode ? 'white' : 'black'}}>{project.description}</Card.Text>
                <Card.Text>
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge bg-primary me-1">
                      {tag}
                    </span>
                  ))}
                </Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="float-end" />
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Projects;
