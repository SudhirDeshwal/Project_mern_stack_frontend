import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { read, listRelated } from './CoreApicalls';

const Product = props => {

    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

//view signle product
    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
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
                <div className="col-8 mb-3">
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>


                <div className="col-4">
                    <h4>Related products</h4>
                    {relatedProduct.map((p, i) => (
                        <div className="mb-3" key={i}>
                            <Card product={p} />
                        </div>
                    ))}
                </div>

            </div>


        </Layout>

    )

}
export default Product; 