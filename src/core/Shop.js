import React, { useState, useEffect } from 'react';
import Layout from './Layout'
import {getProducts} from './CoreApicalls'
import "../styles.css";
import Card from './Card'
import {getCategories} from './CoreApicalls'


const Shop = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);


    const init = () => {
        getCategories().then(data => { 
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };


    useEffect(() => {
        init();
       
    }, []);



  return(

<Layout title="Shop Page" discription="Buy your Fav books here!!!" className="container-fluid">

       <div className="row">
           <div className="col-4">
                  left side
                  {JSON.stringify(categories)}

           </div>

           <div className="col-4">
                  Right side

           </div>
       
       </div>
</Layout>  

  )

}

export default Shop;