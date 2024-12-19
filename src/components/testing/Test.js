import deregTibs from './../../img/derekTibs.jpg'
import logo from './logo.svg'

const Test = () => {
  return (
    <>
      <div className="container mx-auto bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
      <div
        className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div className="xl:max-w-xl">
                    <h1
            className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            Our Fans' Favorite.
            <br className="hidden lg:inline" />

          </h1>
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src={deregTibs}
            alt="Woman workcationing on the beach"
          />
          <h1
            className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            <br className="hidden lg:inline" />
            <span className=" text-mainColor">kitfo Special ክትፎ ስፔሻል</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
           It is Ethiopian Special Kitfo mixed with Homemade Cottage Cheese, Harbor Butter, Mitmita, Cardamom and more ( It can be ordered Raw, Medium or Well Done).
          </p>
          <div className="mt-4 sm:mt-6">
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-mainColor rounded-sm hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={deregTibs}
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>    


    </>
  )
}

export default Test