import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './CompanyBox.css';

function CompanyBox(){
  return(
    <Container className="my-4">
      <Row className="m-auto align-items-center"> 
        <Col className="my-2" sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/logos/onewheel-logo.jpg" alt="onewheel logo"></img>
        </Col>
        <Col className="my-2" sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/logos/meepo-logo.jpg" alt="meepo logo"></img>
        </Col>
        <Col className="my-2" sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/logos/evolve-logo.jpg" alt="evolve logo"></img>
        </Col>
        <Col className="my-2" sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/logos/ownboard-logo.jpg" alt="ownboard logo"></img>
        </Col>
        <Col className="my-2" sm="12" md="6" lg="3">
          <img className="logo img-fluid" src="img/logos/boosted-logo.jpg" alt="boosted logo"></img>
        </Col>

      </Row>
    </Container>


  )

}

export default CompanyBox