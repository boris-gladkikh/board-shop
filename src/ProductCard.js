import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({product}){
  return(
    <Card className="m-2">
      <img className="img-fluid" src={product.img} alt={`board detail for ${product.name}`}></img>
      <p><b>{product.name}</b></p>
      <p><b>By {product.brand} - ${product.price} </b></p>
      <Button variant="dark">Add To Cart</Button>
    </Card>
  )

}

export default ProductCard