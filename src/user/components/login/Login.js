import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import palm from "../../../icons/palm.png";
import hibiscus from "../../../icons/hibiscus.png";
//CSS
import "./Login.css";

const Login = (props) => {
  // State untuk modal
  const [show, setShowLogin] = useState(false);
  const [alertShow, setAlertShow] = useState({status:false, message:""});
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const loginHandler = () => {
    axios
      .post("http://localhost:5001/api/login", formLogin)
      .then((res) => {
        // do good things
        const { id, email, token, admin } = res.data.data;
        localStorage.setItem("id", JSON.stringify(id));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("admin", JSON.stringify(admin));
        handleClose();
        props.setisLoggedIn(true)
        // window.location.reload(false);
        history.push({
          pathname: "/",
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        setAlertShow({stats:true, message:err.response.data.message})
      });
  };

  const schema = yup.object().shape({
    email: yup.string().required().email(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  //onchange untuk form login
  const onChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Button
        variant="outline-light"
        onClick={handleShow}
        size="sm"
        className="loginbtn"
      >
        Login
      </Button>

      <Modal centered style={{width:"100%", margin:"auto", verticalAlign: 'middle'}} show={show} onHide={handleClose}>
        <img
          className="modal-palma"
          src={palm}
          // fluid
        />
        <img
          className="modal-hibiscus"
          src={hibiscus}
          // fluid
        />
        
        <Form onSubmit={handleSubmit(loginHandler)}>
        <Alert show={alertShow.status} onClose={() => setAlertShow({status:false})} dismissible variant="danger" >{alertShow.message}</Alert>
          <Modal.Header
            className="modal-header text-center"
            style={{ border: "0" }}
          >
            <Modal.Title className="modal-title w-100">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="Enter email"
                onChange={(e) => onChange(e)}
                ref={register}
              />
            </Form.Group>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <div className="col-md-12 text-center">
              {/* <Button variant="secondary" size="sm" onClick={handleClose}>
                Close
              </Button>{" "} */}
              <Button
                className="registerbtn"
                variant="warning"
                size="sm"
                type="submit"
                style={{width:"70%"}}
                // onClick={handleClose}
              >
                Login
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default Login;
