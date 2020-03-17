import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { product_key} = useParams()
    const product = fakeData.find(pd => pd.key === product_key);
    console.log(product);
    return (
        <div>
            <h1> {product_key} Product Details Comming soon</h1>
            <Product showAddtoCard = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetails;