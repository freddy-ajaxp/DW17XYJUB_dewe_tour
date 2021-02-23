import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import BuildingIcon from "../../../icons/BuildingIcon.png";
import CalendarIcon from "../../../icons/CalendarIcon.png";
import TimeIcon from "../../../icons/TimeIcon.png";
import MealIcon from "../../../icons/MealIcon.png";
import PlaneIcon from "../../../icons/PlaneIcon.png";
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
  Image,
} from "react-bootstrap";
import ModalLogin from "../../components/login/ModalLogin";
import "./DetailTrip.css";

const Home = (props) => {
  let history = useHistory();
  const { id } = useParams();
  const [dataTrip, setdataTrip] = useState({});
  const [Qty, setQty] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [form, setForm] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [kapasitas, setKapasitas] = useState({ cukup: true, sisa: 0 });
  const onChange = (e) => {
    if (e.target.value > 0 && e.target.value < 21) setQty(e.target.value);
  };

  const bookClickHandler = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("id")) {
      await setForm({
        counterQty: Qty,
        total: totalHarga,
        status: "Waiting Payment",
        attachment: "",
        tripId: id,
        // userId: dataTrip.user_id,
        userId: localStorage.getItem("id"),
      });
    } else {
      setModalShow(true);
    }
  };
  const sendForm = async (e) => {
    try {
      await axios.post("http://localhost:5001/api/transaction", form, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      history.push({
        pathname: "/Payment",
        state: { userId: localStorage.getItem("id") },
      });
    } catch (err) {
      console.log("error saat booking", err);
    }
  };
  const getTrip = async () => {
    try {
      const result = await axios.get(`http://localhost:5001/api/trip/${id}`);
      const { detailTrip } = result.data.data;
      setdataTrip(detailTrip);
      const takenTrip = detailTrip.Transaction?.takenTrip || 0;
      let sisaTrip = detailTrip.quota - takenTrip;
      await setKapasitas({ cukup: true, sisa: sisaTrip });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (action) => {
    if (action === "kurang" && Qty > 1) {
      await setQty((prevQty) => Qty - 1);
      await setTotalHarga(dataTrip.price * Qty);
      await setKapasitas({ ...kapasitas, cukup: true });
    } else if (action === "tambah" && Qty < kapasitas.sisa) {
      await setQty((prevQty) => Qty + 1);
      await setTotalHarga(dataTrip.price * Qty);
    } else if (Qty === kapasitas.sisa) {
      console.log("idketik")
      setKapasitas({ ...kapasitas, cukup: false });
    }
  };
  const kurangiQty = async () => {
    if (Qty > 1) {
      setQty((prevQty) => Qty - 1);
      setTotalHarga(dataTrip.price * Qty);
    }
  };
  const tambahQty = async () => {
    if (Qty < 10) {
      setQty((prevQty) => Qty + 1);
      setTotalHarga(dataTrip.price * Qty);
    }
  };
  useEffect(() => {
    getTrip();
  }, []);

  useEffect(() => {
    if (form.total) {
      sendForm();
    }
  }, [form]);

  useEffect(() => {
    if (dataTrip.ImageTrip && dataTrip.ImageTrip.id) {
    }
  }, [dataTrip]);

  useEffect(() => {
    setTotalHarga(dataTrip.price * Qty);
  }, [Qty, dataTrip]);

  return (
    //   <MemoryRouter>
    <React.Fragment>
      <Container className="p-3">
        <h1 style={{ textAlign: "left" }}>{dataTrip.title}</h1>
        <h3 style={{ textAlign: "left" }}>{dataTrip?.Country?.nama_negara}</h3>
        <br />
        <Container>
          <Row>
            <Col>
              <Image
                style={{ width: "100rem", paddingBottom: "1rem" }}
                src={dataTrip.image}
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="etalase-sub"
                src={dataTrip.image_trip_2}
                fluid
              />
            </Col>
            <Col>
              <Image
                className="etalase-sub"
                src={dataTrip.image_trip_3}
                fluid
              />
            </Col>
            <Col>
              <Image
                className="etalase-sub"
                src={dataTrip.image_trip_4}
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
              <Card.Body style={{}}>
                <Card.Text style={{ fontSize: "90%", textAlign: "center" }}>
                  Accomodation
                </Card.Text>
                <span class="d-inline-block btn float-left">
                  <Image
                    style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                    src={BuildingIcon}
                  />
                </span>
                <Card.Text style={{ fontSize: "80%", textAlign: "center" }}>
                  <b>{dataTrip.accomodation}</b>
                </Card.Text>
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
                <Card.Text style={{ fontSize: "90%", textAlign: "center" }}>
                  Transportation
                </Card.Text>
                <span class="d-inline-block btn float-left">
                  <Image
                    style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                    src={PlaneIcon}
                  />
                </span>
                <Card.Text style={{ fontSize: "80%", textAlign: "center" }}>
                  <b>{dataTrip.transportation}</b>
                </Card.Text>
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
                <Card.Text style={{ fontSize: "90%", textAlign: "center" }}>
                  Eat
                </Card.Text>
                <span class="d-inline-block btn float-left">
                  <Image
                    style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                    src={MealIcon}
                  />
                </span>
                <Card.Text style={{ fontSize: "80%", textAlign: "center" }}>
                  <b>{dataTrip.eat}</b>
                </Card.Text>
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
                <Card.Text style={{ fontSize: "90%", textAlign: "center" }}>
                  Duration
                </Card.Text>
                <span class="d-inline-block btn float-left">
                  <Image
                    style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                    src={TimeIcon}
                  />
                </span>
                <Card.Text style={{ fontSize: "80%", textAlign: "center" }}>
                  <b>
                    {dataTrip.day} Day {dataTrip.night} Night
                  </b>
                </Card.Text>
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
                <Card.Text style={{ fontSize: "90%", textAlign: "center" }}>
                  Date Trip
                </Card.Text>
                <span class="d-inline-block btn float-left">
                  <Image
                    style={{ maxWidth: "100rem", marginBottom: "2rem" }}
                    src={CalendarIcon}
                  />
                </span>

                <Card.Text style={{ fontSize: "80%", textAlign: "" }}>
                  <b>{`${dataTrip.date_trip}`.replace("-", " - ")}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <Container>
          <h4 style={{ textAlign: "left" }}>Description</h4>
          <p>{dataTrip.description}</p>
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
                  <b>
                    {"IDR. "}{" "}
                    {Intl.NumberFormat("de-ID").format(dataTrip.price)}
                  </b>
                </h5>
                <h5 style={{ display: "inline" }}>
                  <b>&nbsp;/ Person</b>
                </h5>
              </span>
            </Col>

            <Col>
            {(localStorage.getItem('admin') ==='true' ) ? null :
              <Form>
                <Image
                  // onClick={tambahQty}
                  // onClick={() => {
                  //   Qty < 20 && setQty(Qty + 1);
                  // }}
                  onClick={() => {
                    handleChange("tambah");
                  }}
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
                >
                  {/* <Form.Control
                    type="text"
                    value={Qty}
                    onChange={(e) => onChange(e)}
                  ></Form.Control> */}
                  <div className="orderQuantity">{Qty}</div>
                </Form.Group>{" "}
                <Image
                  // onClick={kurangiQty}
                  // onClick={() => {
                  //   Qty > 1 && setQty(Qty - 1);
                  // }}
                  onClick={() => {
                    handleChange("kurang");
                  }}
                  style={{
                    float: "right",
                    maxWidth: "100rem",
                    marginBottom: "2rem",
                  }}
                  src={MinusIcon}
                />
              </Form>
            }
            </Col>
          </Row>
          <Row>
            <Col className="row justify-content-end">
              <div className="message-capacity">
                {kapasitas.cukup ? null : (
                  <p>maaf, hanya tersisa  {kapasitas.sisa} slot</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        {(localStorage.getItem('admin') ==='true' ) ? null :
        <Form onSubmit={bookClickHandler}>
          <Container>
            <Row>
              <Col>
                <h5 style={{ textAlign: "left" }}>Total:</h5>
              </Col>
              <Col>
                <h5 style={{ textAlign: "right", color: "orange" }}>
                  <b>
                    {"IDR. "}
                    {Intl.NumberFormat("de-ID").format(totalHarga)}
                  </b>
                </h5>
              </Col>
            </Row>
          </Container>
          <hr></hr>
          <Container>
            <Row>
              <Col style={{ textAlign: "right" }}>
                <Link>
                  <Button
                    variant="warning"
                    style={{ backgroundColor: "#FFAF00" }}
                    type="submit"
                    onClick={bookClickHandler}
                  >
                    Book Now
                  </Button>{" "}
                </Link>
              </Col>
            </Row>
          </Container>
        </Form>
        }
      </Container>
      <ModalLogin
        modalShow={modalShow}
        setModalShow={setModalShow}
      ></ModalLogin>
    </React.Fragment>
  );
};

export default Home;
