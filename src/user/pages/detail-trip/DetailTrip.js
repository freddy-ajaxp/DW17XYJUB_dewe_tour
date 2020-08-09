import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import DestImg from "../../../images/Dest-Melbourne-1.png";
import DestImg2 from "../../../images/Dest-Melbourne-2.png";
import DestImg3 from "../../../images/Dest-Melbourne-3.png";
import DestImg4 from "../../../images/Dest-Melbourne-4.png";
import BuildingIcon from "../../../icons/BuildingIcon.png";
import CalendarIcon from "../../../icons/CalendarIcon.png";
import TimeIcon from "../../../icons/TimeIcon.png";
import MealIcon from "../../../icons/MealIcon.png";
import PlaneIcon from "../../../icons/PlaneIcon.png";
import MinusIcon from "../../../icons/Minus.png";
import PlusIcon from "../../../icons/Plus.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  Button,
  CardGroup,
  Card,
  Row,
  Col,
  Form,
  InputGroup,
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
    <Container className="p-3">
      <h1 style={{ textAlign: "left" }}>6D/4N Fun Tassie Vacation + Sydney</h1>
      <h3 style={{ textAlign: "left" }}>Australia</h3>

      <Container>
        <Row>
          <Col>
            <Image
              style={{ width: "100%", paddingBottom: "1rem" }}
              src={DestImg}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              style={{ width: "100%", marginBottom: "2rem" }}
              src={DestImg2}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ width: "100%", marginBottom: "2rem" }}
              src={DestImg3}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ width: "100%", marginBottom: "2rem" }}
              src={DestImg4}
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h4 style={{ textAlign: "left" }}>Information Trip</h4>
      </Container>
      <Container>
        <CardGroup>
          <Card
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                {" "}
                Accomodation
              </Card.Text>
              <span class="d-inline-block btn float-left">
                <Image
                  style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                  src={BuildingIcon}
                />
              </span>
              <Card.Text>Hotel 4 Nights</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Transportation
              </Card.Text>
              <span class="d-inline-block btn float-left">
                <Image
                  style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                  src={PlaneIcon}
                />
              </span>
              <Card.Text>Qatar Airways</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Eat</Card.Text>
              <span class="d-inline-block btn float-left">
                <Image
                  style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                  src={MealIcon}
                />
              </span>
              <Card.Text>Included as ltinerary</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Duration</Card.Text>
              <span class="d-inline-block btn float-left">
                <Image
                  style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                  src={TimeIcon}
                />
              </span>
              <Card.Text>6 Day 4 Night</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Date Trip</Card.Text>
              <span class="d-inline-block btn float-left">
                <Image
                  style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                  src={CalendarIcon}
                />
              </span>
              <Card.Text>26 August 2020</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Container>
        <h6 style={{ textAlign: "left" }}>Description</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Row>
          <Col>
            <span>
              <h5
                style={{
                  textAlign: "left",
                  color: "orange",
                  display: "inline",
                }}
              >
                <b>IDR. 12,398,000</b>
              </h5>
              <h5 style={{ display: "inline" }}>
                <b>&nbsp; / Person</b>
              </h5>
            </span>
          </Col>

          <Col>
            <Form>
              <Image
                style={{
                  float: "right",
                  maxWidth: "100rem",
                  marginBottom: "2rem",
                }}
                src={PlusIcon}
              />
              <Form.Group
                style={{
                  float: "right",
                  maxWidth: "5rem",
                  marginBottom: "2rem",
                }}
                controlId="formBasicEmail"
              >
                <Form.Control type="text" />
              </Form.Group>{" "}
              <Image
                style={{
                  float: "right",
                  maxWidth: "100rem",
                  marginBottom: "2rem",
                }}
                src={MinusIcon}
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row>
          <Col>
            <h5 style={{ textAlign: "left" }}>Total:</h5>
          </Col>

          <Col>
            <h5 style={{ textAlign: "right", color: "orange" }}>
              <b>IDR. 12,398,000</b>
            </h5>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <Link to="/IncomeTrip">
              <Button variant="warning" style={{ backgroundColor: "#FFAF00" }}>
                Book Now
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  </React.Fragment>
);

export default Home;
