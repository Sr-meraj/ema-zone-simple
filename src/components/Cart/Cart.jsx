/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, deleteCartHandaler, children }) => {
    let total = 0, shipping = 0, quantity=0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1
        total = total + product.price * product.quantity;
        shipping += product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;
    const GrandTotal = total + tax + shipping;
    return (
        <div style={{padding: '1rem'}}>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <p>Selected Product: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Price: ${GrandTotal.toFixed(2)}</h3>
            <div className='buttons'>
                <button className='clear-cart' onClick={deleteCartHandaler}>
                    Clear Cart <FontAwesomeIcon icon={faTrash} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;