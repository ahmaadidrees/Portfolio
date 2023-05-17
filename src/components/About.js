import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = ({ isDarkMode, isPage }) => {
    const [shouldApplyHeight, setShouldApplyHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia('(min-height: 1185px)');
      setShouldApplyHeight(isPage && mq.matches);
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isPage]);
  const backgroundColor = isPage ? 'transparent' : isDarkMode ? '#21252A' : '#f8f9fa';
  return (
    <div style={{ background: backgroundColor, marginTop: isPage && '100px', height: shouldApplyHeight ? '100vh' : undefined, paddingBottom:"50px" }}>
      <Container style={{paddingTop:"50px"}} > 
        <h1 style={{ color: isDarkMode ? 'white' : 'black', marginBottom: '50px', fontSize:"45px" }}>About Me</h1>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Image style={{ borderRadius: '20px' }} src="/images/about.jpg" alt="My Image" fluid />
          </Col>
          <Col style={{ textAlign: 'left', marginTop: '20px' }} xs={12} md={6}>
            <p style={{ color: isDarkMode ? 'white' : 'black' }}>
              Hello, I'm Ahmaad, a dedicated and enthusiastic software engineer based in the vibrant San Francisco Bay
              Area. With a solid foundation in computer science, I graduated from the University of San Francisco in
              winter 2020. Throughout my academic journey, I immersed myself in various aspects of technology and honed
              my skills in software development, web design, and problem-solving.
            </p>
            <p style={{ color: isDarkMode ? 'white' : 'black' }}>
              Beyond my academic pursuits, I have actively sought real-world experiences to further enhance my abilities.
              These experiences have not only sharpened my technical expertise but have also nurtured my leadership
              qualities and refined my communication skills. Working in diverse environments, I have collaborated with
              different teams, effectively communicating complex ideas and ensuring seamless coordination to achieve
              project objectives.
            </p>
            <p style={{ color: isDarkMode ? 'white' : 'black' }}>
              For the past three years, I have been fully immersed in the dynamic field of web development. With each
              project, I have eagerly embraced the opportunity to explore new technologies. My passion for continuous
              learning drives me to seek innovative approaches, always aiming to deliver technical excellence that
              empowers businesses to thrive and succeed in their endeavors.
            </p>
            <p style={{ color: isDarkMode ? 'white' : 'black' }}>
              When I'm not immersed in the world of coding and crafting digital experiences, I find joy in the company
              of my two adorable French Bulldogs, Flaca and Otis. They bring a touch of playfulness and companionship to
              my life. Additionally, I am an avid traveler, captivated by the diverse cultures, landscapes, and
              experiences that our world offers. Exploring new destinations not only fuels my sense of adventure but also
              broadens my perspective, enabling me to bring fresh insights and creativity to my work.
            </p>
            <p style={{ color: isDarkMode ? 'white' : 'black', marginBottom: "50px" }}>
              With a genuine passion for technology, a commitment to excellence, and an unwavering dedication to
              delivering impactful results, I am excited to collaborate with businesses and individuals alike, leveraging
              my skills and expertise to drive innovation and foster success.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
