import React, { useState , useEffect } from 'react';
import Layout from '../core/Layout'
import "../styles.css"; 
import { isAuthenticated } from '../auth/UserAuth'
import { Link } from "react-router-dom";
import {getProducts,deleteProduct} from './adminApiCalls'



const ManageProducts = () => { 
    

    return (
        <Layout
            title="Manage Products"
            discription="Perform CRUD on products"
            className="container-fluid">

                <div>
                    ......
                </div>
            
        </Layout>
    );
};

export default ManageProducts;