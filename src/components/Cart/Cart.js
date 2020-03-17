import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }
    let shippinCost = 0;
    if (total > 35) {
        shippinCost = 0;
    }
    else if (total > 15) {
        shippinCost = 3.99;
    }
    else if (total > 0) {
        shippinCost = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippinCost + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Total Items : {cart.length}</p>
            <p>Product Price : {formatNumber(total)} </p>
            <p><small>Shipping Cost : {shippinCost}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total : {grandTotal}</p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;