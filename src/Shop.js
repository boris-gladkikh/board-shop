import React from 'react';
import ProductList from './ProductList';

function Shop(){
  return(
    <div className="App">
      <h2 className="p-4">Available Boards</h2>
      <ProductList />
    </div>
  )

}
export default Shop;