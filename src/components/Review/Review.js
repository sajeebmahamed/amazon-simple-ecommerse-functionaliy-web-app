import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import gif from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log("removed", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        // console.log(cartProducts);
        setCart(cartProducts);

        // const counts = productKeys.map( key => savedCart[key]);
        // console.log(counts);
    }, []);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={gif} alt=""/>
    }
    return (
        <div className = "shop-container">
            <div className= "product-container">
                {/* <h1> Cart Items : {cart.length} </h1> */}
                {
                    cart.map(pd => <Reviewitem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></Reviewitem>)
                }
                {
                    thankyou
                }
            </div>
            <div>
                <Cart cart = {cart}>
                    <button onClick={handlePlaceOrder} className ="btn cart-btn">Place Order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;