import React from 'react';

const Reviewitem = (props) => {
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px'

    }
    return (
        <div style={reviewItemStyle}>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <button
                className="cart-btn" onClick={() => props.removeProduct(key)}>
                Remove Item</button>
        </div>
    );
};

export default Reviewitem;