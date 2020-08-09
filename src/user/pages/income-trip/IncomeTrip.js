import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
// import DestImg from "../../../images/Dest-Melbourne-1.png";
import DestImg from "../../../images/Dest-Melbourne-1.png";
import Icons from "../../../icons/BuildingIcon.png";
import MinusIcon from "../../../icons/Minus.png";
import PlusIcon from "../../../icons/Plus.png";
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
import { Link } from "react-router-dom";
import Dest1 from "../../../images/Dest1.png";
import Dest2 from "../../../images/Dest2.png";
import Dest3 from "../../../images/Dest3.png";
import Dest4 from "../../../images/Dest4.png";
import Dest5 from "../../../images/Dest5.png";
import Dest6 from "../../../images/Dest6.png";

const Homee = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;
// const urlGambar = '';
const Home = () => (
  //   <MemoryRouter>
  <React.Fragment>
    <Container className="p-3" style={{ minHeight: "50rem" }}>
      <Container>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <h1>Incoming Trip</h1>
          </Col>
          <Col style={{ textAlign: "right" }}>
            {" "}
            <Link to="/AddTrip">
              <Button
                variant="warning"
                style={{ backgroundColor: "#FFAF00" }}
                size="sm"
              >
                Add Trip
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Row>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest1}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>6D/4N Exciting Summer in ...</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 4,000,000</p>
              <p class="card-text float-right">South Korea</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest2}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>8D/6N Wonderful Autum ...</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 5,000,000</p>
              <p class="card-text float-right">Japan</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest3}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>4D/3N Overland Jakarta B...</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 2,000,000</p>
              <p class="card-text float-right">Indonesia</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest4}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>4D/3N Labuan Bajo Delight</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 2,000,000</p>
              <p class="card-text float-right">Indonesia</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest5}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>5D/4N Magic Tokyo Fun</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 5,500,000</p>
              <p class="card-text float-right">Japan</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "35px" }}>
          <Card.Img
            style={{ padding: "10px", align: "center" }}
            variant="top"
            src={Dest6}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }}>
              <b>6D/4N Fun Tassie Vacation ...</b>
            </Card.Title>
            <Card.Text>
              <p class="card-text float-left">Rp. 4,000,000</p>
              <p class="card-text float-right">Australia</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </React.Fragment>
);

export default Home;
