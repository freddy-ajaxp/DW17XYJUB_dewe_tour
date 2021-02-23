import React, { useState, useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Profile from "../../pages/profile/Profile";
function PrivateRoute(props) {
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  let [triggerPictureChanged, setTriggerPictureChanged] = useState();

  const setChanged = () => {
    // if (triggerPictureChanged) {
    //   setTriggerPictureChanged(false);
    // } else {
    //   setTriggerPictureChanged(true);
    // }
  };
  if (token) {
    if (admin === "false") {
      return (
        <Route
          path={props.path}
          component={() => (
            <>
              {/* <Navbar
                backgroundImgTrue={true}
                prop={setChanged}
                rerender={setTriggerPictureChanged}
              /> */}
              <props.component setChanged={setChanged} />
            </>
          )}
        />
      );
    } else {
      return <Redirect to="/" />;
    }
  }
  return <Redirect to="/" />;
}

export default PrivateRoute;
