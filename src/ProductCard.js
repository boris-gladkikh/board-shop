import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({product}){
  return(
    <Card className="m-2">
      <img className="img-fluid" src={product.img} alt={`board detail picture for ${product.name}`}></img>
      <p><b>{product.name}</b></p>
      <p><b>By {product.brand} - ${product.price} </b></p>
      <h6></h6>
      <Button variant="dark">Add To Cart</Button>
    </Card>
  )

}

export default ProductCard