import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { read } from './CoreApicalls';

const Product = props => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);


    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                // listRelated(data._id).then(data => {
                //     if (data.error) {
                //         setError(data.error);
                //     } else {
                //         setRelatedProduct(data);
                //     }
                // });
            }
        });
    };
          
    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);


    return (  

<Layout
             title={product && product.name} 
             discription={product && product.description && product.description.substring(0, 100)}
             className="container-fluid"
        >
            <div className="row">
                <div className="col-3 mb-3">
                {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>
            </div>
        </Layout>

    )

}
export default Product; 