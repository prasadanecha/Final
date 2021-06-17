import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
};


export const StorePrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const storetoken = window.localStorage.getItem("storetoken")
        if (storetoken) {
          return <Component {...props} />;
        }
         else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
};





