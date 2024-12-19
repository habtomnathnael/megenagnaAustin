import { createContext, useState } from 'react'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});

export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])

    // we need id and quantity {id:1,quantity:3}

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }


    function addOneToCart(props) {
        const { id } = props
        // console.log(id)
        const quantity = getProductQuantity(id)
        // console.log(price)
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        product: props
                    }
                ]
            )

        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id ? { ...product, quantity: product.quantity + 1, product: props }
                            : product
                )
            )
        }

    }


    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )

        }

    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )

    }

    function getTotalCost(price, id) {
        let totalCost = 0;
        cartProducts.map((cartItem) => (
            cartItem.id === id ? totalCost += price * cartItem.quantity : totalCost
        )
        )
        return totalCost
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;

//context (cart, addToCart, removeFromCart)