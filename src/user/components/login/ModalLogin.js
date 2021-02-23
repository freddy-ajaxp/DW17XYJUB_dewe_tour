import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Alert, Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import palm from "../../../icons/palm.png";
import hibiscus from "../../../icons/hibiscus.png";
import UploadPictureContext from "../../context/UploadPictureContext";

//CSS
import "./Login.css";

const ModalLogin = (props) => {
  // State untuk modal
  const [show, setShowLogin] = useState(false);
  const [alertShow, setAlertShow] = useState({ status: false, message: "" });
  const handleClose = () => {
    show? setShowLogin(false) : setShowLogin(true)
  };
  // const handleShow = () => setShowLogin(true);
  const { count, setCount } = useContext(UploadPictureContext);

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
        // window.location.reload(false);
        // history.push({
        //   pathname: "/",
        // });
        setCount(1);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        setAlertShow({ stats: true, message: err.response.data.message });
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
      <Modal show={props.modalShow} onHide={props.setModalShow}>
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
          <Alert
            show={alertShow.status}
            onClose={() => setAlertShow({ status: false })}
            dismissible
            variant="danger"
          >
            {alertShow.message}
          </Alert>
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
            <div className="col-md-11 text-center">
              <Button
                variant="secondary"
                size="sm"
                onClick={props.setModalShow}
              >
                Close
              </Button>{" "}
              <Button
                variant="primary"
                size="sm"
                type="submit"
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

export default ModalLogin;
