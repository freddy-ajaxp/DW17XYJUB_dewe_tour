import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import DestImg from "../../../images/Dest-Melbourne-1.jpg";
import Icons from "../../../icons/BuildingIcon.png";
import MinusIcon from "../../../icons/Minus.png";
import PlusIcon from "../../../icons/Plus.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {
  Button,
  CardGroup,
  Card,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap/lib/ReactRouterBootstrap";

const Homee = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;
// const urlGambar = '';
const Home = () => (
  //   <MemoryRouter>
  <React.Fragment>
    <Container className="p-3" style={{ minHeight: "50rem" }}>
      <h1>Add Trip</h1>
      <br></br>
      <Form>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Title Trip</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="formGridState">
          <Form.Label>Country</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Accomodation</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Transportation</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Eat</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
        </Form.Group>
        <Form inline>
          <Form.Group>
            <Form.Control
              type="number"
              className="mx-sm-3"
              id="inputPassword6"
              aria-describedby="passwordHelpInline"
            />
            <Form.Label htmlFor="inputPassword6">Day</Form.Label>
            <Form.Control
              type="number"
              className="mx-sm-3"
              id="inputPassword6"
              aria-describedby="passwordHelpInline"
            />
            <Form.Label htmlFor="inputPassword6">Night</Form.Label>
          </Form.Group>
        </Form>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Date Trip</Form.Label>
          <Form.Control />{" "}
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Price</Form.Label>
          <Form.Control />{" "}
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Quota</Form.Label>
          <Form.Control />
        </Form.Group>

        <div className="mb-3">
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Image</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </div>

        <Button style={{}} className="text-center" variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  </React.Fragment>
);

export default Home;
