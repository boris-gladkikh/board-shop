import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const INITIAL_STATE = {
  name:"",
  email:"",
  subject:"",
  body:""
}

//contact form component, for now just mocks form submission without a backend

function ContactForm(){
  const [formData, setFormData] = useState({...INITIAL_STATE});
  
    //TODO: will set up contact database in the backend - for now just logs form
    function handleSubmit(){
      console.log("Submitted form data:",formData);
      
    }

  function handleChange(evt) {
    let {name, value} = evt.target;
    setFormData(currentData => ({
      ...currentData,
      [name]: value
    }));
  
  }
  return(
    <Form onSubmit={handleSubmit} className="w-75 m-auto p-5 text-left">
      <Form.Group>
      <Form.Text>Note: all fields are required!</Form.Text>
      </Form.Group>
      <Form.Group >
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control required id="name" name="name" onChange={handleChange} placeholder="Ex: Bruce Wayne" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control required id="email" name="email" onChange={handleChange} placeholder="Ex: BruceW@google.com" />
        <Form.Text>We will never share your email with any third parties.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="subject">Subject:</Form.Label>
        <Form.Control required id="subject" name="subject" onChange={handleChange} as="select">
          <option>Customer Support</option>
          <option>Refunds and Returns</option>
          <option>Quality Assurance</option>
          <option>General Questions</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="body">Body:</Form.Label>
        <Form.Control required id="body" name="body" onChange={handleChange} as="textarea" rows="5" placeholder="Be Descriptive!" />
      </Form.Group>
      <div className="msg p-3">

      </div>
        <Button type="submit" className="bg-dark">SUBMIT</Button>
    </Form>

  )
}

export default ContactForm