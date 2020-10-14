import React from "react";
import Button from "react-bootstrap/Button";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
/* 
 * TODO: make cart-item responsive (breaks on smaller screens)
 * TODO: make minus button properly remove item 
 * TODO: figure out why qty isn't displaying
 * TODO: save cart in localstorage

 */

function CartItem({ product, id, name, img, qty, price }) {
  const dispatch = useDispatch();
  const removeItem = () => dispatch({ type: "REMOVE_ITEM", payload: product });
  
  //TODO: replace SALEID with uuid? find out easier way to do this from tim?

  function addItem (){
    let productInCart = {...product, cartId: uuid()}
    console.log("in cart item", productInCart);
    dispatch({ type: "ADD_ITEM", payload: productInCart})
  }
  return (
    <div className="cart-item">
      <img className="cart-img" src={img} alt={`img of ${name}`} />

      <div className="cart-text">
        <h4>{name.toUpperCase()}</h4>
        <strong>${price}</strong>
        <br></br>
      </div>
      <div>
        <div className="cart-add-subtract">
          {/* <strong>Qty: {qty}</strong> */}

          <Button onClick={addItem} variant="dark" size="sm" className="mx-1">
            +
          </Button>
          <Button onClick={removeItem} variant="dark" size="sm">
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
