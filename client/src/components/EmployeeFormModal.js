
import React, {useState} from 'react';
import { Button, Modal, Form, Col, ButtonGroup } from 'react-bootstrap';

function FormModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      const data = event.target.elements
      event.preventDefault();
      
      const formData = {
        first_name: data['firstName'].value,
        last_name: data['lastName'].value,
        department: data['department'].value,
        title: data['title'].value,
        email: data['email'].value,
        phone_number: data['phoneNumber'].value,
        location: {
          street: data['address'].value,
          city: data['city'].value,
          state: data['state'].value,
          postcode: data['zip'].value
        }
      }

      fetch('/api/employee', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });

      setValidated(true);
      handleClose();
    };
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Employee Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Department"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <ButtonGroup className="mr-2">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="primary" type="submit">
                Add Employee
              </Button>
            </ButtonGroup>
        </Form.Row>
        </Form>
        </Modal.Body>
        </Modal>
      </>
    );
  }

export default FormModal;