import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import "../styles.css";
import {signout} from '../auth/UserAuth'



const isActive = (history, path) => {

    if (history.location.pathname === path) {

        return { color: "#ff9900" }
    }
    else {
        return { color: "#ffffff" }
    }
}

const Menu = ({history}) => 
    (
        <div>
         
        <nav id="menu" className="navbar navbar-default navbar-fixed-top bg-warning">
             <a className="navbar-brand">MERCH</a>
        <div className="container">
            <ul className="nav nav-tabs bg-secondary">

                <li className="nav-item"> 
                    <Link
                        className="nav-link"style={isActive(history, '/')} to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                        style={isActive(history, '/signin')} to="/signin">SignIn</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                        style={isActive(history, '/signup')} to="/signup">SignUp</Link>
                </li>

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
                
            </ul>
        </div>

        </nav>
      </div>
    )



export default withRouter(Menu);