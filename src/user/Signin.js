import React , {useState} from 'react';
import {Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
//import { API } from '../config';

const Singin = () => {

      //Sign up state
    const [values , setValues] = useState(
            {
            email: " ",
            password: " ",
            error: "",
            loading :false,
            redirect : false
        })

        const {email, password , loading ,error ,redirect} = values;

        //handle change in form

        const handleChange = name => event => {
            setValues(
                { ...values, 
                    error:false,
                    [name]:event.target.value
                       });
                    }


        //passing state data to backend db
        const signin = user => {

            console.log(user);
            return fetch('http://localhost:8000/api/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000'

                },
                body: JSON.stringify(user)
            })
                .then(response => {
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
        };

    

         //handle submit and check error befor passed it to sign up function
         
         const clickSubmit = (event) => {
                  
            event.preventDefault()
           setValues({...values, error:false ,loading:true});
            signin({email, password})
             .then(data => {
                 if(data.error) {
                    setValues({
                    ...values,
                    error: data.error,
                    loading: false });
                 }
                 else {

                    setValues({
                        ...values,
                        redirect: true
                    
                    });

                 }
             })
         }
  
        



      //User Sign up
      const Signinform = () => (
           
        <form>

           

            <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange("email")} type="email" className="form-control" value={email}></input>
            </div>

            <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={handleChange("password")} type="password" className="form-control" value={password}></input>
            </div>
             
             <button onClick={clickSubmit} className="btn-primary">
                   Submit
             </button>
        

        </form>

      )

      const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showloading = () => (
       loading && (
       <div className="alert alert-info">
          <h2>loading....</h2>
       </div>)
    );

    const redirectTo = () => {

        if(redirect) {

            return <Redirect to="/"></Redirect>
        }
    }


     return (

<Layout 
title="Sign up here" 
discription="Create an Account"
className="container col-md-8 offset-md-2">
{showloading()}
{showError()}
 {Signinform()}
 {redirectTo()}
 {JSON.stringify(values)}
</Layout>

    );
};



export default Singin;
