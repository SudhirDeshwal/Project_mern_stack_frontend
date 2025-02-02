import React, { useState } from 'react';
import Layout from '../core/Layout'
import "../styles.css"; 
import { isAuthenticated } from '../auth/UserAuth'
import { Link } from "react-router-dom";

//user dashboard
const Dashboard = () => {

    const { user: { _id, name, email, role }   } = isAuthenticated();


  
    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }; 


    return ( 
        <Layout
            title={`Welcome ${name}!`} >
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">
                    {userInfo()}
                </div>
            </div>
        </Layout>
    );

};
export default Dashboard;

