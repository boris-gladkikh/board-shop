import React from "react";
import Button from "react-bootstrap/Button";
import "./CartItem.css";
import { useDispatch } from "react-redux";

function CartItem({ product, id, name, img, qty, price }) {
  const dispatch = useDispatch();
  const removeItem = () => dispatch({ type: "REMOVE_ITEM", payload: product });
  const addItem = () => dispatch({ type: "ADD_ITEM", payload: product });
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
          <strong>Qty: {qty}</strong>

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
