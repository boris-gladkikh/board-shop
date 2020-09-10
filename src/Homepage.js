import React from 'react';
import './Homepage.css';
import CompanyBox from './CompanyBox';
import Reviews from './Reviews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import groupSkating from './image/group-skating.jpg'
import downhillSkateboarder from './image/electric_skateboard_hill.jpg';
import longBoards from './image/motorized-longboards.jpg';

function Homepage() {
  return (
    <div className="App">
      <div className="header-box">
        <div className="header-text">
          <h1>FLOWSTATE BOARDS</h1>
          <h6>Your one stop shop for electric skateboards & accessories</h6>
        </div>
        <img className="header-image" src={groupSkating} alt="group skating in SF"></img>
      </div>



      <div className="home-box p-4">
        <h4>ABOUT US:</h4>
        <hr></hr>
        <Row className="">
          <Col md="7" sm="12" >
            <img className="img-fluid" src={downhillSkateboarder} alt="skater going downhill on boosted board"></img>
          </Col>
          <Col md="5" sm="12" className="text-left">
            <h3>WE LOVE WHAT WE DO.</h3>
            <p className="m-auto">
              We are a small, dedicated team of skateboarders, engineers and electric vehicle enthusiasts dedicated
              to bringing you the most cutting-edge electric boards from the most trusted names.
              We aim to provide an honest price, thoughtful customer service, and a lasting relationship
              with our featured brands and customers. At the end of the day, our only goal is to provide you the 
              satisfaction of a great ride.
        </p>
          </Col>
        </Row>

      </div>

      <div className="home-box p-4">
        <h4>SHOP BY COMPANY:</h4>
        <hr></hr>
        <CompanyBox />
      </div>
      <div className="home-box p-4">
        <h4>CUSTOMER REVIEWS:</h4>
        <hr></hr>
      <Row>
        <Col sm="12" md="6">
          <Reviews />
        </Col>
        <Col sm="12" md="6">
          <img className="img-fluid" src={longBoards} alt="downhill jam"></img>
        </Col>

      </Row>
      </div>
    </div>
  )

}
export default Homepage;