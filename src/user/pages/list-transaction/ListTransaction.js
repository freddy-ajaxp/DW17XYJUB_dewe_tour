import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import DestImg from "../../../images/Dest-Melbourne-1.jpg";
import Icons from "../../../icons/BuildingIcon.png";
import MinusIcon from "../../../icons/Minus.png";
import PlusIcon from "../../../icons/Plus.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Button, Table, Image } from "react-bootstrap";
import SearchIcon from "../../../icons/search.png";

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
      <h1>List Transaction</h1>
      <br></br>

      <div>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                <p style={{ color: "orange", textAlign: "center" }}>Overdue</p>
              </td>

              <td>
                <a href="/DetailTrip" title="">
                  <Image
                    src={SearchIcon}
                    roundedCircle
                    style={{ maxWidth: "25px" }}
                    class="img-responsive"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>User 2</td>
              <td>6D/4N Wonderful Autum ...</td>
              <td>
                <p style={{ color: "green", textAlign: "center" }}>
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
                <p style={{ color: "red", textAlign: "center" }}>Nyicil</p>
              </td>

              <td>
                <a href="/DetailTrip" title="">
                  <Image
                    src={SearchIcon}
                    roundedCircle
                    style={{ maxWidth: "25px" }}
                    class="img-responsive"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>User 3</td>
              <td>6D/4N Exciting Summer...</td>
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
                <p style={{ color: "Green", textAlign: "center" }}>Lunas</p>
              </td>

              <td>
                <a href="/DetailTrip" title="">
                  <Image
                    src={SearchIcon}
                    roundedCircle
                    style={{ maxWidth: "25px" }}
                    class="img-responsive"
                  />
                </a>
              </td>
            </tr>

          </tbody>
        </Table>
      </div>
    </Container>
  </React.Fragment>
);

export default Home;
