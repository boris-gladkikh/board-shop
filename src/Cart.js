import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * TODO: make cart responsive (breaks on smaller screens)
 *
 */

function Cart() {
  const shoppingCart = useSelector((store) => store.cart);
  const history = useHistory();
  const currentSubtotal = useSelector(store => store.subtotal);

  const shoppingList = shoppingCart.map((p) => (
    <Col lg="12">
      <CartItem
        key={p.id}
        id={p.id}
        name={p.name}
        price={p.price}
        img={p.img}
        qty={p.qty}
      />
    </Col>
  ));

  let cartDisplay =
    shoppingCart.length > 0 ? (
      <Row>{shoppingList}</Row>
    ) : (
      <div>
        {" "}
        <h4 className="text-white">Shopping Cart is Empty!</h4>
      </div>
    );

  function keepShopping() {
    history.push("/shop");
  }

  function checkOut() {
    history.push("/checkout");
  }

  return (
    <div className="App">
      <h2 className="mt-5">MY CART</h2>
      <div className="cart">
        {cartDisplay}
        <div className="subtotal">
          <strong className="text-white">Subtotal: ${currentSubtotal}</strong>
        </div>
        <div className="text-right mt-3">
          <Button onClick={keepShopping} variant="dark" className="mx-1">
            Keep Shopping
          </Button>
          <Button onClick={checkOut} variant="dark">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
