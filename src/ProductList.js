import React from "react";
import inventory from "./inventory.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";

function ProductList() {
  const productsBasicArray = inventory.productsSimple;
  let productCards = productsBasicArray.map((p) => (
    <Col md="12" lg="4" xl="3" key={p.id}>
      <ProductCard product={p} key={p.id} />
    </Col>
  ));

  return (
    <Container className="px-5">
      <Row>{productCards}</Row>
    </Container>
  );
}
export default ProductList;
