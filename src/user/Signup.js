import React , {useState} from 'react';
import Layout from '../core/Layout'
//import { API } from '../config';

const Singup = () => {

      //Sign up state
    const [values , setValues] = useState(
            {
            name: " ",
            email: " ",
            password: " ",
            error: " ",
            success :false
        })

        //handle change

        const handleChange = name => event => {
            setValues(
                { ...values, 
                    error:false,
                    [name]:event.target.value
                       });
                       }

         //handle submit
         
         const clickSubmit = () => {
             

         }

      //User Sign up
      const Signupform = () => (
           
        <form>

            <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange("name")} type="text" className="form-control"></input>
            </div>

            <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange("email")} type="email" className="form-control"></input>
            </div>

            <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={handleChange("password")} type="password" className="form-control"></input>
            </div>
             
             <button onClick={clickSubmit} className="btn-primary">
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
 {JSON.stringify(values)}
</Layout>

    );
};



export default Singup;
