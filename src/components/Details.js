import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsFillLightningFill, BsGlobe, BsBarChartFill } from 'react-icons/bs';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import ServiceSelection from './ServiceSelection';

const Details = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style ={{margin:"100px", height:"500px", paddingTop:"200px", marginBottom:"500px"}}>
    <Container className="text-center">
      <h1>What My Services Include</h1>

      <Row className="icon-row justify-content-center">
        <Col xs={4} md={2} className="text-center">
          <div className="d-flex justify-content-center">
            <BsFillLightningFill className="service-icon" />
          </div>
          <p className="text-center">Responsive Design</p>
        </Col>

        <Col xs={4} md={2} className="text-center">
          <div className="d-flex justify-content-center">
            <BsGlobe className="service-icon" />
          </div>
          <p className="text-center">Fast Loading Speeds</p>
        </Col>

        <Col xs={4} md={2} className="text-center">
          <div className="d-flex justify-content-center">
            <BsBarChartFill className="service-icon" />
          </div>
          <p className="text-center">SEO</p>
        </Col>
      </Row>

      {showMore && (
        <Row className="icon-row justify-content-center">
          <Col xs={4} md={2} className="text-center">
            <div className="d-flex justify-content-center">
              <BsFillLightningFill className="service-icon" />
            </div>
            <p className="text-center">Responsive Design</p>
          </Col>

          <Col xs={4} md={2} className="text-center">
            <div className="d-flex justify-content-center">
              <BsGlobe className="service-icon" />
            </div>
            <p className="text-center">Fast Loading Speeds</p>
          </Col>

          <Col xs={4} md={2} className="text-center">
            <div className="d-flex justify-content-center">
              <BsBarChartFill className="service-icon" />
            </div>
            <p className="text-center">SEO</p>
          </Col>
        </Row>
      )}

      <div className="text-center">
        <Button variant="primary" onClick={toggleShowMore}>
          {showMore ? (
            <span>View Less <FiChevronUp /></span>
          ) : (
            <span>View More <FiChevronDown /></span>
          )}
        </Button>
      </div>
    </Container>
    <ServiceSelection />
    </div>
  );
};

export default Details;
