import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom'
import "../styles.css";
import { signout, isAuthenticated } from '../auth/UserAuth'
import { itemTotal } from './Carthelpers'


//to check current clicked
const isActive = (history, path) => {

    if (history.location.pathname === path) {

        return { color: "#ff9900" }
    }
    else {
        return { color: "#ffffff" }
    }
}

const Menu = ({ history }) =>
    (
        <div>

            <nav id="menu" className="navbar navbar-default navbar-fixed-top bg-warning">
                <a className="navbar-brand">booksForYou</a>
                <div className="container">
                    <ul className="nav nav-tabs bg-secondary">

                        <li className="nav-item">
                            <Link
                                className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link" style={isActive(history, '/shop')} to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link" style={isActive(history, '/cart')} to="/cart">
                                Cart{" "}
                                <sup>
                                    <small className="cart-badge">{itemTotal()}</small>
                                </sup>
                            </Link>
                        </li>

                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/user/dashboard")}
                                    to="/user/dashboard"
                                >
                                    Dashboard
                    </Link>
                            </li>
                        )}
                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/admin/dashboard")}
                                    to="/admin/dashboard"
                                >
                                    Dashboard
                    </Link>
                            </li>
                        )}


                        {!isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                        style={isActive(history, '/signin')} to="/signin">SignIn</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link"
                                        style={isActive(history, '/signup')} to="/signup">SignUp</Link>
                                </li>
                            </Fragment>
                        )}

                        {isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <span
                                        className="nav-link"
                                        style={{ cursor: "pointer", color: "#ffffff" }}
                                        onClick={() =>
                                            signout(() => {

                                                history.push('/');

                                            })
                                        } >
                                        Signout
                    </span>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                </div>

            </nav>
        </div>
    )



export default withRouter(Menu);