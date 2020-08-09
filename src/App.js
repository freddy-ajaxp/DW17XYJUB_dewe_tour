import React from "react";
import logo from "./logo.svg";
//import './App.css';
import "./Login.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./user/pages/home/Home";
import AddTrip from "./user/pages/add-trip/AddTrip";
import Profile from "./user/pages/profile/Profile";

import DetailTrip from "./user/pages/detail-trip/DetailTrip";
import IncomeTrip from "./user/pages/income-trip/IncomeTrip";
import ListTransaction from "./user/pages/list-transaction/ListTransaction";
import Payment from "./user/pages/payment/Payment";
import Navbar from "./user/components/navbar/Navbar";
import Footer from "./user/components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      
      <Router>
      <Navbar></Navbar>
        <div className="App" style={{ backgroundColor: " #edf2f3 " }}>
          <Switch>
            <Route path="/DetailTrip">
              <DetailTrip />
            </Route>
            <Route path="/AddTrip">
              <AddTrip />
            </Route>
            <Route path="/IncomeTrip">
              <IncomeTrip />
            </Route>
            <Route path="/ListTransaction">
              <ListTransaction />
            </Route>
            <Route path="/Payment">
              <Payment />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
