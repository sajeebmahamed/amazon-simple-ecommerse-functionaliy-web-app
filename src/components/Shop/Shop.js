import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products , setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('Product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Product
                             handleAddProduct = {handleAddProduct}
                              product = {pd}>
                              </Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                    <h1>Card Container</h1>
                <h3>Order Summary : {cart.length} </h3>
            </div>
            
        </div>
    );
};

export default Shop;