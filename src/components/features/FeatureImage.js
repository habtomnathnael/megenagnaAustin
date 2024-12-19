
const FeatureImage = () => {
  return (
    <>
      <div className="relative h-svh before:bg-hero-pattern before:bg-cover before:absolute before:inset-0 before:opacity-90 before:bg-center before:bg-fixed before:bg-no-repeat">

        {/* <div className='md:pt-10 md:pl-44  md:max-w-14 bg-boxColor '> */}
        <div className='isolate flex-col min-w-[250px] justify-center items-center text-white content-center md:content-start md:h-svh md:pt-6 md:pl-44  md:min-w-100 '>
          <section className="flex-col justify-center items-center absolute md:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[280px] md:start-3 md:top-1/4 md:left-1/4  md:-translate-x-1/4 md:-translate-y-1/4 bg-boxColor opacity-85 border-2 border-red-900 shadow dark:bg-gray-900 dark:border-red-700 md:min-w-[500px]">
            {/* <div className='max-w-[320px]'> */}
            <div className=' z-10 placeholder-opacity-100 ml-4 pt-4 md:space-y-2'>
              <p className='uppercase text-[21px] font-Avenir font-black tracking-widest md:text-[25px] text-white'>WE PROVIDE</p>
              <p className='uppercase text-[30px] md:text-[40px] font-Lulo font-black text-white'>luxurious</p>
              <p className='uppercase text-[30px] md:text-[40px] font-Lulo font-black text-white'>SERVICES</p>
              <p className='uppercase text-[21px] font-Avenir font-black  tracking-widest md:text-[25px] text-white'>EVERYDAY</p>
            </div>

            {/* <div className="pl-8 py-2 my-4 w-[250px] md:w-[350px] bg-white"></div> */}


            <hr className="ml-4 p-2 h-px my-8 bg-brightRedSupLight border-0 dark:bg-gray-700 w-[240px] md:w-[340px] " />



            {/* <div className='ml-2 flex items-center text-center space-x-2 space-y-2 md:max-w-[411px]'>
                
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                
                <p className='text-[14px] font-Josefin text-balance text-left md:text-[16px]'>We carry Quality Ethiopian and East African speices</p>
                
              </div>
             */}

            <div className='ml-4 flex items-center text-center space-x-2 space-y-2 md:max-w-[411px]'>
              {/* <p className="box-border h-4 w-4 bg-white"/> */}

              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>

              {/* <p className='text-[14px] font-Josefin text-balance text-left md:text-[16px]'> We carry Quality Ethiopian and East African speices We carry Quality Ethiopian and East African speices
               </p> */}
              <p className='text-[14px] font-Josefin text-balance text-left md:text-[16px] '>

                You will find Exotic Meat and In-house Kitchen, Injera, Kurt, Tibs, Kitfo, Quanta Firfir, EThiopian Coffee and more...</p>

            </div>

            <div className='ml-4 flex items-center text-center space-x-2 space-y-2 md:max-w-[411px]'>
              {/* <p className="box-border h-4 w-4 bg-white"/> */}

              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <p className='text-[14px] font-Josefin text-balance text-left md:text-[16px]'>
                You will find Exotic Meat and In-house Kitchen, Injera, Kurt, Tibs, Kitfo, Quanta Firfir, EThiopian Coffee and more...</p>

            </div>

            <div className=' m-6 md:m-10'>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-mainColor rounded-sm hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">

                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>


          </section>
        </div>
      </div>
    </>
  )
}

export default FeatureImage