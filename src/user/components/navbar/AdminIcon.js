import React, { useEffect, useState } from "react";
import {
  Navbar,
  Image,
  Nav,
  NavDropdown,
} from "react-bootstrap/";
import LogoutIcon from "../../../icons/logout.png";
import { useHistory } from "react-router-dom";
import UserIcon from "../../../icons/user.png";
import TripIcon from "../../../icons/trip.png";
import { Link } from "react-router-dom";
import "./navbar.css"

const AdminIcon = (props) => {
  let history = useHistory();


  const logoutHandler = async (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.clear();
    props.setisLoggedIn(false)
    history.push({
      pathname: "/",
    });
  };

  return (
    <NavDropdown
      title={<Image src={UserIcon} className="profile-icon-image"/>}
      roundedCircle
      drop="left"
    >
    
      <NavDropdown.Item>
      <Link to="/IncomeTrip">
        <Nav>
            <Image style={{ width: "30px" }} src={TripIcon} fluid /> Trip
        </Nav>
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logoutHandler}>
        <Link to="/">
          <Image style={{ width: "30px" }} src={LogoutIcon} fluid /> logout
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default AdminIcon;
