import React from 'react';
import "./Footer.css";
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import {useSelector} from 'react-redux';



function Footer(){
  // const cartLength = useSelector (store => store.cart.length);

  return(
    <div className="bg-dark text-white text-center footer ">
<div className="px-5 w-50 m-auto addy">
  Flowstate Boards <br/>
  10232 Mountain Blvd. <br/>
  Oakland, CA 94605 <br/>
  This is a demo site created by Boris Gladkikh. <br />
  You can't actually buy any of these products here.
</div>

    <Nav sticky="bottom" className=" p-3 bg-dark text-white  justify-content-center">
       <Nav.Item className="mx-2">
          <NavLink exact to="/">HOME</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <NavLink to="/shop">SHOP</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <NavLink to="/contact">CONTACT</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2 justify-content-end">
          <NavLink to="/cart">MY CART</NavLink> 
        </Nav.Item><br/>
    </Nav>
    <a href="#nav">Back To Top</a><br/>
 
    <h6 > &copy;Boris Gladkikh 2020</h6>

    </div>
  )
}

export default Footer;