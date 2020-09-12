import React from 'react';
import Button from 'react-bootstrap/Button';
import './CartItem.css';

function CartItem({ id, name, img, qty, price }) {
  return (
    <>
      <div className="cart-item">
        <img src={img} alt={`img of ${name}`}></img>
      </div>
      <div className="cart-text">
        <h4>{name.toUpperCase()}</h4>
        <strong>${price}</strong><br></br>
        <strong>Qty: {qty}</strong><br />
        <Button variant="dark" size="sm" className="mx-1">+</Button>
        <Button variant="dark" size="sm">-</Button>
      </div>
      <div className="add-subtract">
        <strong>Subtotal: ${price}</strong> <br></br>
      </div>
    </>
  )
}

export default CartItem


