import svgbg from '../../img/svgbg.svg'
import { HeroLinks } from '../../constants/index'

import React from 'react'

const HeroSection = () => {
  return (
      <>
        <section id="hero" className='h-[500px] mt-10'>
          <div className="container block space-y-4 md:space-x-20  mx-4  md:mx-auto md:space-y-0 md:flex-row md:flex md:justify-between md:items-center">
                
          {HeroLinks.map((herolink) => (
                  
                  <div key={herolink.id} className='mx-auto justify-between align-middle flex w-2/3 md:w-1/3'>

                          <span className='w-[80%] flex justify-between border-red-600  bg-red-600 hover:bg-white  hover:text-red-950'>
                                <button type="button" className=" mx-auto justify-between font-Oswald text-white hover:bg-white hover:text-red-950 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-lg md:px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-600">
                                      {herolink.title}
                                </button>
                          </span>   

                          <span className='text-center inline-flex items-center w-1/3 border-[1px] border-red-600 bg-white'>
                            <button type="button" className="mx-auto justify-between font-Oswald focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-lg  md:px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-600">
                      {/* <FontAwesomeIcon icon={faLongArrowRight} className='text-red-950 w-6 md:h-4 ' /> */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                  </svg>
                      
                            </button>
                          </span>
                      </div>
            
                ))}
            </div>
          <div className='container pt-10 md:font-medium mx-auto flex-col justify-center items-center '>
              <div className='relative w-full mx-auto flex'>            
                <img src={svgbg} className='w-[200px] mix-blend-overlay filter blur-px'/>
                  <span className='absolute w-full z-10 md:py-8 font-Oswald font-medium text-gray-800 text-[22px] md:text-[46px] block'>
                    <p className='text-balance mx-auto justify-between text-center md:text-wrap'>We believe in the simple pleasures of life.</p>
                    <p className='text-balance mx-auto justify-between text-center md:text-wrap'>Good food, fresh ingredients, and awesome vibes.</p>
                    <p className='text-balance  mx-auto justify-between text-center md:text-wrap'>Welcome to Megenagna Mart and Café, make yourself at home.</p>
                  </span>
            </div>
          </div>
        </section>
      </>
  )
}

export default HeroSection