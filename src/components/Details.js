import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsFillLightningFill, BsGlobe, BsBarChartFill } from 'react-icons/bs';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import ServiceSelection from './ServiceSelection';
import { FaMobileAlt, FaLaptop, FaPhone, FaLightbulb, FaTools,FaRegPlayCircle } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline, IoConstructOutline,IoLayersOutline  } from 'react-icons/io5';
import { MdLightbulbOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './Details.css'

const Details = ({isDarkMode}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='detail' style ={{paddingTop:"200px",minHeight:"100vh"}}>
    <Container className="text-center">
      <h1 className="details-title" style={{color:isDarkMode ? 'white' : 'black', marginBottom:"50px"}}>What My Services Include</h1>

      <Row  style={{color:isDarkMode ? 'white' : 'black', justifyContent:'center'}}>
        <Col xs={12} sm={6} md={4} lg={3} className="left-icons mb-4"   >
          <div className="d-flex justify-content-center">
            {/* <BsFillLightningFill className="service-icon" style={{width:"100px", height:"100px"}} /> */}
            <FaMobileAlt style={{  width:"100px", height:"100px" }} />
      <FaLaptop style={{ width:"100px", height:"100px" }} />
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <h2 style={{whiteSpace:'nowrap'}}>Responsive Design</h2></div>
          <p>Your digital product will look great on every screen size.</p>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="right-icons mb-4"   >
          <div className="d-flex justify-content-center">
          <BsFillLightningFill className="service-icon" style={{width:"100px", height:"100px"}} />
            <BsGlobe style={{width:"100px", height:"100px"}} className="service-icon" />
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <h2 style={{whiteSpace: "nowrap"}} className="text-center">Fast Loading Speeds</h2></div>
          <p>Your digital product will be optimized with fast loading speeds regardless the amount of content.</p>
        </Col>
</Row>
<Row className="icon-row justify-content-center " style={{color:isDarkMode ? 'white' : 'black'}}>
        <Col xs={12} sm={6} md={4} lg={3} className=" text-center mb-4 " >
          <div className="d-flex justify-content-center">
          <IoChatbubbleEllipsesOutline style={{width:"100px", height:"100px"}} className="service-icon" />
          <FaPhone style={{ width:"100px", height:"100px" }} />
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <h2 style={{whiteSpace: "nowrap"}}className="text-center">Excellent Communication</h2></div>
          <p>Through continuous communication, we will ensure your digital product looks exactly how you want</p>
        </Col>
      </Row>

      {showMore && (
        <>
        <Row className="icon-row justify-content-center" style={{color:isDarkMode ? 'white' : 'black'}}>
          <Col xs={12} sm={6} md={4} lg={3} className="left-icons text-center mb-4" >
            <div className="d-flex justify-content-center">
              <AiOutlineClockCircle style={{width:"100px", height:"100px"}} className="service-icon" />
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <h2 style={{whiteSpace: "nowrap"}}className="text-center">Rapid Turnaround</h2></div>
            <p>The initial draft of your digital product will be completed within 1-2 weeks, from there fine tuning will be applied as needed</p>

          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="right-icons text-center mb-4" >
            <div className="d-flex justify-content-center">
              < FaLightbulb style={{width:"100px", height:"100px"}} className="service-icon" />
            </div>
            <h2 style={{whiteSpace: "nowrap"}}className="text-center">Customizable</h2>
            <p>The sky is the limit, if you can think of it, it can be added to your digital product!</p>
          </Col>
 </Row>
 <Row className="icon-row justify-content-center" style={{color:isDarkMode ? 'white' : 'black'}}>
          <Col xs={12} sm={6} md={4} lg={3}className="text-center mb-4">
            <div className="d-flex justify-content-center">
              < IoConstructOutline style={{width:"100px", height:"100px"}} className="service-icon" />
            </div>
            <h2 style={{whiteSpace: "nowrap"}}className="text-center">Maintence</h2>
            <p>I can either continuously add content to your digital prodcut or set your product up to be easily maintained by your choosing.</p>
          </Col>
          </Row>
          </>
      )}

      <div className="text-center">
        <Button style={{marginBottom:"100px"}} variant="primary" onClick={toggleShowMore}>
          {showMore ? (
            <span>View Less <FiChevronUp /></span>
          ) : (
            <span>View More <FiChevronDown /></span>
          )}
        </Button>
      </div>
    </Container>
    <ServiceSelection isDarkMode={isDarkMode} />
    </div>
  );
};

export default Details;
