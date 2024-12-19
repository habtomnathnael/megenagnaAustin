import { CartContext } from '../../../features/cartContext/CartContext'
import { useContext } from 'react'

import { AllProducts } from "../../../constants"

import { moments } from '../../../constants'

const ShoppingCard = (props) => {
    // console.log(props)

    const cart = useContext(CartContext)
    const { fPicName, fPrice, text, title, salesTax, bestSeller, _id } = props

    const content_mod = (
        <div className='block'>
            <div class="rounded border-2 border-slate-400 flex flex-col items-center relative h-24 w-24">
                {/* <span class="block bg-blue-400 rounded-b absolute sm:h-4 top-0 sm:-top-0.5">{title}</span> */}
                {/* <svg class="w-10 h-10 text-gray-600 mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg> */}

                <div className={`bg-[url("http://localhost:3500/ItemImage/${fPicName}")] w-full h-full`}>
                    this is trial version
                </div>


                <p className="text-gray-700 font-semibold">
                    {/* <img
                        className="object-cover object-center"
                        src={`http://localhost:3500/ItemImage/${fPicName}`}
                        alt={fPicName}
                    /> */}

                </p>

            </div>
            <p className="text-slate-800 overflow-hidden w-20 truncate whitespace-nowrap">
                {text}
            </p>

            <a href="#" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Read Details →</a>

        </div>
    )


    const content_mod_ = (
        <div
        // className=" lg:mb-2 container mx-auto justify-between block  md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-5"
        >

            <div className="relative my-4 w-[100px] h-[100px] mx-auto" key={title}>
                <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                <div className="relative px-1 py-1  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="w-[100px] h-[100px]">

                        <img
                            className="object-cover object-center"
                            src={`http://localhost:3500/ItemImage/${fPicName}`}
                            alt="Woman workcationing on the beach"
                        />

                        {/* <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                        </svg> */}


                    </div>

                </div>
            </div>

        </div>
    )

    const content = (
        <>

            <div className="mx-auto max-w-sm w-full items-center ">
                <div className="card flex flex-col justify-center border-1 border-red-500 p-4  min-w-60 max-w-60 min-h-80 max-h-80 bg-white rounded-xs shadow-2xl">

                    {/* <div className="relative z-10"><p className=" absolute top-12 left-2 ">{bestSeller >= 200 ? <span className=" bg-mainColor p-2"> BestSeller</span> : ''}</p></div> */}

                    <div className="prod-title">
                        <p className="text-[16px] uppercase text-gray-900 font-bold">{title}</p>
                        <p className="text-[12px] text-gray-400 line-clamp-1">
                            {text}
                        </p>
                    </div>
                    <div className="prod-img w-25 h-25">
                        {fPicName !== '' ?
                            <img src={`http://localhost:3500/ItemImage/${fPicName}`}
                                className="w-full object-cover object-center"
                            />
                            :
                            <img src={`https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920`}
                                className="w-full object-cover object-center" />
                        }

                    </div>

                    <div className="prod-info grid gap-6">
                        {title === 'Cloths' &&
                            <div>
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
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <span className=" flex-row justify-center"><p className=" font-Avenir font-black text-[16px]">$ {fPrice}</p>
                                <p className=" font-Avenir text-[8px]">{salesTax}</p>
                            </span>
                            <button
                                onClick={() => cart.addOneToCart(props)} className="px-3 py-1 transition ease-in duration-200 rounded-xs bg-mainColor text-white hover:bg-red-200 hover:text-black border-2 border-gray-300 focus:outline-none text-[8px]">Add
                                to cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
    const content_tailwind = (
        <div className=' w-[100px] h-[100px] grid grid-rows-3'>
            <div className='aspect-w-3 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4'>
                <img
                    className='object-cover shadow-lg rounded-lg'
                    src={`http://localhost:3500/ItemImage/${fPicName}`}
                    alt=''
                />
                {/* <div className=''>
                    <div className=' space-y-4'>
                        <div className=' text-lg leading-6 font-medium space-y-1'>
                            <h3>Whitney Francis</h3>
                            <p className=' text-indigo-600'>Design director</p>
                        </div>
                        <div className=' text-lg'>
                            <p className='text-gray-500'>{text}</p>
                        </div>

                    </div>

                </div> */}


            </div>
        </div>
    )
    const content_mod_tailwind = (
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-40 p-6">
            <div class="block items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg> */}
                <img
                    className='object-cover shadow-xs rounded-lg w-full h-[100px] cursor-pointer'
                    src={`http://localhost:3500/ItemImage/${fPicName}`}
                    alt=''
                />

            </div>
            <p class="block text-slate-600 leading-normal text-[12px] text-start font-light mb-4 truncate">
                {text}
                {/* Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others. */}
            </p>
            <div onClick={() => cart.addOneToCart(props)} className=' text-center align-middle' >
                <p class="cursor-pointer text-slate-800 font-semibold text-sm hover:underline flex items-center">
                    Add to Cart
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </p>
            </div>
        </div>
    )

    // const content_best = (

    //     <div class="relative flex flex-col my-1 bg-white shadow-sm border border-slate-200 rounded-lg w-40">
    //         <div class="relative h-30 overflow-hidden text-white rounded-md">

    //             <img
    //                 className='object-cover shadow-xs rounded-lg w-full h-[100px] cursor-pointer'
    //                 src={`http://localhost:3500/ItemImage/${fPicName}`}
    //                 alt=''
    //             />
    //         </div>
    //         <div class="p-4">
    //             <div class="mb-4 px-4 my-4 rounded-sm  py-0.5 px-2.5 border border-transparent text-xs font-bold transition-all shadow-sm w-20 text-center">
    //                 $&nbsp;{fPrice}
    //             </div>
    //             <h6 class="mb-2 text-slate-800 text-sm font-semibold text-start ">
    //                 {title}
    //             </h6>
    //             <p class="text-slate-600 leading-normal text-start font-light px-4 truncate">
    //                 {text}
    //             </p>
    //         </div>
    //         <div className=' flex my-4 justify-between w-[80%]' onClick={() => cart.addOneToCart(props)} >
    //             {/* <p class="cursor-pointer text-slate-800 font-semibold text-sm hover:underline flex items-center">
    //                 Add to Cart</p> */}

    //             <a href="#" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Read Details →</a>

    //             {/* <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    //                 </svg> */}
    //             {/* <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    //             </svg> */}

    //         </div>

    //     </div>
    // )

    return content_mod_tailwind
}

export const content_mod_final = ({ children, imgSrc, ...props }) => (
    <div
        {...props}
        className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'
    >  <img
            className=" transition-transform group-hover:scale-110 duration-200"
            src={`http://localhost:3500/ItemImage/${imgSrc}`}
            alt="not visible"
        />
        <div className=' absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className=' p-4 text-white'>{children}</div>
        </div>
    </div>
)

export default ShoppingCard