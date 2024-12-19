import { CartContext } from '../../../features/cartContext/CartContext'
import { useContext } from 'react'
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice';

const ShoppingCart = (props) => {

    const cart = useContext(CartContext)


    // console.log(window.location.href ==="http://localhost:3001/OnlineOrdering/cart")

    const { id, subTotal, setSubTotal } = props;

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery('notesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content
    let content_mod
    let content_one

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <div style={{ color: "red" }}>An error has occurred!</div>
    }

    if (isSuccess) {

        const { ids } = notes

        const dataResponse = ids.map((val) => {
            return notes.entities[val]
        })

        var productsData = Object.keys(dataResponse).map(key => {
            return dataResponse[key];
        })

        productsData = (productsData.filter((currentProduct) => {
            return currentProduct._id === id
        }
        ))[0]

        // console.log(productsData)

        const product = cart.items.filter(val => { return val.id === id })[0]

        // console.log(product)

        // console.log(productsData.fPrice)

        // console.log(cart.getTotalCost(parseFloat(price)))

        const quantity = product.quantity
        var price = productsData.fPrice

        // console.log(productsData)
        content_mod = (

            <tr key={id} >
                <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500`}>
                    {/* <span className={`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium `}> */}
                    < div className='flex bg-white px-4 gap-4 text-slate-900 rounded-lg '>
                        <svg onClick={() => cart.deleteFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                        <img
                            src={`https://megenagna-api.onrender.com/ItemImage/${productsData.fPicName}`}
                            alt='grid_image'
                            className=' size-8 rounded-md object-cover'
                        />
                        <div className='block'>
                            <h1 className=' text-sm font-semibold'>{productsData.title} </h1>
                            <p className='text-xs text-slate-600 w-[20px]'>
                                {productsData.text}
                            </p>
                        </div>
                    </div>

                    {/* </span> */}
                </td>
                <td className={`whitespace-nowrap px-3 py-1 text-sm text-gray-500`}>
                    <p className=' text-sm font-semibold'>${price} </p>
                </td>
                <td className={`whitespace-nowrap px-3 py-1 text-sm text-gray-500 justify-between flex gap-2`}>
                    <div className='flex bg-white p-4 gap-4 text-slate-900 rounded-lg'>

                        <svg onClick={() => cart.addOneToCart(product.id, product.fPrice)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <p>{quantity}</p>

                        <svg onClick={() => cart.removeOneFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>

                    </div>
                </td>
                <td className={`whitespace-nowrap px-3 py-1 text-sm text-gray-500`}>
                    <p className=' text-sm font-semibold'>${quantity * price} </p>
                </td>
            </tr>
        )

        // content = (
        //     <>
        //         <div className=' mt-2 flex justify-center items-center bg-pink-50'>
        //             <div className=' flex bg-white p-4 gap-4 text-slate-900 rounded-lg w-[100%]'>

        //                 <img
        //                     src={`http://localhost:3500/ItemImage/${productsData.fPicName}`}
        //                     alt='grid_image'
        //                     className=' size-8 rounded-md object-cover'
        //                 />
        //                 <div className=' grow'>
        //                     <div className=' block justify-between mb-2'>
        //                         <h1 className=' text-xl font-semibold'>{productsData.title} </h1>
        //                         <p className=' text-xl font-semibold'>Total: ${quantity * price} </p>
        //                         <p>Total cost ${cart.getTotalCost(price, cart.id)}</p>
        //                     </div>
        //                     <p className=' text-xs text-slate-600 w-5/6 mb-4'>
        //                         {productsData.text}
        //                     </p>
        //                     <div className=' flex justify-between'>
        //                         <div className='flex gap-2'>

        //                             <svg onClick={() => cart.addOneToCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                             </svg>

        //                             <p>{quantity}</p>

        //                             <svg onClick={() => cart.removeOneFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                             </svg>

        //                             <svg onClick={() => cart.deleteFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //                             </svg>

        //                         </div>
        //                         {/* <svg onClick={() => cart.deleteFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 stroke-red-400 hover:bg-red-400 hover:stroke-white cursor-pointer rounded p-1">
        //                             <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                         </svg> */}
        //                     </div>

        //                 </div>
        //             </div>


        //             {/* <img src='https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=600' alt=''
        //                     className=' size-32 rounded-md object-cover'
        //                 /> */}


        //         </div >
        //         <hr></hr>
        //     </>
        // )
        content = (
            <div>
                <div class="mx-auto  w-full justify-center px-6 md:flex md:space-x-6 xl:px-0 border-b-2 border-slate-200 .">
                    <div class="rounded-xs md:w-full">
                        <div class="justify-between gap-2 mb-2 rounded-lg bg-white py-1 shadow-xs sm:flex sm:justify-start">
                            <div >
                                <img
                                    src={`https://megenagna-api.onrender.com/ItemImage/${productsData.fPicName}`}
                                    alt="product-image" className="size-20 rounded-md object-cover" />
                            </div>
                            <div class="sm:ml-0 sm:flex sm:w-full sm:justify-between">

                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">{productsData.title}  </h2>
                                    <p class="mt-1 text-xs text-gray-700">{productsData.text}</p>
                                    <p class="text-sm font-normal ">${parseFloat(price).toFixed(2)} </p>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                    <div class="flex items-center border-gray-100">
                                        <span onClick={() => cart.removeOneFromCart(product.id)} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        {/* <p>{quantity}</p> */}
                                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} min="1" />
                                        <span onClick={() => cart.addOneToCart(productsData)} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex justify-between  space-x-4">
                                        <p class="text-sm">${(cart.getTotalCost(price, id)).toFixed(2)}</p>
                                        <svg onClick={() => cart.deleteFromCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                </div>
                                <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">259.000 ₭</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- Sub total --> */}
                    {/* <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Subtotal</p>
                            <p class="text-gray-700">$129.99</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">$4.99</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p class="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div> */}
                </div>
            </div>
        )
    }
    return content

}

export default ShoppingCart
