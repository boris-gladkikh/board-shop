import React, { useState } from "react";
import "./CheckoutForm.css";
import Button from "react-bootstrap/Button";
// import ErrorHandler from "./ErrorHandler";

function CheckoutForm({setShowCC}) {
  let [formType, setFormType] = useState("Shipping");

  let initFormData = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  const [formData, setFormData] = useState({ ...initFormData });

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("this is form data on submit", formData);
    setFormType("Billing");
  }

  //Submit form Data
  //TODO: send billing and shipping information together
  function handleBillingSameAsShippingData(){
    console.log("billing same as shipping clicked!");
    setShowCC(true);
  }

  let showSameDataButton = formType === "Billing" ? 
  <Button size="sm" className="mb-2" variant="dark" onClick={handleBillingSameAsShippingData}>Address Same As Shipping</Button> :
  " "

  return (

    <form onSubmit={handleSubmit} className="checkout-form">
      <h5>{formType} Information</h5>
      {showSameDataButton}
      <label htmlFor="first_name">
        <input
          onChange={handleChange}
          type="text"
          name="first_name"
          placeholder="First Name"
        />
      </label>
      <br />
      <label htmlFor="last_name">
        <input
          onChange={handleChange}
          type="text"
          name="last_name"
          placeholder="Last Name"
        />
      </label>
      <br />
      <label htmlFor="Email">
        <input
          onChange={handleChange}
          type="Email"
          name="Email"
          placeholder="Email"
        ></input>
      </label>
      <br />
      <label htmlFor="adress-1">
        <input
          onChange={handleChange}
          type="text"
          name="adress-1"
          placeholder="Address Line 1"
        />
      </label>
      <br />
      <label htmlFor="adress-2">
        <input
          onChange={handleChange}
          type="text"
          name="address-2"
          placeholder="Address Line 2"
        />
      </label>
      <br />
      <label htmlFor="city">
        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="City"
        />
      </label>
      <br />
      <label htmlFor="state">
        <input
          onChange={handleChange}
          type="text"
          name="state"
          placeholder="State"
        />
      </label><br/>
      <label htmlFor="zip">
        <input
          onChange={handleChange}
          type="text"
          name="zip"
          placeholder="Zip Code"
        />
      </label>
      <br />
      <Button variant="dark" type="submit">
        SUBMIT
      </Button>
    </form>
  );
}

export default CheckoutForm;
