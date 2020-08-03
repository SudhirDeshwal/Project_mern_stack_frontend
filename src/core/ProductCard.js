import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


const ProductCard = ({ product } ) => {



    return (
        <div className="col-4 mb-3">
        <div className="card ">
          <div className="card-header card-header-1 ">{product.name}</div>
          <div className="card-body">
            <p>{product.description} </p>
            <p>$ {product.price}</p>
            <Link to="/">
               <button className='btn btn-outline-primary mt-2 mb-2'> 
                 View Product
               </button>
            </Link>
            <button className='btn btn-outline-warning mt-2 mb-2'>
                 Add to Cart
               </button>
          </div>
        </div>
        </div>
      );

}

export default ProductCard;