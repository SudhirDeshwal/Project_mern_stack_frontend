import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
//import { API } from '../config';

const Singup = () => {

    //Sign up state
    const [values, setValues] = useState(
        {
            name: " ",
            email: " ",
            password: " ",
            error: false,
            success: false
        })

    const { name, email, password, success, error } = values

    //handle change in form

    const handleChange = name => event => {
        setValues(
            {
                ...values,
                error: false,
                [name]: event.target.value
            });
    }


    //passing state data to backend db
    const signup = user => {

        console.log(user);
        return fetch('https://merchsid.herokuapp.com/api/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              

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
        signup({ name: name, email: email, password: password })
            .then(data => {
                if (data.error) {

                    setValues({
                        ...values,
                        error: data.error,
                        success: false
                    })
                }
                else {

                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: '',
                        success: true

                    })

                }
            })
    }

    //User Sign up
    const Signupform = () => (
     
      <section className="row justify-content-center">
       <section className = "col-8 ">  
        <form className="form-container">
  
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange("name")} type="text" className="form-control" value={name}></input>
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange("email")} type="email" className="form-control" value={email}></input>
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange("password")} type="password" className="form-control" value={password}></input>
            </div>

            <button onClick={clickSubmit} className="btn btn-success">
                Submit
             </button>

     
        </form>
        </section>
        </section>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );


    return (

        <Layout
            title="Sign up here"
            discription="Create an Account"
            className="container col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
            {Signupform()}
            {JSON.stringify(values)}
        </Layout>

    );
};



export default Singup;
