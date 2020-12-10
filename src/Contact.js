import React from 'react';
import ContactForm from './ContactForm';


function Contact(){
  return(
    <div className="App">
      <h2  className="px-5 pt-3">CONTACT US</h2>
      <h6 className="px-5">Our customer support team will get back to you within 24-36 hours.</h6>
      <ContactForm />
    </div>
  )

}
export default Contact;