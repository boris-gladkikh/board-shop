import React, { useState } from "react";
import Cards from "react-credit-cards";
import Button from "react-bootstrap/Button";
import "react-credit-cards/es/styles-compiled.css";
import "./CheckoutCreditCardForm.css";

let initialCreditCardData = {
  cvc: "",
  expiry: "",
  focus: "",
  name: "",
  number: "",
};

function CheckoutCreditCardForm({setCheckoutAfter}) {
  const [formData, setFormData] = useState({ ...initialCreditCardData });

  let handleFocus = (e) => {
    setFormData((data) => ({
      ...data,
      focus: e.target.name,
    }));
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
        focused={formData.focus}
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
          ></input>
        </label>
        <label htmlFor="expiry">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            name="expiry"
            type="text" // make custom month, year input
            placeholder="Expiration"
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
