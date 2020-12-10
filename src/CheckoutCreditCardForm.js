import React, { useState } from "react";
import Cards from "react-credit-cards";
import Button from "react-bootstrap/Button";
import "react-credit-cards/es/styles-compiled.css";
import "./CheckoutCreditCardForm.css";

let initialCreditCardData = {
  cvc: "",
  expiry: "",
  focus:"",
  name: "",
  number: "",
};

function CheckoutCreditCardForm({setCheckoutAfter}) {
  const [formData, setFormData] = useState({ ...initialCreditCardData });
  const [focus, setFocus] = useState({focus:""});


  //TODO: figure out why cvc won't turn unless you do the incorrect state and "focused" change
  let handleFocus = (evt) => {
     setFocus({focus:evt.target.name});
    // setFormData(d=>({
    //   ...d,
    //   focus:evt.target.name
    // }));
  };

  let handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  let handleSubmit = (evt) => {
    console.log("sending cc data to confirm payment", formData);
    setCheckoutAfter(true);
  };

  return (
    <div className="paymentForm">
      <h5>Credit Card Information</h5>

      <Cards
        cvc={formData.cvc}
        expiry={formData.expiry}
        focused={focus}
        name={formData.name}
        number={formData.number}
      />

      <form className="mt-3" onSubmit={handleSubmit}>
        <label htmlFor="number">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            name="number"
            type="tel"
            placeholder="Card Number"
            value={formData.number}
          ></input>
        </label>{" "}
        <br />
        <label htmlFor="name">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}

          ></input>
        </label>
        <label htmlFor="expiry">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            name="expiry"
            type="text" // make custom month, year input
            placeholder="Expiration"
            value={formData.expiry}

          ></input>
        </label>
        <br />
        <label htmlFor="cvc">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            name="cvc"
            type="text" 
            placeholder="CVC"
            value={formData.cvc}

          ></input>
        </label>
        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CheckoutCreditCardForm;
