import { faProcedures } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../singlehorizontalProduct/ReviewItem';
import './order.css';

const Orders = () => {
    const cartProducts = useLoaderData();
    const [cart, setCart] = useState(cartProducts)
    console.log(cart);
    const ItemRemoveHandellerFromCart = (id) => {
        const remainng = cart.filter(pd => pd.id !== id)
        setCart(remainng)
        removeFromDb(id)
    }

    const deleteCartHandaler = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <>
            <div className='order-review'>
                <div className="orders">
                    <h1>Orders</h1>
                    <hr />
                    <div style={{ marginTop: "30px" }}>
                        {
                            cart.map((item, index) => <ReviewItem key={item.id} CartItem={item} handelRemove={ItemRemoveHandellerFromCart} />)
                        }
                    </div>
                </div>
                <div className="cart-sidebar">
                    <Cart cart={cart} deleteCartHandaler={deleteCartHandaler}>
                        <Link style={{ textDecoration: 'none' }} to='/checkout'>
                            <button className='review-order'>
                                Checkout Now <FontAwesomeIcon icon={faProcedures} />
                            </button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Orders;