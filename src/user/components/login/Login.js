import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import {Form, Card, Row, Col, Button, Modal } from "react-bootstrap";
//CSS
import "./Login.css";

  

const Login = () => {
  const [show, setShowLogin] = useState(false);
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  const [signupShow, setShowSignup] = useState(false);
  const SignUpClose = () => setShowSignup(false);
  const SignUpShow = () => setShowSignup(true) ;
  

  return (
    <React.Fragment>
      <Button  variant="outline-dark" onClick={handleShow} size="sm" className="loginbtn">
        Login
      </Button>
      <Button  variant="secondary" onClick={SignUpShow} size="sm" className="registerbtn">
          Register
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
                <a  href="#signup" onClick={handleClose, SignUpShow}>
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

      <Modal show={signupShow} onHide={SignUpClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group controlId="formBasicEmail">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                 
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Phone" />
                </Form.Group>
                 
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={SignUpClose}>
              Close
            </Button>
            <Button variant="primary" size="sm" onClick={SignUpClose}>
              Register
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    </React.Fragment>
  );
};

export default Login;
