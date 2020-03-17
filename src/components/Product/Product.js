import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className="product-name">{<Link to={"/product/"+key}> {name} </Link>}</h4>
                <p> <small>by :{seller} </small> </p>
                <p><small>${price}</small></p>
                <p> <small> Only {stock} available - order soon </small> </p>

                {props.showAddtoCard === true && <button className="cart-btn"
                 onClick={() => props.handleAddProduct(props.product)}> 
                 <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                 </button>}
            </div>
        </div>
    );
};

export default Product;