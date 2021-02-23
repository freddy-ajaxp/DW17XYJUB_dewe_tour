import React, { useEffect, useState, useContext } from "react";
import {
  Navbar as Div,
  Image,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
import Login from "../../components/login/Login";
import ProfileIcon from "./ProfileIcon";
import AdminIcon from "./AdminIcon";
import Signup from "../../components/login/Signup";
import DWT from "../../../icons/DWT.png";
import { Link } from "react-router-dom";
import UploadPictureContext from "../../context/UploadPictureContext";
import JumbImg from "../../../images/Jumbotron.png";

import "./navbar.css";

const NavUser = (props) => {
  const { backgroundImgTrue } = props;
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [rerender, setRerender] = useState(props.isImageUploaded);
  const { count, setCount } = useContext(UploadPictureContext);
  const cekLoggedIn = () => {
    if (localStorage.getItem("token")) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  };
  useEffect(() => {
    cekLoggedIn();
  }, [rerender]);

  useEffect(() => {
    cekLoggedIn();
  }, [count]);
  return (
    <Div
      className="navbar-container"
      style={
        backgroundImgTrue === false
          ? { backgroundImage: ` ` }
          : {
              backgroundImage: `url(${JumbImg})`,
            }
      }
    >
      <Div.Brand>
        <Link to={{ pathname: `/` }}>
          <Image className="logo" src={DWT} fluid />
        </Link>
      </Div.Brand>
      <Div.Collapse id="basic-navbar-nav" className="justify-content-end">
        {!localStorage.getItem("token") && (
          <>
            {" "}
            <Login setisLoggedIn={setisLoggedIn} />{" "}
            <Signup setisLoggedIn={setisLoggedIn}/>{" "}
          </>
        )}
        {localStorage.getItem("admin") === "false" && (
          <ProfileIcon setisLoggedIn={setisLoggedIn} rerender={props.isImageUploaded}/>
        )}
        {localStorage.getItem("admin") === "true" && (
          <AdminIcon setisLoggedIn={setisLoggedIn} />
        )}
      </Div.Collapse>
    </Div>
  );
};

export default NavUser;
