import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage'
import "../styles.css";

const Card = ({product}) => {


    return( 
         
        <div className="col-2 mb-3">
         <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">

                
                    <ShowImage item={product} url='product'></ShowImage>
                

                           <p>{product.description}</p>
                           <p>${product.price}</p>
                           <Link to="/">
               <button className='btn btn-outline-primary mt-2 mb-2 mr-4'> 
                 View Product
                </button>
             </Link>
             <button className='btn btn-outline-warning mt-2 mb-2'>
                  Add to Cart </button> 
                </div>
         </div>
        </div> 
    )
}

export default Card;