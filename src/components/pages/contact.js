import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import validateEmail from '../../utils/utils';

export default function Portfolio() {
    // uses validation code copied from react-bootstrap
    const [validated, setValidated] = useState(false);
    // const [nameValidated, setNameValidated] = useState(false);
    // const [emailValidated, setEmailValidated] = useState(false);
    // const [textValidated, setTextValidated] = useState(false);

    // function which will validate all the fields once clicked away
    const handleBlur = (target) => {
        const field = target.currentTarget;
        if (field.checkValidity() === false){
            target.preventDefault();
            target.stopPropagation();
        }
        setValidated(true);
        // the following code is left in for the future, when individual fields will be checked onBlur
        // if (field.id === "contactForm.ControlInput1"){
        //     setNameValidated(true);
        // } else if (field.id === "contactForm.ControlInput2"){
        //     setEmailValidated(true);
        // } else {
        //     setTextValidated(true);
        // }
    } 
// parts of the below code copied from https://react-bootstrap.github.io/  validated={validated}
// form field validation is done using the react-bootstrap built-in validation and HTML5 validation per the react-bootstrap documentation
return (
<Form noValidate validated={validated} style={{ color:'white' }}>
  <Form.Group className="mb-3" controlId="contactForm.ControlInput1" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Nick Holden" required onBlur={handleBlur} />
      <Form.Control.Feedback type="invalid">Please enter a Name.</Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" required onBlur={handleBlur} />
    <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} required onBlur={handleBlur} />
    <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
  </Form.Group>
  <Button variant="primary" type="submit">
      Submit
  </Button>
</Form>
);
}