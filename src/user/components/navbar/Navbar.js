import React, { useEffect, useState } from "react";
import {
  Navbar,
  Image,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
import Login from "../../components/login/Login";
import Signup from "../../components/login/Signup";
import Picture from "./Picture";
import DWT from "../../../icons/DWT.png";
import LogoutIcon from "../../../icons/logout.png";
import UserIcon from "../../../icons/user.png";
import BillIcon from "../../../icons/bill.png";
import { Link } from "react-router-dom";

// import JumbImg from "../../../images/Jumbotron.png";
const NavUser = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand >
      <Nav.Link>
          <Link to="/">
          <Image
          style={{ width: "100%", paddingBottom: "1rem" }}
          src={DWT}
          fluid
        />
          </Link>
          </Nav.Link>
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
          <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/DetailTrip">DetailTrip</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/AddTrip">AddTrip</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/IncomeTrip">IncomeTrip</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/ListTransaction">ListTransaction</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Payment">Payment</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Profile">Profile</Link>
          </Nav.Link>

          <Nav.Link href="/"></Nav.Link>
        </Nav>
        <Form inline>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              {" "}
              <Image style={{ width: "30px" }} src={UserIcon} fluid /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Image style={{ width: "30px" }} src={BillIcon} fluid /> Pay
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <Image style={{ width: "30px" }} src={LogoutIcon} fluid /> logout
            </NavDropdown.Item>
          </NavDropdown>
          <Login></Login>
          <Signup></Signup>
          <Picture></Picture>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavUser;
