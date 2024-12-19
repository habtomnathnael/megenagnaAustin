import { CartContext } from '../../../features/cartContext/CartContext'
import { useContext, useState } from 'react'
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';

const NewOrder = () => {
    const [shippingPrice, setShippingPrice] = useState(0.0)
    const [discount, setDiscount] = useState(0.0)

    const cart = useContext(CartContext)

    let tableContent_mod
    let tableContent

    var tableContent_mod_ = cart.items.map((currentData, idx) => (
        <ShoppingCart key={idx} {...currentData} />
    ))

    const onfTypeChanged = e => setShippingPrice(e.target.value)
    const onDiscountChanged = e => setDiscount(parseFloat(e.target.value))

    const shippingOptions = [4.99, 6.99, 12.99, 20.00].map((val, ind) => {
        return (
            <option
                key={ind}
                value={val}
            > {val}</option >
        )
    })

    // var Subtotal =
    // cart.items.map((item, idx) => {
    //     console.log(item)
    //     return item
    // })

    // console.log(cart.items[0].product)


    // const array = [15, 16, 17, 18, 19];
    const array = [{ regular: 15 }, { twodaysdelivery: 16 }, { threedaysdelivery: 17 }, { onedaydelivery: 18 }];

    function reducer(accumulator, currentValue, index) {
        const returns = accumulator + currentValue;
        // console.log(
        //     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
        // );
        return returns;
    }

    // array.reduce(reducer);

    tableContent = (
        <>

            <div className=' mx-auto my-16 w-[90%] '>
                <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <h1>Shopping Cart</h1></div>

                <div className='grid grid-cols-12 mt-4 gap-6'>

                    <div className="col-span-8">
                        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300 col-span-8">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-gray-900">
                                            Product Info
                                        </th>
                                        <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-gray-900">
                                            Price.
                                        </th>

                                        <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-gray-900">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-gray-900">
                                            Total
                                        </th>
                                        <th scope="col" className="relative py-1 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {tableContent}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='col-span-4 bg-slate-50'>
                        <h1 className=' font-semibold my-4 '>Order Summery</h1>
                        <div className='grid grid-cols-2 gap-4 '>
                            <div>SubTotal</div>
                            <div>$350.00</div>
                            <div>Discount</div>
                            <div>$54.99</div>
                            <div>Total</div>
                            <div>$454.99</div>
                        </div>
                        <div className=' col-span-4 mt-4 '>
                            {/* <Link to={'/OnlineOrdering/chckOut'}> */}
                            <button type="button" class="text-white gap-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xs w-full text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                                Proceed to Checkout
                                {/* <Link to="/BookaTable" className=" underline">Change Selection</Link> */}

                            </button>

                        </div>
                        <div className=' col-span-4'>
                            <Link to={"/Shop"}>
                                <button type="button" class="text-slate-800 bg-[#f6f9fa] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xs w-full text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    continue to Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    tableContent_mod = (
        <>
            {
                cart.items.length > 0 &&
                <div className=' grid grid-cols-1 md:grid-cols-12 mx-auto w-[90%] my-10'>
                    <div className=' col-span-8'>
                        <h1 class="mb-4 text-center text-2xl font-bold">Order Summery</h1>
                        {tableContent_mod_}
                    </div>
                    <div className=' col-span-4' >

                        {/* <!-- Sub total --> */}
                        <div class="mt-10 h-auto rounded-sm border bg-white p-6 shadow-md md:mt-0 w-full">
                            <h1 class="mb-4 text-center text-2xl font-bold">Shopping Cart</h1>
                            <div class="mb-2 flex justify-between">

                                <p class="text-gray-700">Subtotal</p>
                                <p class="text-gray-700">$
                                    {
                                        (cart.items.reduce((sum, product) => sum + product.quantity * parseFloat(product.product.fPrice), 0)).toFixed(2) > 0 ?
                                            (cart.items.reduce((sum, product) => sum + product.quantity * parseFloat(product.product.fPrice), 0)).toFixed(2) : 0
                                    }</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping</p>

                                <p class="text-gray-700">$
                                    {/* <label className="" htmlFor="shipping">
                                    Shipping:</label> */}
                                    <select
                                        id="shipping"
                                        name="shipping"
                                        className=""
                                        value={shippingPrice}
                                        onChange={onfTypeChanged}
                                    >
                                        {shippingOptions}
                                    </select>
                                </p>
                            </div>

                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">

                                        {/* $134.98 USD */}

                                        {
                                            (cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) + parseFloat(shippingPrice) - parseFloat(discount)).toFixed(2) > 0 ?
                                                (cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) + parseFloat(shippingPrice) - parseFloat(discount)).toFixed(2) : 0
                                        }

                                    </p>
                                    <p class="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            {/* <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button> */}
                            <button type="button" class=" mt-6 py-1.5 text-white gap-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xs w-full text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                                <Link to={'/OnlineOrdering/checkOut'}>
                                    Proceed to Checkout
                                </Link>
                            </button>

                            <Link to={"/Shop"}>
                                <button type="button" class=" mt-6 py-1.5 text-black gap-2 bg-[#f1f4f5] hover:bg-[#dde0e1] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xs w-full text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    Continue Shopping
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 align-middle text-center">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </Link>
                            <div class="block">
                                <p class="text-gray-700"> Do you have a voucher or gift card?</p>
                                <p class="text-gray-700 flex justify-between">
                                    <input class={`appearance-none my-2 flex w-3/4 bg-gray-200 text-gray-700 border border-gray-400 rounded py-1 px-2 mb-1 leading-tight focus:outline-none focus:bg-white`}
                                        id="discount"
                                        name="discount"
                                        type="text"
                                        autoComplete="off"
                                        value={discount}
                                        onChange={onDiscountChanged}
                                    />
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Apply
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

    return tableContent_mod
}

export default NewOrder