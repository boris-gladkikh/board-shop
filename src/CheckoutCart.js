import React from "react";
import { useSelector } from "react-redux";
import CheckoutCartItem from "./CheckoutCartItem";
import { v4 as uuid } from "uuid";
import "./CheckoutCart.css";

function CheckoutCart() {
  const shoppingCart = useSelector((store) => store.cart);
  const currentSubtotal = useSelector((store) => store.subtotal);

  let shoppingList =
    shoppingCart.length === 0
      ? "Cart is empty"
      : shoppingCart.map((p) => (
            <CheckoutCartItem
              product={p}
              key={uuid()}
              id={p.id}
              name={p.name}
              price={p.price}
              img={p.img}
              qty={p.qty}
            />
        ));

  return (
    <div className="checkout-cart">
      <h5> My Cart</h5>
      <ul>{shoppingList}</ul>
      <div className="subtotal">
      <p>Subtotal:${currentSubtotal}</p>
      <p>Estimated Tax:$TODO</p>
      <p>Total: $TODO</p>
      </div>
    </div>
  );
}

export default CheckoutCart;
