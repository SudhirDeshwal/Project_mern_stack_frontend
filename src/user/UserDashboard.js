import React, { useState } from 'react';
import Layout from '../core/Layout'
import "../styles.css"; 


const Dashboard = () => {



    
    return (
        <Layout
            title="Dashboard"
            description={`Welcome ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    );

};
export default Dashboard;

