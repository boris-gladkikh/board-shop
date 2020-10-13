import React from "react";
import { useParams, useHistory } from "react-router-dom";
import inventory from "./inventory";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ProductDetail.css";

//detail component displaying detailed description of product, with purchase button

function ProductDetail() {
  const history = useHistory();
  const { name } = useParams();
  let product = inventory.products.filter((product) => product.name === name);
  product = product[0];

  function keepShopping() {
    history.push("/shop");
  }
  function addToCart() {
    //#TODO::::
  }

  return (
    <div className="App p-4">
      <h2 className="mt-5 detail-name">{product.name}</h2>
      <Row>
        <Col md="6" sm="12" className="mt-5">
          <img
            className="img-detail"
            src={product.img}
            alt={`pic of ${product.name}`}
          ></img>
        </Col>
        <Col md="6" sm="12" className="text-left p-4">
          <strong>Description:</strong>
          <p className="">{product.description}</p>
          <strong>brand:</strong>
          <p>{product.brand}</p>
          <strong>type:</strong>
          <p>{product.type}</p>
          <strong>Range:</strong>
          <p>{product.range}</p>
          <strong>Top Speed:</strong>
          <p>{product.topSpeed}</p>
          <strong>Price:</strong>
          <strong> ${product.price}</strong><br/>
          <small>(Taxes will be calculated at checkout)</small>
        </Col>
      </Row>
      <div className="text-center mt-3">
        <Button onClick={keepShopping} variant="dark" className="mx-1">
          Keep Shopping
        </Button>
        <Button onClick={addToCart} variant="dark">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
export default ProductDetail;
