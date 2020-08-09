import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import {Form, Card, Row, Col, Button, Modal } from "react-bootstrap";
//CSS
import "./Login.css";

  

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
    <>
      <Button  variant="primary" onClick={handleShow} size="sm">
        Login
      </Button>
      

      <Modal show={show} onHide={handleClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Text className="text-muted">
                Don't have an account? {" "}
                <a target="_blank" href="https://www.w3schools.com">
                  Sign up
                </a>
              </Form.Text>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
    </React.Fragment>
  );
};

export default Login;
