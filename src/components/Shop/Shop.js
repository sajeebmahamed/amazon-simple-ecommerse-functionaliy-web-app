import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products , setProducts] = useState(firstTen);
    return (
        <div className = "shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Product product = {pd}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                    <h1>Class Container</h1>
            </div>
            
        </div>
    );
};

export default Shop;