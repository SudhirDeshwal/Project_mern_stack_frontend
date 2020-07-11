import React from 'react';
import Layout from '../core/Layout'
//import { API } from '../config';

const Singup = () => {

      //functions

      const Signupform = () => (
           
        <form>

            <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" className="form-control"></input>
            </div>

            <div className="form-group">
            <label className="text-muted">Email</label>
            <input type="email" className="form-control"></input>
            </div>

            <div className="form-group">
            <label className="text-muted">Password</label>
            <input type="password" className="form-control"></input>
            </div>
             
             <button className="btn-primary">
                   Submit
             </button>
        

        </form>

      )



    
    return (

<Layout 
title="Sign up here" 
discription="Create an Account"
className="container col-md-8 offset-md-2">
 {Signupform()}
</Layout>

    );
};



export default Singup;
