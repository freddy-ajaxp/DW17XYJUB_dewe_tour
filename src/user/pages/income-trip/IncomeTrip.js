import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import {
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./incomeTrip.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getTodos = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTk3Mjk1NTk0fQ.Xy4EyfPPEG1yRQza30Eieyhp1lI5ZejnZv0A16GaCPg";
    const result = await axios({
      method: "GET",
      url: "http://localhost:5001/api/trips-total",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(setLoading(false));
    const resultData = result.data.data.trips;
    await setTodos(resultData);
  };

  const listTrips = todos.map((dataTrip) => (
    <Card style={{ width: "18rem", margin: "35px" }}>
      <div className="container-quota">
        <p style={{ textAlign: "center", padding: "5px" }}>
        {dataTrip.Transaction?.takenTrip ? 
        `${dataTrip.Transaction?.takenTrip} / ${dataTrip.quota}`
        : 
        `0 / ${dataTrip.quota}`
        }</p>
      </div>
      <Link
        to={{
          pathname: `/DetailTrip/${dataTrip.id}`,
          propsTrip: { id: dataTrip.id },
        }}
      >
        <Card.Img
          style={{ padding: "10px", align: "center", minHeight:"13rem" }}
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


            {dataTrip.Transaction?.total ? 
            `${dataTrip.Transaction?.total
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`
              : '0'
              }
          </p>
          <p class="card-text float-right">{dataTrip.Country.nama_negara}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  useEffect(() => {
    getTodos();
  }, []);

  return (
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
                // className="add-trip-btn"
                  variant="warning"
                  size="sm"
                >
                <div className="add-trip-btn-text">Add Trip</div>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container style={{marginLeft:"2rem"}}> 
        <Row>
          {/* {(listTrips && listTrips.Transaction && listTrips.Transaction.takenTrip)  ? <h1>Loading...</h1> : <Row>{listTrips}</Row>} */}
          {/* {listTrips.Transaction  ? <Row>{listTrips}</Row>:<h1>Loading...</h1>} */}
          {isLoading? <h1>Loading...</h1> : <Row>{listTrips}</Row>}
        </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};
export default Home;
