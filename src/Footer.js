import React from 'react';
import "./Footer.css";
import Nav from 'react-bootstrap/Nav';


function Footer(){
  return(
    <Nav sticky="bottom" className=" p-3 bg-dark text-white footer text-center flex-column">
      <h6> &copy;Boris Gladkikh 2020</h6>

    </Nav>
  )
}

export default Footer;