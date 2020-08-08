import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart , removeItem} from './Carthelpers';
import Card from './Card';
import {isAuthenticated} from '../auth/UserAuth'

const Checkout = ({products}) => {

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    return (
        <div>
         
         <h2>Total: ${getTotal()}</h2>
        </div>
    );
}


export default Checkout; 