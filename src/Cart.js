import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Cart.css';
import CartItem from './CartItem';

// cart page, displaying cart item components 
// for items that are currently inside cart store.

function Cart() {
  const shoppingCart = [{
    id: "ownat1w",
    name: "Ownboard AT1W",
    brand: "Ownboard",
    price: "799.00",
    img: "/img/boards/ownboard-at1w.jpg",
    qty: 1
  }, {
    id: "meeponlspro",
    name: "Meepo NLS Pro",
    brand: "Meepo",
    price: "689.00",
    img: "/img/boards/meepo-nls-pro.jpg",
    qty: 1
  }];

  const shoppingList = shoppingCart.map(p => 
    (
    <Col lg="12" >
      <CartItem 
      key={p.id}
      id={p.id}
      name={p.name}
      price={p.price}
      img={p.img}
      qty={p.qty} />
    </Col>
  ))


  return (
    <div className="App">
      <h2 className="mt-5">MY CART</h2>
      <div className="cart">
        <Row>
          {shoppingList}
        </Row>
        <div className="text-right mt-3">
          <Button variant="dark" className="mx-1">Keep Shopping</Button>
          <Button variant="dark">Checkout</Button>
        </div>
      </div>
    </div>
  )

}
export default Cart;