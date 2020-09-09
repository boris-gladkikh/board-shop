import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'


function Navigation() {
  return (
    <Navbar className="bg-dark ">
      <Navbar.Brand className="text-white" href="/">FS</Navbar.Brand>
      <Nav  className="justify-content-end">
        <Nav.Item className="mx-2">
          <NavLink exact to="/">HOME</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <NavLink to="/shop">SHOP</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <NavLink to="/contact">CONTACT</NavLink>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <NavLink to="/cart">MY CART</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation;