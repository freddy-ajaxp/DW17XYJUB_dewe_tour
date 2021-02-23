import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Navbar, Image, Nav, NavDropdown } from "react-bootstrap/";
import LogoutIcon from "../../../icons/logout.png";
import Profil from "../../../icons/user-2.png";
import BillIcon from "../../../icons/bill.png";
import { Link, useHistory } from "react-router-dom";
import UploadPictureContext from "../../context/UploadPictureContext";

const ProfileIcon = (props) => {
  const [profilUser, setProfilUser] = useState({});
  const [pictureUrl, setPictureUrl] = useState({
    imgSrc: `http://localhost:5001/uploads/profile_picture/default.png`,
    imgHash: Date.now(),
  });
  const { count } = useContext(UploadPictureContext);
  const [rerender, setRerender] = useState(null);
  let history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.clear();
    props.setisLoggedIn(false);
    history.push({
      pathname: "/",
    });
  };
  const getUser = async () => {
    const userId = JSON.parse(localStorage.getItem("id"));
    await axios({
      method: "GET",
      url: `http://localhost:5001/api/user/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((result) => {
        console.log("setelah get data user");
        setPictureUrl({
          imgSrc: `http://localhost:5001/uploads/profile_picture/${result.data.data.detailUser.picture}`,
          imgHash: Date.now(),
        });
        const resultTransactions = result.data.data.detailUser;
        setProfilUser(resultTransactions);
      })
      .catch((err) => {
        if (err) {
          console.log("error when fetch profile data");
        }
      });
  };
  // useEffect(() => {
  //   console.log("P.Icon Use Effect");
  // }, [count]);

  useEffect(() => {
    getUser();
    setRerender(props.rerender);
  }, [props.rerender]);

  useEffect(() => {
    if (rerender) {
      const timer = setTimeout(() => {
        // setPictureUrl(`http://localhost:5001/uploads/profile_picture/asdasd.JPG`)
        setPictureUrl({
          imgSrc:           `http://localhost:5001/uploads/profile_picture/${profilUser.picture}`,
          imgHash: Date.now(),
        });
      }, 1000);
    }
  }, [rerender]);

  return (
    <NavDropdown
      title={
        <Image
          className="border border-warning"
          key={pictureUrl.imgHash}
          src={`http://localhost:5001/uploads/profile_picture/${profilUser.picture}#${Date.now()}`
          }
          roundedCircle
          width="50px"
          height="50px"
        />
      }
      roundedCircle
      id="basic-nav-dropdown"
      drop="left"
    >
      <NavDropdown.Item>
        <Nav>
          <Link to="/Profile">
            <Image style={{ width: "30px" }} src={Profil} fluid />
            Profile
          </Link>
        </Nav>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Nav>
          <Link to="/Payment">
            <Image style={{ width: "30px" }} src={BillIcon} fluid /> Pay
          </Link>
        </Nav>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logoutHandler}>
        <Image
          onClick={logoutHandler}
          style={{ width: "30px" }}
          src={LogoutIcon}
          fluid
        />{" "}
        logout
      </NavDropdown.Item>
      </NavDropdown>
  );
};

export default ProfileIcon;
