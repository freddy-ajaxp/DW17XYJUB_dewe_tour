import React from "react";
import Container from "react-bootstrap/Container";
import DWT from "../../../icons/DWT2.png";
import NameIcon from "../../../icons/name.png";
import PhoneIcon from "../../../icons/PhoneIcon.png";
import PlaceIcon from "../../../icons/place.png";
import PostIcon from "../../../icons/post.png";
import Photo from "../../../images/Photo.png";
import QRIcon from "../../../icons/qr-code.png";
import ColoredLine from "../../components/shared/ColoredLine";
import {
  Button,
  Table,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap/lib/ReactRouterBootstrap";

const Profile = () => (
  //   <MemoryRouter>
  <React.Fragment>
    <Container className="p-3">
      <Container
        className="paymentdiv"
        style={{ width: "785px", height: "453px", left: "328px", top: "188px" }}
      >
        <Row style={{ height: "100%" }}>
          <Col xs={12} md={8} lg={7} style={{ backgroundColor: "" }}>
            <Container style={{ backgroundColor: "", marginTop: "1rem" }}>
              <h1> Personal Info</h1>
              <br></br>
            </Container>

            <Container
              style={{
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Container>
                <Row>
                  <Col lg={2}>
                    <Image style={{ height: "" }} src={NameIcon} />
                  </Col>
                  <Col style={{ backgroundColor: "white" }}>
                    {" "}
                    <Row>
                      <b>Radif Ganteng</b>
                    </Row>
                    <Row>Full name</Row>
                  </Col>
                </Row>{" "}
                <br />
                <Row>
                  <Col lg={2}>
                    <Image style={{ height: "" }} src={PostIcon} />
                  </Col>
                  <Col style={{ backgroundColor: "white" }}>
                    {" "}
                    <Row>
                      <b>radifgans@gmail.com</b>
                    </Row>
                    <Row>email</Row>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={2}>
                    <Image style={{ height: "" }} src={PhoneIcon} />
                  </Col>
                  <Col style={{ backgroundColor: "white" }}>
                    {" "}
                    <Row>
                      <b>0812-8623-8911</b>
                    </Row>
                    <Row>Mobile phone</Row>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={2}>
                    <Image style={{ height: "" }} src={PlaceIcon} />
                  </Col>
                  <Col style={{ backgroundColor: "white" }}>
                    {" "}
                    <Row>
                      <b>Alamat Rumah</b>
                    </Row>
                    <Row>Address</Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col xs={12} md={8} lg={5} style={{ backgroundColor: "" }}>
            <Container style={{ backgroundColor: "", marginTop: "1rem" }}>
              <Image style={{ height: "345px" }} src={Photo} fluid />
            </Container>
            <br></br>
            <Button variant="warning" size="lg" block>
              Change Photo Profile
            </Button>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>
    </Container>

    <Container>
      {" "}
      <h4>
        <b>DEWE TOUR</b>
      </h4>
    </Container>
    <Container className="p-3">
      <Container className="paymentdiv">
        {/* ROW 1 */}

        <Row>
          <Col style={{}} xs={12} md={9}>
            <Image style={{ width: "200px" }} src={DWT} fluid />
          </Col>
          <Col
            xs={12}
            md={3}
            className="justify-content-end"
            style={{ textAlign: "center" }}
          >
            <h4>
              <b>Booking</b>
            </h4>
            <p>Saturday, 22 Juy 2020</p>
          </Col>
        </Row>

        {/* ROW 2 */}
        <Row>
          <Col xs={12} md={5} style={{}}>
            <Container>
              <Row style={{}}>
                <h3>6D/4N Fun Tassie Vacations</h3>{" "}
              </Row>
            </Container>
            <Container>
              <Row>Australia</Row>
            </Container>
            <Container>
              <Row>
                <p className="Payment">Waiting Payment</p>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={2} style={{}}>
            <Container style={{}}>
              <Row style={{}}>Date Trip</Row>
              <Row>20 August 2020</Row>
            </Container>
            <br></br>
            <Container style={{}}>
              <Row style={{}}>Acco</Row>
              <Row>Hotel 4 night</Row>
            </Container>
          </Col>
          <Col xs={12} md={2} style={{}}>
            <Container style={{}}>
              <Row style={{}}>Duration</Row>
              <Row>6 Day 4 night</Row>
            </Container>
            <br></br>
            <Container style={{}}>
              <Row style={{}}>Transportation</Row>
              <Row>Cathar Airline</Row>
            </Container>
          </Col>

          <Col xs={12} md={3} style={{}}>
            <Container style={{ textAlign: "center" }}>
              <Image
                style={{ maxHeight: "138px" }}
                src={QRIcon}
                fluid
              />
              <p style={{}}>TCK0101</p>
            </Container>
          </Col>
        </Row>

        {/* ROW 3 */}
        <Row>
          

          {/* START */}
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col xs={1} md={1} lg={1}>
                <b>No</b>
              </Col>
              <Col xs={2} md={2} lg={2}>
                <b>Full Name</b>
              </Col>
              <Col xs={2} md={2} lg={2}>
                <b>Gender</b>
              </Col>
              <Col xs={2} md={2} lg={2}>
                <b>Phone</b>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col xs={1} md={1} lg={1}>
                1
              </Col>
              <Col xs={2} md={2} lg={2}>
                Nama seseorang
              </Col>
              <Col xs={2} md={2} lg={2}>
                Gender
              </Col>
              <Col xs={2} md={2} lg={2}>
                08123182819
              </Col>
              <Col
                xs={1}
                md={1}
                lg={2}
                style={{ backgroundColor: "", textAlign: "center" }}
              >
                <b>Qty</b>
              </Col>
              <Col
                xs={1}
                md={1}
                lg={1}
                style={{ backgroundColor: "", textAlign: "right" }}
              >
                <b>:</b>
              </Col>
              <Col
                xs={2}
                md={2}
                lg={2}
                style={{ backgroundColor: "", textAlign: "center" }}
              >
                <b>1</b>
              </Col>
            </Row>

            <hr></hr>
            <Row>
              <Col xs={7} md={7} lg={7}></Col>
              <Col
                xs={1}
                md={1}
                lg={2}
                style={{ backgroundColor: "", textAlign: "center" }}
              >
                <b>Total</b>
              </Col>
              <Col
                xs={1}
                md={1}
                lg={1}
                style={{ backgroundColor: "", textAlign: "right" }}
              >
                <b>:</b>
              </Col>
              <Col
                xs={2}
                md={2}
                lg={2}
                style={{ backgroundColor: "", textAlign: "center" }}
              >
                <b style={{ color: "red" }}>IDR. 4,500,000</b>
              </Col>
            </Row>
            <br></br>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            {/* Columns are always 50% wide, on mobile and desktop */}
          </Container>
        </Row>
      </Container>

      <br></br>
      <Container>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <Button variant="warning" style={{}}>
              Book Now
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  </React.Fragment>

  //   </MemoryRouter>
);

export default Profile;
