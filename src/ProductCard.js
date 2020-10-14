import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function addItem() {
    let productInCart = { ...product, cartId: uuid() };
    console.log("in cart item", productInCart);
    dispatch({ type: "ADD_ITEM", payload: productInCart });
  }

  return (
    <Card className="m-2">
      <NavLink to={`/shop/${product.name}`}>
        <img
          className="img-fluid img-link"
          src={product.img}
          alt={`board detail for ${product.name}`}
        ></img>
      </NavLink>
      <p>
        <b>{product.name}</b>
      </p>
      <p>
        <b>
          By {product.brand} - ${product.price}{" "}
        </b>
      </p>
      <Button onClick={addItem} variant="dark">
        Add To Cart
      </Button>
    </Card>
  );
}

export default ProductCard;
