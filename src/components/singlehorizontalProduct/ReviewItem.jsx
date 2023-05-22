import React from 'react';
import './CartProdcut.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ CartItem, handelRemove }) => {
    return (
        <div class="cart-wrapper">
                <img src={CartItem.img} alt="product Logo"/>
            <div class="cart-info">
                <h4 class="cart-title">{CartItem.name}</h4>
                <p >
                    <span>Price: {CartItem.price}</span>
                </p>
                <p>
                    <span>Quantity: {CartItem.quantity}</span>
                </p>
            </div>
            <div className="Trashbutton">
                <button onClick={() => handelRemove(CartItem.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;