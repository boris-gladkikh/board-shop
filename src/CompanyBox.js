import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './CompanyBox.css';

function CompanyBox(){
  return(
    <Container>
      <Row className="m-auto"> 
        <Col sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/onewheel-logo.jpg" alt="onewheel logo"></img>
        </Col>
        <Col sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/meepo-logo.png" alt="meepo logo"></img>
        </Col>
        <Col sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/evolve-logo.jpg" alt="evolve logo"></img>
        </Col>
        <Col sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/ownboard-logo.jpg" alt="ownboard logo"></img>
        </Col>
        <Col sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/boosted-logo.png" alt="boosted logo"></img>
        </Col>

      </Row>
    </Container>


  )

}

export default CompanyBox