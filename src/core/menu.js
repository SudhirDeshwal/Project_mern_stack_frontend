import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import "../styles.css";



const isActive = (history, path) => {

    if (history.location.pathname === path) {

        return { color: "#ff9900" }
    }
    else {
        return { color: "#ffffff" }
    }
}

const Menu = (props) =>
    (
         
        <nav id="menu" className="navbar navbar-default navbar-fixed-top bg-warning">
             <a class="navbar-brand">BCOMM</a>
        <div className="container">
            <ul className="nav nav-tabs bg-secondary">

                <li className="nav-item">
                    <Link
                        className="nav-link"style={isActive(props.history, '/')} to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                        style={isActive(props.history, '/signin')} to="/signin">SignIn</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                        style={isActive(props.history, '/signup')} to="/signup">SignUp</Link>
                </li>
            </ul>
        </div>

        </nav>

    )



export default withRouter(Menu);