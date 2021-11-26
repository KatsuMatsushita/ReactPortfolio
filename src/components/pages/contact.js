import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Portfolio() {
// parts of the below code copied from https://react-bootstrap.github.io/
return (
<Form>
  <Form.Group className="mb-3" controlID="contactForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="input" placeholder="Nick Holden" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
      Submit
  </Button>
</Form>
);
}