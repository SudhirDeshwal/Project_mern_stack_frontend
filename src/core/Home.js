import React, { useState, useEffect } from 'react';
import Layout from './Layout'
import {getProducts} from './CoreApicalls'

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

<Layout title="Explore Books" discription="Buy your Fav books here!!!">
Books here
</Layout>
);

}
export default Home; 