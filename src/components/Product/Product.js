import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className = "product-info">
                <h4 className="product-name">{name}</h4>
                <p> <small>by :{seller} </small> </p>
                <p><small>${price}</small></p>
                <p> <small> Only {stock} available - order soon </small> </p>
            </div>
        </div>
    );
};

export default Product;