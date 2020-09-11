import React from 'react';
import './Homepage.css';
import CompanyBox from './CompanyBox';
import Reviews from './Reviews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import groupSkating from './image/group-skating.jpg'
import downhillSkateboarder from './image/electric_skateboard_hill.jpg';
import longBoards from './image/motorized-longboards.jpg';
import downhillCarve from './image/boarding-down-road.jpg';

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

      <div className=" p-4">
        <h4>SHOP BY COMPANY:</h4>
        <hr></hr>
        <CompanyBox />
      </div>

      <div className="header-box">
        <img className="middle-img img-fluid" src={downhillCarve} alt="people carving on boards"></img>
        <div className="px-4 middle-text">
          <h2>RIDE WITH CONFIDENCE.</h2>
          <p className="w-75 m-auto">
            We only distribute boards we have personally tested and reviewed. Our boards come with a 60 day warranty, 
            24/7 Customer assistance, and full refund if the board isn't up to your standards. </p>
        </div>
      </div>

      
      <div className="home-box p-4">
        <h4>CUSTOMER REVIEWS:</h4>
        <hr></hr>
      <Row>
        <Col sm="12" md="6">
          <Reviews />
        </Col>
        <Col sm="12" md="6">
          <img className="img-fluid" src={longBoards} alt="longboards together"></img>
        </Col>

      </Row>
      </div>
    </div>
  )

}
export default Homepage;