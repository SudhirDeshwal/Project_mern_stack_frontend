import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getBraintreeClientToken } from './CoreApicalls';
import Card from './Card';
import { isAuthenticated } from '../auth/UserAuth'
import "braintree-web";
import DropIn from 'braintree-web-drop-in-react';

const Checkout = ({ products }) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {}

    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;


    //get token
    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                console.log(data);
                setData({ clientToken: data.clientToken });
            }
        });
    };

//show drop in from brain tree api
    const showDropIn = () => (


        <div>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                    <DropIn
                        options={{
                            authorization: data.clientToken,
                            // paypal: {
                            //     flow: 'vault'
                            // }
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />
                    <button className="btn btn-success btn-block">
                        Pay
                    </button>

                    <div class="alert alert-primary" role="alert">
                        Thank you for showing your interest in Buying our Products.
                      </div>
                    <div class="alert alert-warning" role="alert">
                        Unfortunately ,We are not accepting any payments as of now.
                       </div>
                </div>
            ) : null}
        </div>
    );

    useEffect(() => {
        getToken(userId, token);
    }, []);


    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {

        return isAuthenticated() ? (

            <div>{showDropIn()}</div>


        ) : (

                <Link to="/signin">
                    <button className="btn btn-primary">Sign in to checkout</button>
                </Link>
            )

    };

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            {showCheckout()}


        </div>
    );
}


export default Checkout; 