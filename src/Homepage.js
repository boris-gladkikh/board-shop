import React from 'react';
import './Homepage.css';
import CompanyBox from './CompanyBox';
import downhillSkateboarder from './image/electric_skateboard_hill.jpg';
import groupSkating from './image/group-skating.jpg'

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
        <p className="px-3 w-75 m-auto">
          We are a small, dedicated team of skateboarders, engineers and electric vehicle enthusiasts dedicated
          to bringing you the most cutting-edge electric boards from the most trusted names.
          We aim to provide an honest price, thoughtful customer service, and a lasting relationship
          with our featured brands and customers.
        </p>
      </div>

      <div className="home-box p-4">
        <h4>SHOP BY COMPANY:</h4>
        <hr></hr>
        <CompanyBox />
      </div>
      <div className="home-box p-4">
        <h4>See what people are saying about FlowState Boards.</h4>
        <hr></hr>
      </div>
    </div>
  )

}
export default Homepage;