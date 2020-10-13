import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

import {useSelector} from 'react-redux';

 
//standard Nav bar with cart item number displayed using redux store

function Navigation() {
  const cartLength = useSelector(store => store.cart.length);

  return (
    <Navbar className="bg-dark  ">
      <Navbar.Brand className="text-white" href="/">FS</Navbar.Brand>
      <Nav className="ml-auto">
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
          <NavLink to="/cart">MY CART</NavLink> <span className="text-white">{` ${cartLength}`}</span>
        </Nav.Item>
      </Nav>
      
    </Navbar>
  )
}

export default Navigation;