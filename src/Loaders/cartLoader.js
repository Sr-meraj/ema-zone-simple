import { getShoppingCart } from "../utilities/fakedb";

const CartLoader = async() =>
{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()

    // if cart data is in database, you should use async await
    // if cart data is in local storage, you should use try catch
    const storeCart = getShoppingCart()
    const savedCart = [];
    for (const id in storeCart) {
        const addProduct = products.find(pd => pd.id === id)
        if (addProduct) {
            addProduct.quantity = storeCart[id];
            savedCart.push(addProduct)
        }
    }
    return savedCart;
}

export default CartLoader;