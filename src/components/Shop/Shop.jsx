// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Shop = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json())
            .then(data => setProducts(data)).catch(err => console.error(err))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart(),
            savedCart = [];
        // 1: get id 
        for (const id in storedCart) {
            // 2: Get product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                // 3: add quantity 
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handelAddToCart = (product) => {
        let newCart = []

        const exits = cart.find(p => p.id === product.id)
        if (!exits) {
            ++product.quantity
            newCart = [...cart, product]
        } else {
            exits.quantity += 1
            const remaining = cart.filter(p => p.id !== product.id)
            newCart = [...remaining, exits]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    const deleteCartHandaler = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop'>
            <div className="shop-containers">
                {navigation.state === 'loading' && <Spinner />}
                {
                    products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart} />)
                }
            </div>
            <div className="cart-sidebar">
                <Cart cart={cart} deleteCartHandaler={deleteCartHandaler}>
                    <Link to='/orders' style={{textDecoration: 'none'}}>
                        <button className='review-order'>
                            Review Order <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;