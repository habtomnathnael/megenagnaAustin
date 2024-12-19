import { CartContext } from '../../../features/cartContext/CartContext'
import { useContext } from 'react'

const OrderCard = (props) => {
    const { title, description, price, id } = props
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)
    // console.log(cart.items)

    return (

        <div className=" mx-auto w-full justify-between text-left items-center p-6 bg-white border border-gray-400 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-[16px] font-medium  text-gray-900 font-Oswald">{title}</h5>
            </a>
            <p className="mb-3 font-Avenir text-[14px] text-gray-900">{props.text}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-700 bg-white">
                ${props.fPrice}
            </a>
            <button onClick={() => cart.addOneToCart(props)}>Add to Cart</button>
        </div>
    )
}

export default OrderCard