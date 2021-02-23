import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import DWT from "../../../icons/DWT2.png";
import BuktiPembayaranImg from "../../../images/bukti.png";
import { Button, Row, Col, Modal, Image } from "react-bootstrap";
import pleaseUpload from "../../../icons/please-upload.png"
import "./payment.css";
import Navbar from "../../components/navbar/Navbar";

const Payment = () => {
  const [show, setShowLogin] = useState(false); //untuk show modal konfirmasi, abaikan nama 'login'
  const [transactions, setTransactions] = useState([]); //data tiap transaksi
  const [profilUser, setProfilUser] = useState({}); // data user tiap transaksi
  const [formUpdateTrans, setFormUpdateTrans] = useState({
    status: "",
    attachment: "",
  });
  const [imgDitampilkan, setImgDitampilkan] = useState(); // data user tiap transaksi
  const [isImageUploaded, setImageUploaded] = useState(false); // checker jika gambar telah dipilih
  const [transIdModal, setTransIdModal] = useState(); //id trans to pass to modal
  const userId = JSON.parse(localStorage.getItem("id"));

  // const location = useLocation();
  const confirmationModal = () => {
    show ? setShowLogin(false) : setShowLogin(true);
    getTransactions();
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setFormUpdateTrans({ ...formUpdateTrans, attachment: e.target.files[0] });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgDitampilkan(reader.result);
      }); 
      reader.readAsDataURL(e.target.files[0]);
      // setImgDitampilkan(e.target.files[0]);
      setImageUploaded(true);

    }
  };

  const clickPay = async (idTransaksi) => {
    if (isImageUploaded) {
      setTransIdModal(idTransaksi);
      show ? setShowLogin(false) : setShowLogin(true);
      const formData = new FormData();
      formData.append("idUser", localStorage.getItem("id"));
      formData.append("idTransaksi", idTransaksi);
      formData.append("status", "Waiting Approval");
      formData.append("attachment", formUpdateTrans.attachment);
      const token = JSON.parse(localStorage.getItem("token"));
      const requestOptions = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: formData,
      };
      try {
        fetch(
          `http://localhost:5001/api/transaction/pay/${idTransaksi}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => console.log("return hasil", data));
      } catch (error) {
        console.log("respond axios", error);
      }
    }
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
      setTransactions(resultTransactions);
      console.log("hasil transaction", resultTransactions)
    } catch (err) {
      console.log(err);
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
      setProfilUser(resultUser);
    } catch (err) {
      console.log(err);
    }
  };

  const listTrips = transactions.map((dataTrip, index) => {
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
                <Image
                  style={{ maxHeight: "138px" }}
                  // src={imgDitampilkan}
                  src={`http://localhost:5001/uploads/${dataTrip.attachment}`}
                  onError={(e)=>{e.target.onerror = null; e.target.src=pleaseUpload}}
                  onChange={onChangePicture}
                  fluid
                />
                {dataTrip.status == "Waiting Payment" && (
                  <>
                    <input
                      type="file"
                      name="image"
                      style={{ width: "250px" }}
                      onChange={onChangePicture}
                    />
                    <p>upload payment</p>
                  </>
                )}
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
        <Container>
          {dataTrip.status == "Waiting Payment" && (
            <Row>
              <Col lg={10} />
              <Col style={{ textAlign: "right" }}>
                <Button
                  block
                  variant="warning"
                  onClick={() => {
                    return clickPay(dataTrip.id);
                  }}
                >
                  {"  Bayar  "}
                </Button>{" "}
              </Col>
            </Row>
          )}
        </Container>
        <br></br>
      </>
    );
  });

  useEffect(() => {
    getTransactions();
    getUser();
  }, []);

  return (
    <React.Fragment>
    <Navbar isImageUploaded={isImageUploaded} style={{zIndex:'1'}}/>
    <div style={{minHeight:"5rem"}} />
    <div style={{zIndex:'-1'}}>
      {listTrips}
      </div>
      <Modal show={show} onHide={confirmationModal}>
        <Link
          to={{
            pathname: `/PaymentPending/${transIdModal}`,
            propsTrip: { idTransaction: transIdModal },
          }}
        >
          <div>
            <p style={{ textAlign: "center" }}>
              <h2>
                Your payment will be confirmed within 1 x 24 hours <br />
                To see orders click thank you
              </h2>
            </p>
          </div>
        </Link>
      </Modal>
    </React.Fragment>
  );
};
export default Payment;
