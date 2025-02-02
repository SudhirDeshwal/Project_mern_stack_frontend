import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from './UserAuth';


//For for signed in user
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} /> 
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }  
    />
);

export default PrivateRoute;