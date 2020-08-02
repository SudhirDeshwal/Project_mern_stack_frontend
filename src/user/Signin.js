import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
//import { API } from '../config';
import "../styles.css";
import { isAuthenticated } from '../auth/UserAuth' 

const Singin = () => {

    //Sign in state
    const [values, setValues] = useState( 
        {
            email: " ",
            password: "",
            error: "",
            loading: false,
            redirect: false
        })

    const { email, password, loading, error, redirect } = values; 
    const { user } = isAuthenticated();

    //handle change in form

    const handleChange = name => event => {
        setValues(
            {
                ...values,
                error: false,
                [name]: event.target.value
            });
    }

   //for local storage
    const authenticate = (data, next) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('jwt', JSON.stringify(data));
            next();
        }
    };

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



    //handle submit and check error befor passed it to sign in function

    const clickSubmit = (event) => {

        event.preventDefault()
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        loading: false
                    });
                }
                else {

                    authenticate(data , () =>{
                        setValues({
                            ...values,
                            redirect: true
    
                        });
                    })

                    

                }
            })
    }





    //User Sign in
    const Signinform = () => (
        <section className="container-fluid bg">
        <section className="row justify-content-center">
        <section className = "col-8">
        <form className="form-container">
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
         </section>          
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

        if (redirect) {

            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
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
