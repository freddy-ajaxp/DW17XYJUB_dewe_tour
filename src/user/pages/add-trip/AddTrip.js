import axios from "axios";
import React, { useEffect, useState } from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  Alert,
  Button,
  Form,
  InputGroup,
  FormControl,
  Image,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
//css
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePickerWidth.css";

const Home = () => {
  //START COUNTRY INITIALIZATION PART
  const [countryList, setcountryList] = useState([]);
  const [alertShow, setAlertShow] = useState({status:false, message:""});
  const [isSubmit, setIsSubmit] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [form, setForm] = useState({
    title: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: 0,
    night: 0,
    date_trip: "",
    price: 0,
    quota: 0,
    description: "",
    country_id: "",
    image: "",
    image_trip_2:"",
    image_trip_3:"",
    image_trip_4:"",
  });
  let history = useHistory();

  const schema = yup.object().shape({
    //example
    title: yup.string().required("kolom wajib diisi"),
    accomodation: yup.string().required("kolom wajib diisi"),
    transportation: yup.string().required("kolom wajib diisi"),
    eat: yup.string().required("kolom wajib diisi"),
    day: yup
      .number()
      .required("kolom wajib diisi")
      .min(1, "minimal 1 hari")
      .max(30, "maksimal 30 hari"),
    night: yup
      .number()
      .required("kolom wajib diisi")
      .min(1, "minimal 1 malam")
      .max(30, "maksimal 30 malam")
      .max(form.day, "malam tidak dapat melebihi jumlah hari"),
    price: yup
      .number()
      .required("kolom wajib diisi")
      .min(1)
      .positive("nilai harus angka positif"),
    quota: yup
      .number()
      .required("kolom wajib diisi")
      .min(1)
      .positive("nilai harus angka positif"),
    description: yup.string().required("kolom wajib diisi"),
    image: yup.string().required("kolom wajib diisi").url("harap isikan url lengkap dari gambar , misal : http://source.unsplash.com/random"),
    image_trip_2: yup.string().required("kolom wajib diisi").url("harap isikan url lengkap dari gambar , misal : http://source.unsplash.com/random"),
    image_trip_3: yup.string().required("kolom wajib diisi").url("harap isikan url lengkap dari gambar , misal : http://source.unsplash.com/random"),
    image_trip_4: yup.string().required("kolom wajib diisi").url("harap isikan url lengkap dari gambar , misal : http://source.unsplash.com/random"),
    country_id: yup
      .number()
      .required("kolom wajib diisi")
      .moreThan(0, "harap pilih country"),
    // date_trip: "",
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const getcountryList = async () => {
    await axios
    .get("http://localhost:5001/api/country")
    .then((res) => {
      const resultData = res.data.data.countries;
      setcountryList(resultData);
    })
    .catch((err) => {
      setAlertShow({stats:true, message:"terjadi kegagalan dari server, refresh atau hubungi Administrator"})
    });
  };

  const optionCountries = countryList.map((dataCountry) => (
    <option value={dataCountry.id} name="country_id">
      {dataCountry.nama_negara}
    </option>
  ));

  const submitHandler = () => {
    // e.preventDefault();
    // setIsSubmit(true);
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post("http://localhost:5001/api/trip", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        history.push({
          pathname: "/IncomeTrip",
        });
      })
      .catch((err) => {
        console.log('error on post trip', err)
        setAlertShow({stats:true, message:"Terjadi kesalahan dalam penambahan trip, hubungi Admin"})
      });
  };

  //onchange untuk form
  const onChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getcountryList();
  }, []);
 
  return (
    <React.Fragment>
      <Container className="p-3" style={{ minHeight: "50rem" }}>
        <h1>Add Trip</h1>
        <br></br>
        <Alert show={alertShow.status} onClose={() => setAlertShow({status:false})} dismissible variant="danger" >{alertShow.message}</Alert>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control
              name="title"
              value={form.title}
              onChange={(e) => onChange(e)}
              ref={register}
            />
          </Form.Group>
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}

          <Form.Group controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country_id"
              onChange={(e) => onChange(e)}
              ref={register}
              // value={form.country_id}

            >
              <option selected value={0} disabled size>
                {" "}
                --Pilih--
              </option>
              {optionCountries}
            </Form.Control>
          </Form.Group>
          {errors.country_id && (
            <p style={{ color: "red" }}>{errors.country_id.message}</p>
          )}

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control
              name="accomodation"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.accomodation}
            />
          </Form.Group>
          {errors.accomodation && (
            <p style={{ color: "red" }}>{errors.accomodation.message}</p>
          )}

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Transportation</Form.Label>
            <Form.Control
              name="transportation"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.transportation}
            />
          </Form.Group>
          {errors.transportation && (
            <p style={{ color: "red" }}>{errors.transportation.message}</p>
          )}

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Eat</Form.Label>
            <Form.Control
              name="eat"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.eat}
            />
          </Form.Group>
          {errors.eat && <p style={{ color: "red" }}>{errors.eat.message}</p>}

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                Hari
                {errors.day && (
                  <p style={{ color: "red" }}>{errors.day.message}</p>
                )}
              </Form.Label>
              <Form.Control
                type="number"
                name="day"
                placeholder="Jumlah Hari"
                onChange={(e) => onChange(e)}
                ref={register}
                value={form.day}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Malam
                {errors.night && (
                  <p style={{ color: "red" }}>{errors.night.message}</p>
                )}
              </Form.Label>
              <Form.Control
                type="number"
                name="night"
                placeholder="Jumlah Malam"
                onChange={(e) => onChange(e)}
                ref={register}
                value={form.night}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Date Trip</Form.Label>
            <div className="customDatePickerWidth">
              <DatePicker
                closeOnScroll={true}
                dateFormat="yyyy/MM/dd"
                selected={form.date_trip}
                // onChange={(date) => setStartDate(date)}
                name="date_trip"
                onChange={date => setForm({ ...form, date_trip : date })}
                onChange={date => setForm({ ...form, date_trip : date })}
                ref={register}
                value={form.date_trip}
              />
            </div>
            {errors.date_trip && (
              <p style={{ color: "red" }}>{errors.date_trip.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              placeholder="in Indonesian Rupiah"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.price}
            />{" "}
          </Form.Group>
          {errors.price && (
            <p style={{ color: "red" }}>{errors.price.message}</p>
          )}

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Quota</Form.Label>
            <Form.Control
              name="quota"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.quota}
            />
          </Form.Group>
          {errors.quota && (
            <p style={{ color: "red" }}>{errors.quota.message}</p>
          )}

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.description}
            />{" "}
          </Form.Group>
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description.message}</p>
          )}

          <Form.Group controlId="formGridAddress2">
            <Form.Label>URL</Form.Label>
            <Form.Control
              name="image"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.image}
              placeholder="URL gambar no. 1 (gambar utama)"
            />{" "}
            <Form.Control
              name="image_trip_2"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.image_trip_2}
              placeholder="URL gambar no. 2"
            />
            <Form.Control
              name="image_trip_3"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.image_trip_3}
              placeholder="URL gambar no. 3"
            />
            <Form.Control
              name="image_trip_4"
              onChange={(e) => onChange(e)}
              ref={register}
              value={form.image_trip_4}
              placeholder="URL gambar no. 4"
            />
            
          </Form.Group>
          {errors.image && (
            <p style={{ color: "red" }}>{errors.image.message}</p>
          )}

          {/* <Link to="/ListTransaction"> */}
          <Button className="text-center" variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Home;
