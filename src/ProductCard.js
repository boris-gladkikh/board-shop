import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import './ProductCard.css';

function ProductCard({product}){
  return(
    <Card className="m-2">
      <NavLink to={`/shop/${product.name}`}>
      <img className="img-fluid img-link" src={product.img} alt={`board detail for ${product.name}`}></img>
      </NavLink>
      <p><b>{product.name}</b></p>
      <p><b>By {product.brand} - ${product.price} </b></p>
      <Button variant="dark">Add To Cart</Button>
    </Card>
  )

}

export default ProductCard