import React from "react";
import ProductDetail from "./ProductDetail";
import Shop from "./Shop";
import Contact from "./Contact";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkout from "./Checkout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/shop/:name">
          <ProductDetail />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
