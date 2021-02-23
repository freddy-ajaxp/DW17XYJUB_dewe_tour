import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
import Navbar from "../../../user/components/navbar/Navbar";
import "./home.css";

//START
const dotenv = require("dotenv");
const cardPromotionHome = [
  {
    // image:  {IconGuarantee},
    image: IconGuarantee,
    title: "Best Price",
    desc: "A small river named Duren flows by their place and supplies",
  },
  {
    image: IconHeart,
    title: "Travellers Love Us",
    desc: "A small river named Duren flows by their place and supplies",
  },
  {
    image: IconSupport,
    title: "Best Travel Agent",
    desc: "A small river named Duren flows by their place and supplies",
  },
  {
    image: IconAgen,
    title: "Our Dedicated Support",
    desc: "A small river named Duren flows by their place and supplies",
  },
];

const Home = (props) => {
  const [todos, setTodos] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getTodos = async () => {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get("http://localhost:5001/api/trips");
      const resultData = result.data.data.trips;
      setTodos(resultData);
    } catch {
      console.log("error");
    }
  };
  const listTrips = todos.map((dataTrip) => (
    <Card style={{ width: "18rem", margin: "35px" }}>
      <div className="container-quota">
        <p style={{ textAlign: "center", padding: "5px" }}>
          {dataTrip.Transaction?.takenTrip
            ? `${dataTrip.Transaction?.takenTrip} / ${dataTrip.quota}`
            : `0 / ${dataTrip.quota}`}
        </p>
      </div>
      <Link
        to={{
          pathname: `/DetailTrip/${dataTrip.id}`,
          state: {
            pesan: "pesan dikirim",
          },
        }}
      >
        <Card.Img
          style={{ padding: "10px", align: "center" }}
          variant="top"
          src={dataTrip.image}
        />
      </Link>
      <Card.Body>
        <Card.Title style={{ fontSize: "medium" }}>
          <b>{dataTrip.title.slice(0, 25) + "..."}</b>
        </Card.Title>
        <Card.Text>
          <p
            class="card-text float-left"
            style={{ color: "orange", fontWeight: "bold" }}
          >
            IDR.
            {`${dataTrip.price
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}
          </p>
          <p class="card-text float-right">{dataTrip.Country.nama_negara}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  ));


  const listItems = cardPromotionHome.map((dataCard) => {
    return (
      <Card style={{ width: "12rem", margin: "40px" }}>
        <Card.Img
          style={{ width: "5rem", marginTop: "30%" }}
          className="rounded mx-auto d-block"
          variant="top"
          src={dataCard.image}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {dataCard.title}
          </Card.Title>
          <Card.Text>{dataCard.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get("http://localhost:5001/api/search", {
        params: {
          keyword,
        },
      });
      const resultData = result.data.data.trips;
      setTodos(resultData);
    } catch (err) {}
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${require("../../../images/Jumbotron.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar backgroundImgTrue={false}></Navbar>
        <Jumbotron
          style={{
            color: "#fff",
            background: "rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="outer" id="outer">
            <div className="home-header">
              <div className="home-header-title">Explore</div>
              <div className="home-header-subtitle">
                Your Amazing City Together
              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="home-search-container">
            <div className="home-search-title">Find great place to holiday</div>
            <Form onSubmit={(e) => searchHandler(e)}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Cari Destinasi"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
                <InputGroup.Append>
                  <InputGroup.Text className="home-search-button">
                    Search
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </div>
        </Jumbotron>
      </div>

      <div style={{ marginTop: "-7rem" }}>
        <Container>
          <Row>{listItems}</Row>
          <Row>
            <Container>
              <h1 style={{ textAlign: "center" }}>Group Tour</h1>
            </Container>
          </Row>

          <Row></Row>
          {listTrips.length < 1 && (
            <h1 style={{ textAlign: "center" }}>Data tidak Ditemukan...</h1>
          )}
          {/* {listTrips ? <h1>Loading...</h1> : <Row>{listTrips}</Row>} */}
          {listTrips.country ? <h1>Loading...</h1> : <Row>{listTrips}</Row>}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
