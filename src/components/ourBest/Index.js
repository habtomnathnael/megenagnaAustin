// import derekTibs from '../../img/derekTibs.jpg'
// import gather from '../../img/gather.jpg'
// import store from '../../img/store.jpg'

import { about } from '../../constants'


const Index = () => {
    return (
        <>

            {/* ____________________________________2nd  */}

            {about.map((ab) => (
                (ab.id % 2 != 0)
                    ?
                    <>
                        <div key={ab.id} className="container md:my-20 mx-auto bg-gray-100 grid md:grid-cols-2 2xl:grid-cols-5">

                            <div className="relative w-full block  md:w-3/4 lg:block 2xl:col-span-3">
                                <img
                                    className=" relative md:absolute md:inset-0 w-full h-full object-cover object-center"
                                    src={ab.pics}
                                    alt={ab.section}
                                />
                            </div>

                            <div className="px-4 py-4 md:py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2">
                                <div className="w-full xl:max-w-xl">
                                    <h1 className="mt-6 font-bold text-red-600 text-[24px] md:text-[28px]" >
                                        {ab.section}
                                        <br className="hidden lg:inline" />
                                    </h1>
                                    <h1 className="text-2xl font-bold text-gray-900 sm:mt-4 sm:text-4xl lg:text-3xl xl:text-4xl">
                                        <br className="hidden lg:inline" />
                                        <span className="font-osuwald font-black text-[26px]  md:text-[46px]">{ab.title}</span>
                                    </h1>
                                    <p className="mt-2 text-gray-600 sm:mt-4 md:mt-8 md:mb-12 sm:text-md">
                                        {ab.description}

                                    </p>
                                    <div className="mt-4 sm:mt-6 md:mt-8">
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-Avenir font-medium text-center text-white hover:text-mainColor bg-mainColor rounded-sm hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                            View Menu
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    < >
                        <div key={ab.id} className="container my-4 flex flex-col-reverse md:my-20 mx-auto md:grid md:grid-cols-2 2xl:grid-cols-5">
                            {/* px-4 py-12 bg-green-300 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2 */}
                            <div className="px-4 py-4 md:py-12 max-w-md md:mr-4 mx-auto  sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2">
                                <div className="w-full xl:max-w-xl">
                                    <h1 className="mt-6 text-[24px] md:text-[28px] font-bold text-red-600" >
                                        {ab.section}
                                        <br className="hidden lg:inline" />
                                    </h1>

                                    <h1>
                                        <br className="hidden lg:inline" />
                                        <span className="font-osuwald font-black text-[26px]  md:text-[46px]">
                                            {ab.title}
                                        </span>
                                    </h1>
                                    <p className="mt-2 text-gray-600 sm:mt-4 md:mt-8 md:mb-12 sm:text-md">
                                        {ab.description}
                                    </p>
                                    <div className="mt-4 sm:mt-6 md:mt-8">
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-Avenir font-medium text-center text-white hover:text-mainColor bg-mainColor rounded-sm hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                            Learn More
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full block md:ml-4 lg:block 2xl:col-span-3">

                                <img
                                    className="relative md:absolute md:inset-0 w-full h-full object-cover object-center"

                                    src={ab.pics}
                                    alt={ab.section}
                                />
                            </div>
                        </div>

                    </>

            ))}

            {/* 
              <div className="hidden relative w-3/4 lg:block 2xl:col-span-3">
                    <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={derekTibs}
                    alt="Woman workcationing on the beach"
                    />
                </div> */}
            {/*               
                <div className="px-4 py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2">
                    <div className="w-full xl:max-w-xl">
                        <h1 className="mt-6 font-bold text-red-600 text-[28px]" >
                            Our Fans' Favorite.
                            <br className="hidden lg:inline" />
                        </h1>
                        <h1 className="text-2xl font-bold text-gray-900 sm:mt-4 sm:text-4xl lg:text-3xl xl:text-4xl">
                            <br className="hidden lg:inline"/>
                            <span className="font-osuwald font-black text-[46px]">kitfo Special ክትፎ ስፔሻል</span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 md:mt-8 md:mb-12 sm:text-md">
                            It is Ethiopian Special Kitfo mixed with Homemade Cottage Cheese, Harbor Butter, Mitmita, Cardamom and more ( It can be ordered Raw, Medium or Well Done).
                        </p>
                        <div className="mt-4 sm:mt-6 md:mt-8">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-Avenir font-medium text-center text-white hover:text-mainColor bg-mainColor rounded-sm hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            View Menu
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div> */}

            {/* </div> */}

            {/* ____________________________________2nd  */}









            {/* <div className="container mb-20 mx-auto bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
               <div className="px-4 py-12 max-w-md mr-4 mx-auto  sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2">
                    <div className="w-full xl:max-w-xl">
                        <h1 className="mt-6 text-[28px] font-bold text-red-600" >
                            Join us
                            <br className="hidden lg:inline" />
                        </h1>

                        <h1>
                            <br className="hidden lg:inline"/>
                          <span className="font-osuwald font-black text-[40px]">
                              Gather around the Table with Our Family Bundle
                          </span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 md:mt-8 md:mb-12 sm:text-md">
                        Our Café is the place where you can find different Ethiopian Posters that reflects our traditional history. We serve delicious drinks, hot and cold. We welcome all to come enjoy our great Mart and Café. We also offer you T-Shirts, Jewelries, Gifts and more...   </p>
                        <div className="mt-4 sm:mt-6 md:mt-8">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-Avenir font-medium text-center text-white hover:text-mainColor bg-mainColor rounded-sm hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Learn More
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
               </div>
              
               <div className="relative ml-4 w-full lg:block 2xl:col-span-3">
                    <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={gather}
                    alt="gathering"
                    />
                </div>
          </div>
           */}

            {/* ____________________________________2nd  */}
            {/* <div className="container mb-20 mx-auto bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
                <div className="relative md:block w-3/4 lg:block 2xl:col-span-3">
                    <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={store}
                    alt="Woman workcationing on the beach"
                    />
                </div>
              
                <div className="px-4 py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-24 md:max-w-full xl:mr-0 2xl:col-span-2">
                    <div className="w-full xl:max-w-xl">
                        <h1 className="mt-6 md:text-[28px] font-bold text-red-600" >
                            Our Store
                            <br className="hidden lg:inline" />
                        </h1>

                        <h1 className="font-bold text-gray-900">
                            <br className="hidden lg:inline"/>
                            <span className="font-osuwald font-black text-[40px]">Ethiopian & East African Spices ቅመማ ቅመሞች</span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 md:mt-8 md:mb-12 sm:text-md">
                               Looking for more North African Spices? Check out our Foods Market. Most of the spices used in Ethiopian cooking are available in our place. We sell Teff, Berbere, Shiro and a combination of more than 20 spices...
                        </p>
                        <div className="mt-4 sm:mt-6 md:mt-8">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-Avenir font-medium text-center text-white hover:text-mainColor bg-mainColor rounded-sm hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Learn More
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

          </div> */}


        </>
    )
}

export default Index