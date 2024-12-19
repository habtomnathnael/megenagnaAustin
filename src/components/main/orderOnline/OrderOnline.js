import { useState, useContext } from 'react';
import OrderCard from './OrderCard';
import { MenuTypes } from "../../../constants/index"
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice';
import { CartContext } from '../../../features/cartContext/CartContext';
import { Link } from 'react-router-dom';

const OrderOnline = () => {
    const [menuType, setMenuType] = useState("Breakfast")
    // const [cartNum, setCartNum] = useState(0);

    const cart = useContext(CartContext)

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

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    const productsTotal = cart.items.reduce((sum, product) => sum + product.quantity * product.product.fPrice, 0)

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        // content = <p className="errmsg">{error?.data?.message}</p>
        content = <div style={{ color: "red" }}>An error has occurred!</div>
    }


    if (isSuccess) {

        const { ids } = notes

        // console.log("=========")
        const dataResponse = ids.map((val) => {
            return notes.entities[val]
        })

        var myData = Object.keys(dataResponse).map(key => {
            return dataResponse[key];
        })

        content = (
            <div className="container mx-auto justify-between mt-10">
                <h2 className='mx-auto justify-between text-center font-Playfair text-[16px] lg:text-[18px] font-semibold text-mainColor'>Order online</h2>
                <h1 className='mx-auto justify-between text-center font-Oswald text-[36px] lg:text-[46px] font-bold'>Freshly Made to Order</h1>
                <div className='my-20 mx-6 w-full block md:mx-0 md:grid md:grid-cols-12 border border-gray-400 border-b-1 border-r-0 border-l-0 border-t-0'>

                    <div className=' mx-4 md:col-span-4'>

                        <select
                            onChange={(e) => setMenuType(e.target.value)}
                            value={menuType}

                            className="bg-gray-50 border focus:outline-none border-gray-300 border-b-0 border-t-0 border-l-0 border-r-0 text-gray-600 text-sm block w-full p-2.5"
                        >
                            {["Breakfast", "Lunch & Dinner Menu", "Vegetarian", "Drinks"].map((val, index) => (
                                <option key={index}>{val}</option>
                            ))}
                        </select>

                    </div>
                    <div className='justify-between mx-2 hidden md:flex md:col-span-8 border border-l-1 border-r-0 border-t-0 border-b-0 border-gray-400'>
                        <div className=' mx-4 w-fit border border-red-600 border-r-0 border-l-0 border-t-0 border-b-2'>
                            <p >{menuType}</p>
                        </div>
                        {/* <div className='relative'>
                            <Link to={"/OnlineOrdering/cart"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <div className='absolute -right-2 -top-1'>{productsCount}</div>
                            </Link>

                        </div> */}
                    </div>

                </div>
                <div className='w-full justify-between text-center items-center'>
                    <h1 className='mx-auto justify-between font-Oswald text-[26px] font-medium px-4 text-left'>Breakfast</h1>
                    <p className='mx-auto justify-between font-Avenir text-[16px] px-4 text-left'>we serve daily between 9:00am to 11:00pm</p>
                    <div className='gap-8 grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-0 justify-between text-center my-10'>

                        {
                            myData.map((menu, index) => (menu.fType === "Breakfast" ?
                                <OrderCard key={index} {...menu} />
                                : ""
                            ))

                        }

                    </div>
                    <h1 className='mx-auto justify-between font-Oswald text-[26px] font-medium px-4 text-left'>Lunch & Dinner Menu</h1>
                    <p className='mx-auto justify-between font-Avenir text-[16px] px-4 text-left'>we serve daily between 9:00am to 11:00pm</p>
                    <div className='gap-8 grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-0 justify-between text-center my-10'>

                        {
                            myData.map((menu, index) => (menu.fType === "lunch&Dinner" ?
                                <OrderCard key={index} {...menu} />
                                : ""

                            ))
                        }

                    </div>
                    <h1 className='mx-auto justify-between font-Oswald text-[26px] font-medium px-4 text-left'>Vegetarian</h1>
                    <p className='mx-auto justify-between font-Avenir text-[16px] px-4 text-left'>we serve daily between 9:00am to 11:00pm</p>
                    <div className='gap-8 grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-0 justify-between text-center my-10'>

                        {
                            myData.map((menu, index) => (menu.fType === "vegetarian" ?

                                <OrderCard key={index} {...menu} />
                                // <OrderCard key={index} menu={menu} />
                                : ""

                            ))
                        }

                    </div>


                </div>
            </div>
        )
    }
    return content
}

export default OrderOnline