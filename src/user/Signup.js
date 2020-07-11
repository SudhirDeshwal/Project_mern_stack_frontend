import React , {useState , useEffect} from 'react';
import Layout from '../core/Layout';
import { API } from '../config';

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

        const {name, email, password} = values

        //handle change in form

        const handleChange = name => event => {
            setValues(
                { ...values, 
                    error:false,
                    [name]:event.target.value
                       });
                    }


        //passing state data to backend db
        const signup = user => {

            console.log(user);
            return fetch('http://localhost:8000/api/signup', {
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

    

        // const res = await axios.post('https://localhost:8000/api', { hello: 'world' }, {
        //     headers: {
        //       // 'application/json' is the modern content-type for JSON, but some
        //       // older servers may use 'text/json'.
        //       // See: http://bit.ly/text-json
        //       'content-type': 'text/json'
        //     }
        //   });
          
      //    res.data.headers['Content-Type']; // text/json









         //handle submit
         
         const clickSubmit = (event) => {
                  
            event.preventDefault()
            signup({name: name, email :email, password:password});
           
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
