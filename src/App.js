import React, { useState } from "react";
import logo from "./logo.svg";
//import './App.css';
import "./Login.css";
import "./fonts/FontsFree.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./user/pages/home/Home";
import AddTrip from "./user/pages/add-trip/AddTrip";
import Profile from "./user/pages/profile/Profile";
import PrivateRoute from "./user/components/routing/PrivateRoute";
import PrivateRouteAdmin from "./user/components/routing/PrivateRouteAdmin";
import DetailTrip from "./user/pages/detail-trip/DetailTrip";
import IncomeTrip from "./user/pages/income-trip/IncomeTrip";
import ListTransaction from "./user/pages/list-transaction/ListTransaction";
import Payment from "./user/pages/payment/Payment";
import PaymentPending from "./user/pages/payment/PaymentPending";
import Navbar from "./user/components/navbar/Navbar";
import Footer from "./user/components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import UploadPictureContext from "./user/context/UploadPictureContext";

function App() {
  const [count, setCount] = useState(1);

  return (
    <React.Fragment>
      <Router>
        <UploadPictureContext.Provider value={{ count, setCount }}>
          <div className="App" style={{ backgroundColor: " #edf2f3 " }}>
            <Switch>
              <Route
                path="/DetailTrip/:id"
                component={() => (
                  <>
                    <ScrollToTop>
                      <Navbar />
                      <DetailTrip />
                    </ScrollToTop>
                  </>
                )}
              />
              <PrivateRouteAdmin path="/AddTrip" component={AddTrip} />
              <PrivateRouteAdmin path="/IncomeTrip" component={IncomeTrip} />
              <PrivateRouteAdmin path="/ListTransaction" component={ListTransaction} />
              <PrivateRoute path="/Payment" component={Payment} />
              <PrivateRoute path="/PaymentPending/:id" component={PaymentPending} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/">
                <ScrollToTop>
                  <Home />
                </ScrollToTop>
              </Route>
            </Switch>
          </div>
        </UploadPictureContext.Provider>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
