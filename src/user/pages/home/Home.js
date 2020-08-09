import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {
  Button,
  Card,
  Row,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap/lib/ReactRouterBootstrap";
import IconAgen from "../../../icons/agent_1.png";
import IconGuarantee from "../../../icons/guarantee_1.png";
import IconHeart from "../../../icons/heart_1.png";
import IconSupport from "../../../icons/support_1.png";
import JumbImg from "../../../images/Jumbotron.png";
import Dest1 from "../../../images/Dest1.png";
import Dest2 from "../../../images/Dest2.png";
import Dest3 from "../../../images/Dest3.png";
import Dest4 from "../../../images/Dest4.png";
import Dest5 from "../../../images/Dest5.png";
import Dest6 from "../../../images/Dest6.png";

// const urlGambar = '';
const Home = () => (
  //   <MemoryRouter>
  <React.Fragment>
    <div
      style={{
        backgroundImage:
          "url(https://www.hipi.info/wp-content/uploads/2014/06/summer-palm-beach-holiday-1500x500-twitter-header-30-1024x341.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Container style={{backgroundImage: "url(https://www.hipi.info/wp-content/uploads/2014/06/summer-palm-beach-holiday-1500x500-twitter-header-30-1024x341.jpg)",  backgroundRepeat: "no-repeat",  backgroundSize: "cover"}}>     */}
      <Jumbotron
        className="jumbotron"
        style={{ background: "rgba(0,0,0,0.0)", color: "#fff" }}
      >
        <h1 style={{ textAlign: "left", textShadow: "2px 2px #000000" }}>
          Explore
        </h1>
        <h3 style={{ textAlign: "left", textShadow: "2px 2px #000000" }}>
          Your Amazing City Together
        </h3>
        <br></br>
        <br></br>
        <p style={{ textAlign: "left", textShadow: "2px 2px #000000" }}>
          Find great place to holiday
        </p>
        <Form>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Cari Destinasi"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="btnGroupAddon2">Search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Jumbotron>
      {/* </Container> */}
    </div>

    <div>
      <Container className="p-3">
        <Row>
          <Card style={{ width: "12rem", margin: "40px" }}>
            <Card.Img
              style={{ width: "5rem", marginTop: "30%" }}
              className="rounded mx-auto d-block"
              variant="top"
              src={IconGuarantee}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Best Price
              </Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "40px" }}>
            <Card.Img
              style={{ width: "5rem", marginTop: "30%" }}
              className="rounded mx-auto d-block"
              variant="top"
              src={IconHeart}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Travellers Love Us
              </Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "40px" }}>
            <Card.Img
              style={{ width: "5rem", marginTop: "30%" }}
              className="rounded mx-auto d-block"
              variant="top"
              src={IconSupport}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Best Travel Agent
              </Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem", margin: "40px" }}>
            <Card.Img
              style={{ width: "5rem", marginTop: "30%" }}
              className="rounded mx-auto d-block"
              variant="top"
              src={IconAgen}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Our Dedicated Support
              </Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Container>
            <h1 style={{ textAlign: "center" }}>Group Tour</h1>
          </Container>
        </Row>

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
            <a href="/DetailTrip">
              <Card.Img
                style={{ padding: "10px", align: "center" }}
                variant="top"
                src={Dest6}
              />
            </a>
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
    </div>
  </React.Fragment>

  //   </MemoryRouter>
);

export default Home;
