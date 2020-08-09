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
    <Navbar bg-color="red " expand="lg" className="">
      <Navbar.Brand>
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
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Login></Login>
        <NavDropdown
          title={<Image src={UserIcon} width="30" height="30"/>}
          roundedCircle
          id="basic-nav-dropdown"
          drop="left"
        >
        
          <NavDropdown.Item href="#">
          <Nav>
          <Link to="/Profile">
          <Image style={{ width: "30px" }} src={UserIcon} fluid /> Profile
          </Link>
            </Nav>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
          <Nav>
          <Link to="/Payment">
          <Image style={{ width: "30px" }} src={BillIcon} fluid /> PayProfile
          </Link>
            </Nav>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">
          <Link to="/">
          <Image style={{ width: "30px" }} src={LogoutIcon} fluid /> logout
          </Link>
          </NavDropdown.Item>
        </NavDropdown>
        {/* gak kepakai */}
        {/* <Signup></Signup> */}
        {/* <Picture></Picture> */}
      </Navbar.Collapse>
    </Navbar>
    
  );
};

export default NavUser;
