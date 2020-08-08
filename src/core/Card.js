import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage'
import "../styles.css";
import moment from 'moment'

const Card = ({product , showViewProductButton = true , showAddToCartButton = true}) => {


    const showViewButton = showViewProductButton => {
        return (
          showViewProductButton && (
            <Link to={`/product/${product._id}`} className="mr-2">
              <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
            </Link>
          )
        );
      };

      const showAddToCartBtn = showAddToCartButton => {
        return (
          showAddToCartButton && (
            <button className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
              Add to cart
            </button>
          )
        );
      };

      const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

    return(  

         
        // <div className="col-2 mb-3">
         <div className="card">
                <div className="card-header name">{product.name}</div>
                <div className="card-body">

                
                    <ShowImage item={product} url='product'></ShowImage>
                

                           <p className="lead mt-2">{product.description}</p>
                           <p className="black-10">${product.price}</p>
                           <p className="black-9"> Category: {product.category && product.category.name}</p>
                           <p className="black-8"> Added On {moment(product.createdAt).fromNow()}</p>
                           {showStock(product.quantity)}
                           <br></br>
                           {showViewButton(showViewProductButton)} 
                           {showAddToCartBtn(showAddToCartButton)}
            
             
         </div>
         </div> 
    )
}

export default Card;