import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import DWT from "../../../icons/DWT2.png";
import NameIcon from "../../../icons/name.png";
import PhoneIcon from "../../../icons/PhoneIcon.png";
import PlaceIcon from "../../../icons/place.png";
import PostIcon from "../../../icons/post.png";
import Photo from "../../../images/Photo.png";
import AltPhoto from "../../../images/AltPhoto.png";
import QRIcon from "../../../icons/qr-code.png";
import { Alert, Button, Row, Col, Image } from "react-bootstrap";
import UploadPictureContext from "../../context/UploadPictureContext";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Profile = (props) => {
  const { count, setCount } = useContext(UploadPictureContext);

  const [transactions, setTransactions] = useState([]);
  const [profilUser, setProfilUser] = useState({});
  const [alertShow, setAlertShow] = useState({ status: false, message: "" });
  const userId = JSON.parse(localStorage.getItem("id"));
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(Photo);
  const [isImageUploaded, setImageUploaded] = useState(); // checker jika gambar telah dipilih

  const onChangePicture = async (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      setPicture(e.target.files[0]);
    }
  };
  const uploadImage = async () => {
    const idUser = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("idUser", idUser);
    formData.append("profile", picture);
    await axios
      .patch(`http://localhost:5001/api/user/${idUser}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => {

        const timer = setTimeout(() => {
          isImageUploaded === "awal"
          ? setImageUploaded("akhir")
          : setImageUploaded("awal");
        }, 3000);

        // setCount(count + 1)
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          setAlertShow({ stats: true, message: err.response.data.message });
        } else {
          console.log("error dari axios", err);
          setAlertShow({
            stats: true,
            message:
              "terjadi kegagalan dalam upload gambar, refresh atau hubungi Administrator",
          });
        }
      });
  };

  const getTransactions = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `http://localhost:5001/api/transactions/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      const resultTransactions = result.data.data.transactions;
      console.log(resultTransactions)
      setTransactions(resultTransactions);
    } catch (err) {
      console.log(err);
      setAlertShow({
        stats: true,
        message:
          "terjadi kegagalan dalam mengambil data, refresh atau hubungi Administrator",
      });
    }
  };

  const getUser = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `http://localhost:5001/api/user/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      const resultUser = result.data.data.detailUser;
      // console.log("nilai: resultUser.picture", resultUser.picture);
      await setProfilUser(resultUser);
      await setImgData(
        `http://localhost:5001/uploads/profile_picture/${resultUser.picture}`
      );
    } catch (err) {
      console.log(err);
      setAlertShow({
        stats: true,
        message:
          "terjadi kegagalan dalam mengambil data, refresh atau hubungi Administrator",
      });
    }
  };
  const profileSection = () => {
    return (
      <>
        <Navbar isImageUploaded={isImageUploaded} />
        <Container className="p-3">
          <Alert
            show={alertShow.status}
            onClose={() => setAlertShow({ status: false })}
            dismissible
            variant="danger"
          >
            {alertShow.message}
          </Alert>
          <Container
            className="paymentdiv"
            style={{
              width: "785px",
              height: "453px",
              left: "328px",
              top: "188px",
            }}
          >
            <Row style={{ height: "100%" }}>
              <Col xs={12} md={8} lg={7} style={{ backgroundColor: "" }}>
                <Container style={{ backgroundColor: "", marginTop: "1rem" }}>
                  <h1> Personal Info</h1>
                  <br></br>
                </Container>

                <Container
                  style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <Container>
                    <Row>
                      <Col lg={2}>
                        <Image style={{ height: "" }} src={NameIcon} />
                      </Col>
                      <Col style={{ backgroundColor: "white" }}>
                        {" "}
                        <Row>
                          <b>{profilUser.fullname || "No Name"}</b>
                        </Row>
                        <Row>Full name</Row>
                      </Col>
                    </Row>{" "}
                    <br />
                    <Row>
                      <Col lg={2}>
                        <Image style={{ height: "" }} src={PostIcon} />
                      </Col>
                      <Col style={{ backgroundColor: "white" }}>
                        {" "}
                        <Row>
                          <b>{profilUser.email || "-"}</b>
                        </Row>
                        <Row>email</Row>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg={2}>
                        <Image style={{ height: "" }} src={PhoneIcon} />
                      </Col>
                      <Col style={{ backgroundColor: "white" }}>
                        {" "}
                        <Row>
                          <b>{profilUser.phone || "-"}</b>
                        </Row>
                        <Row>Mobile phone</Row>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg={2}>
                        <Image style={{ height: "" }} src={PlaceIcon} />
                      </Col>
                      <Col style={{ backgroundColor: "white" }}>
                        {" "}
                        <Row>
                          <b>{profilUser.address || "-"}</b>
                        </Row>
                        <Row>Address</Row>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Col>
              <Col xs={12} md={8} lg={5} style={{ backgroundColor: "" }}>
                <Container
                  style={{
                    minHeight: "345px",
                    backgroundColor: "",
                    marginTop: "1rem",
                  }}
                >
                  <Image
                    style={{ height: "345px" }}
                    //imageData untuk hotreload
                    src={imgData}
                    // src={`http://localhost:5001/uploads/profile_picture/${profilUser.picture}`}
                    fluid
                  />
                </Container>
                <br></br>
                <Button
                  variant="warning"
                  size="lg"
                  block
                  id="profilePic"
                  type="file"
                >
                  <input
                    id="profilePic"
                    type="file"
                    onChange={onChangePicture}
                  />
                </Button>
              </Col>
            </Row>
          </Container>

          <br></br>
          <br></br>
        </Container>
      </>
    );
  };
  const listTrips = transactions.map((dataTrip) => {
    return (
      <>
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
              <p>{dataTrip.Trip.date_trip}</p>
            </Col>
          </Row>
          {/* ROW 2 */}
          <Row>
            <Col xs={12} md={5} style={{}}>
              <Container>
                <Row style={{}}>
                  <h3>{dataTrip.Trip.title}</h3>{" "}
                </Row>
              </Container>
              <Container>
                <Row>{dataTrip.Trip.Country.nama_negara}</Row>
              </Container>
              <Container>
                <Row>
                  <p className="Payment">{dataTrip.status}</p>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={2} style={{}}>
              <Container style={{}}>
                <Row style={{}}>Date Trip</Row>
                <Row>{dataTrip.Trip.date_trip}</Row>
              </Container>
              <br></br>
              <Container style={{}}>
                <Row style={{}}>Accomodation</Row>
                <Row>Hotel 4 night</Row>
              </Container>
            </Col>
            <Col xs={12} md={2} style={{}}>
              <Container style={{}}>
                <Row style={{}}>Duration</Row>
                <Row>{`${dataTrip.Trip.day} Day ${dataTrip.Trip.night} night`}</Row>
              </Container>
              <br></br>
              <Container style={{}}>
                <Row style={{}}>Transportation</Row>
                <Row>{dataTrip.Trip.transportation}</Row>
              </Container>
            </Col>
            <Col xs={12} md={3} style={{}}>
              <Container style={{ textAlign: "center" }}>
                <Image style={{ maxHeight: "138px" }} src={QRIcon} fluid />
              </Container>
            </Col>
          </Row>
          {/* ROW 3 */}
          <Row>
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
                  {profilUser.fullname}
                </Col>
                <Col xs={2} md={2} lg={2}>
                  {profilUser.gender}
                </Col>
                <Col xs={2} md={2} lg={2}>
                  {profilUser.phone}
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
                  <b>{dataTrip.counterQty}</b>
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
                  <b style={{ color: "red" }}>
                    IDR. {Intl.NumberFormat("de-ID").format(dataTrip.total)}
                  </b>
                </Col>
              </Row>
              <br></br>
            </Container>
          </Row>
        </Container>
        <br></br>
      </>
    );
  });

  useEffect(() => {
    getTransactions();
    getUser();
  }, [count]);

  useEffect(() => {
    if (picture) {
      uploadImage();
    }
  }, [picture]);

  useEffect(() => {
    if (isImageUploaded) {
      console.log("berubah");
      // const timer = setTimeout(() => {
      // }, 3000);
      // isImageUploaded === "awal"
      // ? setImageUploaded("akhir")
      // : setImageUploaded("awal");
    }
  }, [isImageUploaded]);

  return (
    <React.Fragment>
      {profileSection()}

      <Container>
        {" "}
        <h4>
          <b>History Trip</b>
        </h4>
      </Container>
      <Container className="p-3">
        {listTrips}

        <br></br>
      </Container>
    </React.Fragment>
  );
};
export default Profile;
