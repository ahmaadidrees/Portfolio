import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const handleDownloadResume = () => {
    // Function to handle the resume download
    // Replace the URL with the actual path to your resume file
    const resumeUrl = '/files/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

const projects = [
  {
    id: 1,
    title: 'Seal Tech Pavement Co.',
    description: 'Website for an Asphalt company, the website provides potential clients information as well as the option to recieve a free quote. This website is currently in development, but please feel free to check it out :)',
    tags: ['react', 'javascript', 'html', 'css'],
    image: '/images/SealTech.png',
    link: 'https://shieldsealpavementco.netlify.app/',
  },
  {
    id: 2,
    title: 'Arbor Connection',
    description: 'Live menu for a cannabis dispensary.  This website was built using the commerce.js api, a really cool api that provides a backend for inventory based websites.  If you are 21+ please feel free to check it out :)',
    tags: ['react','commerce.js'],
    image: '/images/arbor.png',
    link: 'https://www.arborconnect.net/',
  },
  {
    id: 3,
    title: 'Kade\'s Kloset',
    description: 'This is a fullstack clothing store, I used the commerce.js api to handle clothing store functionality, and the stripe api to handle payments in the backend. The website owner currently does not use it but please still check it out :) ',
    tags: ['react','express','node.js', 'stripe','commerce.js'],
    image: '/images/kadeskloset.png',
    link: 'https://www.thekadeskloset.com/',
  },
  {
    id: 4,
    title: 'True Split',
    description: 'Simple bill splitter web application that accurately calculates your exact portion of the bill.  This was my first web application that I made using react, I love how this website reminds me of how far I\'ve come in such a short time :)',
    tags: ['react', 'javascript','html', 'css'],
    image: '/images/truesplit.png',
    link: 'https://truesplit.netlify.app/',
  },
  {
    id: 5,
    title: 'Blockchain',
    description: 'Created block and blockchain structs in GoLang. Implement proof of work as well as Nakamoto consensus to verify blocks prior to being added to the blockchain',
    tags: ['blockchain', 'crypto','golang'],
    image: '/images/bitcoin.png',
    link: 'https://github.com/ahmaadidrees/simpleBlockchain/tree/main/P4/data',
  },
  {
    id: 6,
    title: 'Search Engine',
    description: 'Built a search engine with an inverted index data structure, a searchable inverted index, a multithreaded inverted index, and a web crawler ',
    tags: ['java', 'inverted index','web crawler'],
    image: '/images/search.png',
    link: 'https://github.com/ahmaadidrees/searchEngine/tree/main/src',
  },
];
const Projects = ({isDarkMode, isPage}) => {
    const [shouldApplyHeight, setShouldApplyHeight] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const mq = window.matchMedia('(min-height: 1496px)');
        setShouldApplyHeight(isPage && mq.matches);
      };
  
      handleResize(); // Check on initial render
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isPage]);
  
    return (
      <div
        className="projects"
        style={{
          background: isDarkMode ? '#343A40' : 'white',
          marginTop: isPage ? '150px' : undefined,
          height: shouldApplyHeight ? '90vh' : undefined,
        }}
      >
    <Container >
      <h1 style={{color: isDarkMode ? 'white' : 'black', margin:"50px", fontSize:"45px"}}>Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <Card style={{marginBottom:"20px", height:"97%"}} >
              <Card.Img style={{height:"200px", objectFit:"cover"}} variant="top" src={project.image} />
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
                  <FaExternalLinkAlt style={{position:"absolute", bottom:"10px", right:"10px" }} />
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5 centered-button">
          <button style={{marginBottom:"50px", borderRadius:"40px"}} className="btn btn-primary" onClick={handleDownloadResume}>
            <FaDownload className="me-2" />
            Download Resume
          </button>
        </div>
      
    </Container>
    </div>
  );
};

export default Projects;
