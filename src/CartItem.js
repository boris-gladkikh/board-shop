import React from 'react';
import Button from 'react-bootstrap/Button';
import './CartItem.css';

function CartItem({ id, name, img, qty, price }) {
  return (
    <div className="cart-item">
      <img className="cart-img" src={img} alt={`img of ${name}`} />

      <div className="cart-text">
        <h4>{name.toUpperCase()}</h4>
        <strong>${price}</strong><br></br>
      </div>
      <div>
        <div className="cart-add-subtract">
       
            <strong>Qty: {qty}</strong>
    
          <Button variant="dark" size="sm" className="mx-1">+</Button>
          <Button variant="dark" size="sm">-</Button>
        </div>
      </div>

    </div>


  )
}

export default CartItem


