import React, { useState, useEffect } from 'react';
import Layout from './Layout'
import {getProducts} from './CoreApicalls'
import "../styles.css";
import Card from './Card'

const Home = () => {

    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

return (

<Layout title="Explore Books" discription="Buy your Fav books here!!!" className="container-fluid">

       
         <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
            {productsByArrival.map((product, i) => (
                   <div key={i} className="col-2 mb-3">
                 <Card  product={product}></Card>
                      </div>
                      ))}
            </div>



        <h2 className="mb-4">Best Sellers</h2>
        <div className="row">
            {productsBySell.map((product, i) => (

           <div key={i} className="col-2 mb-3">
                  <Card  product={product}></Card>
                     </div>


            ))}

            </div>

        

</Layout>  
);

}
export default Home; 