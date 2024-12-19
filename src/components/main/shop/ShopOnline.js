import { useState } from 'react'
import { leftShoppingLink, AllProducts } from '../../../constants/index'
import ShoppingCard from './ShoppingCard'
import close from "../../../img/close.svg";
import menu from '../../../img/menu.svg'
import { Dialog } from '@headlessui/react';
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice';
import { Link } from 'react-router-dom';
import { content_mod_final } from './ShoppingCard'

const navLinks = []

const ShopOnline = () => {

    const [isColor, setIsColor] = useState(false)
    const [isMiniColor, setIsMiniColor] = useState(false)

    const [isSize, setIsSize] = useState(false)
    const [isMiniSize, setIsMiniSize] = useState(false)
    const [isMiniSortBy, setisMiniSortBy] = useState(true)

    const [isFilter, setIsFilter] = useState(false)

    const [selectedFiler, setSelectedFiler] = useState("")

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

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        // content = <p className="errmsg">{error?.data?.message}</p>
        content = <div style={{ color: "red" }}>An error has occurred!</div>
    }


    if (isSuccess) {
        const { ids } = notes

        const dataResponse = ids.map((val) => {
            return notes.entities[val]
        })

        var myData = Object.keys(dataResponse).map(key => {
            return dataResponse[key];
        })
        // console.log(myData)

        content = (
            <div className='my-10 grid gap-2 grid-cols-12'>
                <div className='hidden md:block md:col-span-3'>
                    <div className='ml-8 mt-0'>

                        <p className=' mb-16'><Link to="/" className=' cursor-pointer'>Home</Link> {'>'}
                            {selectedFiler === "" ? "All Products" : selectedFiler}</p>
                        <h1 className=' text-[18px] font-Oswald font-black my-2'>Browse by</h1>
                        <hr className=' w-3/4 h-[2px] bg-gray-400' />
                        <span>
                            {leftShoppingLink.map((links) => (
                                <p key={links.id} onClick={() => setSelectedFiler(links.links)} className=' my-4 cursor-pointer'>
                                    {links.links}
                                </p>
                            ))}
                        </span>
                        <h2 className=' mt-10 font-Oswald font-black text-[18px'>Filter by</h2>
                        <hr className=' w-3/4 h-[2px] bg-gray-400 my-6' />
                        <p>Price</p>

                        <div class="relative w-3/4 mb-6">
                            <label for="labels-range-input" class="sr-only">Labels range</label>
                            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-[2px] bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$1.99</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$15.99</span>

                        </div>

                        <hr className='w-3/4 h-[2px] bg-gray-0 my-6' />
                        <hr className='w-3/4 h-[2px] bg-gray-400 my-4' />
                        <span className='w-3/4 left-0 flex-col'>
                            <span className=' w-3/4 left-0 flex justify-between'>
                                <p>Color</p>
                                <p onClick={() => setIsColor(!isColor)} className=' cursor-pointer text-[18px] font-Avenir' >
                                    {!isColor ? '+' : '-'}
                                </p>
                            </span>
                            {
                                isColor &&
                                <div className='my-4 w-3/4 left-0'>
                                    <ul className="flex flex-row justify-center items-center">
                                        <li className="mr-4 last:mr-0">
                                            <span
                                                className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li className="mr-4 last:mr-0">
                                            <span
                                                className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li className="mr-4 last:mr-0">
                                            <span
                                                className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li className="mr-4 last:mr-0">
                                            <span
                                                className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            }


                        </span>

                        <hr className=' w-3/4 h-[2px] bg-gray-400 my-2' />

                        <span className='w-3/4 left-0 flex-col'>
                            <span className=' w-3/4 left-0 flex justify-between'>
                                <p>Size</p>
                                <p onClick={() => setIsSize(!isSize)} className=' cursor-pointer'>
                                    {!isSize ? '+' : '-'}
                                </p>
                            </span>

                            {
                                isSize &&

                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                                    {['500ml', '250ml', '80ml', 'Large', 'Medium', 'Small'].map((val, index) => (


                                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={index}>
                                            <div class="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{val}</label>
                                            </div>
                                        </li>


                                    ))}
                                </ul>

                            }

                        </span>

                        {/* 
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center ps-3">
                                <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center ps-3">
                                <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center ps-3">
                                <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center ps-3">
                                <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                            </div>
                        </li>
                    </ul> */}



                        <hr className=' w-3/4 h-[2px] bg-gray-400 my-2' />

                    </div>
                </div>
                <div className=' col-span-12 md:col-span-9'>
                    <h1 className=' font-Oswald text-[26px] text-center lg:text-start mx-auto justify-between lg:mx-0 lg:justify-start mt-16'>All Products</h1>
                    <p className=' w-full md:pr-8 py-8 text-center lg:text-start mx-auto justify-between lg:mx-0 lg:justify-start'>
                        For centuries, spices have been one of the most essential ingredients in kitchens - they add flavor and aroma, enhance the taste of food, and even boost the colors in popular dishes. If you are looking for a little direction when it comes to spicing up your cuisine, this comprehensive guide will list common dried herbs and spices and their uses, so you can easily transform the simplest of dishes into culinary masterpieces.
                    </p>
                    <span className=' mx-auto flex justify-between px-6 md:px-0'>
                        <p>{ids?.length}&nbsp; products</p>
                        <span className='hidden md:block'>Sort by:

                            <select>

                                {
                                    ['Recomended', 'Newest', 'Price(Low to High)', 'Price(High to Low)', 'Name A-Z', 'Name Z-A'].map((val, index) => (
                                        <option key={index}>{val}</option>
                                    ))

                                }

                            </select>

                        </span>

                        {!isFilter &&
                            <span className='block md:hidden underline font-Avenir text-[16px] hover:cursor-pointer'
                                onClick={() => setIsFilter(!isFilter)}
                            >
                                Filter & Sort
                            </span>


                        }
                    </span>

                    {isFilter &&

                        <div className={`absolute top-0 left-0 md:hidden h-[100vh] z-10  w-full bg-white flex flex-col gap-6 transform transition-transform ${isFilter ? "opacity-96" : "opacity-0"}`}
                            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
                        >
                            <span className=' isolate flex items-center'>
                                <p className='text-left font-Oswald text-[20px]'>Filter & Sort</p>
                                <p className=' text-[14px] font-Avenir'>&nbsp;(&nbsp;{AllProducts.length}&nbsp; products&nbsp;)</p>
                            </span>

                            <span className=' mx-auto flex justify-between px-6 md:px-0'>

                                {!isFilter &&
                                    <span className='block md:hidden underline font-Avenir text-[16px] hover:cursor-pointer'
                                        onClick={() => setIsFilter(!isFilter)}
                                    >
                                        Filter & Sort
                                    </span>

                                }
                            </span>

                            <div className=" absolute top-0 right-0 flex flex-1 justify-end items-center">
                                <img
                                    src={close}
                                    alt="menu"
                                    className="w-[18px] h-[18px] mx-4 my-4 object-contain cursor-pointer text-black"
                                    onClick={() => setIsFilter(!isFilter)}
                                />
                            </div>

                            {/* <hr className=' isolate w-full h-[1px] bg-gray-400' /> */}

                            {/* __________________________________________________additional part */}





                            <hr className='w-[95%] h-[2px] bg-gray-500' />


                            <span className='w-[95%] left-0 flex-col'>
                                <span className=' w-full left-0 flex items-center justify-between'>
                                    <p>Sort by:</p>
                                    <p onClick={() => setisMiniSortBy(!isMiniSortBy)} className='cursor-pointer text-[18px] font-Avenir'>
                                        {!isMiniSortBy ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>


                                        }
                                    </p>
                                </span>

                                {
                                    isMiniSortBy &&

                                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                                        {['Recomended', 'Newest', 'Price (low to high)', 'Price (high to low)', 'Name A-Z', 'Name Z-A'].map((val, index) => (

                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={index}>
                                                <div class="flex items-center ps-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{val}</label>
                                                </div>
                                            </li>


                                        ))}
                                    </ul>

                                }

                            </span>


                            <hr className=' w-[95%] h-[2px] bg-gray-400' />

                            <span className='w-[95%] left-0 flex-col'>
                                <span className=' w-full left-0 flex items-center justify-between'>
                                    <p>Color</p>
                                    <p onClick={() => setIsMiniColor(!isMiniColor)} className=' cursor-pointer' >
                                        {!isMiniColor ?

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        }
                                    </p>
                                </span>
                                {
                                    isMiniColor &&
                                    <div className='my-4 w-3/4 left-0'>
                                        <ul className="flex flex-row justify-center items-center">
                                            <li className="mr-4 last:mr-0">
                                                <span
                                                    className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                    <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                                </span>
                                            </li>
                                            <li className="mr-4 last:mr-0">
                                                <span
                                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                    <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                                </span>
                                            </li>
                                            <li className="mr-4 last:mr-0">
                                                <span
                                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                    <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
                                                </span>
                                            </li>
                                            <li className="mr-4 last:mr-0">
                                                <span
                                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                    <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                }


                            </span>


                            <hr className=' w-[95%] h-[2px] bg-gray-400' />


                            <span className='w-[95%] left-0 flex-col'>
                                <span className=' w-full left-0 flex items-center justify-between'>
                                    <p>Size</p>
                                    <p onClick={() => setIsMiniSize(!isMiniSize)} className='cursor-pointer text-[18px] font-Avenir'>
                                        {!isMiniSize ?

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>
                                        }
                                    </p>
                                </span>

                                {
                                    isMiniSize &&

                                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                                        {['500ml', '250ml', '80ml', 'Large', 'Medium', 'Small'].map((val, index) => (


                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={index}>
                                                <div class="flex items-center ps-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{val}</label>
                                                </div>
                                            </li>


                                        ))}
                                    </ul>


                                }

                            </span>











                            {/* _____________________________________________________end additional part */}






                        </div>
                    }


                    <div className='gap-4 text-center mx-auto justify-between lg:mx-0 lg:justify-start grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5'>
                        {
                            myData.map((product, index) => (
                                ((
                                    selectedFiler === "drinks" ? ['drinks'].includes(product.fType) :
                                        selectedFiler === "spices" ? ['spices'].includes(product.fType) :
                                            selectedFiler === "cloths" ? ['cloths'].includes(product.fType) :
                                                selectedFiler === "others" ? ['others'].includes(product.fType) :
                                                    selectedFiler === "grocery" ? ['grocery'].includes(product.fType) :
                                                        ['drinks', 'spices', 'cloths', 'others', 'grocery'].includes(product.fType)
                                ) && product.completed) &&
                                < span className=' mx-auto flex justify-between' key={index} >
                                    <ShoppingCard key={product.id} {...product} />
                                    {/* <ShoppingCard key={product._id} price={product.fPrice} title={product.title} desc={product.text} pic={product.fPicName} salesTax={product.fPrice} bestSeller={product.servingTime} id={product._id} /> */}

                                    {/* <content_mod_final key={product.id} imgSrc={product.fPicName}>
                                    <h3 className='text-xl font-bold mb-2'>{product.title}</h3>
                                    <p className=''>{product.text}</p>
                                    <div className=' space-x-4 mt-4'>
                                        <button className='btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                        <button className='btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                        <button className='btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>

                                        </button>
                                    </div>
                                </content_mod_final> */}

                                    {/* <ShoppingCard key={product._id} price={product.fPrice} title={product.title} desc={product.text} pic={product.fPicName} salesTax={product.fPrice} bestSeller={product.servingTime} id={product._id} /> */}


                                </span>
                            ))}
                    </div>


                </div>

            </div >
        )
    }
    return content
}

export default ShopOnline