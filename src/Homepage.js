import React from 'react';
import './Homepage.css';
import CompanyBox from './CompanyBox';

function Homepage(){
  return(
    <div className="App">

      <div className="p-4">
      <h2>Welcome To FlowState Boards.</h2>
      <h5>Your one stop shop for cutting-edge electric skateboards.</h5>
      </div>

      <div className="home-box p-4">
        <h4>ABOUT US:</h4>
        <hr></hr>
        <p className="px-4">
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