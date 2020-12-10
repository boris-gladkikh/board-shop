import React, {useState} from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import "./Checkout.css";

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
  let [formType, setFormType] = useState("Billing");





  return (
    <div className="App">
      <h2>CHECKOUT</h2>
      <div className="checkout-container">
        <CheckoutForm type={formType} setFormType={setFormType} />
        <CheckoutCart  />
      </div>
    </div>
  );
}

export default Checkout;
