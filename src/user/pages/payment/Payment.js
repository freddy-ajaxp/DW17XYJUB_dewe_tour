import React from "react";
import Container from "react-bootstrap/Container";
import DWT from "../../../icons/DWT2.png";
import BuktiPembayaranImg from "../../../images/bukti.png";
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
import "./payment.css";

const Payment = () => (
  //   <MemoryRouter>
  <React.Fragment>
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
                src={BuktiPembayaranImg}
                fluid
              />
              <p style={{}}>upload payment proof</p>
            </Container>
          </Col>
        </Row>

        {/* ROW 3 */}
        <Row>
          {/* <Table responsive borderless  hover size="sm" >
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center"}}>
              <tr>
                <td>1</td>
                <td>User 1</td>
                <td>6D/4N Fun Tassie Vaca ...</td>
                <td>
                  <p style={{ color: "red", textAlign: "center" }}>
                    {" "}
                    <a
                      style={{ textAlign: "center" }}
                      href="https://www.pakaiatm.com/wp-content/uploads/2020/03/Contoh-Bukti-Transfer-BRI-Asli-atau-Palsu.jpg"
                      target="_blank"
                    >
                      bukti transaksi
                    </a>
                  </p>
                </td>
                <td>
                  <p style={{ color: "orange", textAlign: "center" }}>
                    Overdue
                  </p>
                </td>

                <td>
                  <a href="/DetailTrip" title=""></a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>User 1</td>
                <td>6D/4N Fun Tassie Vaca ...</td>
                <td>
                  <p style={{ color: "red", textAlign: "center" }}>
                    {" "}
                    <a
                      style={{ textAlign: "center" }}
                      href="https://www.pakaiatm.com/wp-content/uploads/2020/03/Contoh-Bukti-Transfer-BRI-Asli-atau-Palsu.jpg"
                      target="_blank"
                    >
                      bukti transaksi
                    </a>
                  </p>
                </td>
                <td>
                  <p style={{ color: "orange", textAlign: "center" }}>
                    Overdue
                  </p>
                </td>

                <td>
                  <a href="/DetailTrip" title=""></a>
                </td>
              </tr>
            </tbody>
          </Table>
         */}

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

export default Payment;
