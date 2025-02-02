import React, { useState } from 'react';
import Layout from '../core/Layout'
import "../styles.css"; 
import { isAuthenticated } from '../auth/UserAuth'
import { Link } from "react-router-dom";

//admin dashboard
const AdminDashboard = () => {

    const { user: { _id, name, email, role }   } = isAuthenticated();


  
    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Admin Information</h3>
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

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product"> 
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Manage Products
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
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">
                    {adminInfo()}
                </div>
            </div>
        </Layout>
    );

};
export default AdminDashboard;

