import React, {useState} from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import "./Checkout.css";
import CheckoutCreditCardForm from "./CheckoutCreditCardForm";
import CheckoutAfter from "./CheckoutAfter";

/*
 * TODO::
*create breadcrumbs and checkout flow

 * create checkout page displaying shipping form/billing form
 * create credit card form that shows after shipping/billing complete
 * create checkoutAfter page that shows order being complete & confetti or something?
 * show cart in itemized list (pull card from redux store)
 * create subtotal/ tax / shipping /
 */

function Checkout() {
  let [showCC, setShowCC] = useState(false);
  let [showCheckoutAfter, setShowCheckoutAfter] = useState(false);


if(showCheckoutAfter){
  return(
    <div className="App">
    <h2>CHECKOUT</h2>
      <CheckoutAfter />
  </div>

  )
}

if(showCC){
  return(
    <div className="App">
    <h2>CHECKOUT</h2>
    <div className="checkout-container">
      <CheckoutCreditCardForm setCheckoutAfter={setShowCheckoutAfter} />
      <CheckoutCart  />
    </div>
  </div>
  )
}




  return (
    <div className="App">
      <h2>CHECKOUT</h2>
      <div className="checkout-container">
        <CheckoutForm setShowCC={setShowCC}/>
        <CheckoutCart  />
      </div>
    </div>
  );
}

export default Checkout;
