import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HumbergerMenu from '../HumbergerMenu/Index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Promotion = () => {
  const prom = 'Join the Megenagna EQUB club'
  const prom_1 = '& get  discount off your next visit'

  const [onCLose, setOnCLose] = useState(true);

  return (
    <>
      <section id="primo" className=' bg-mainColor py-2  items-end'>
        <div className="grid grid-cols-12 justify-between">
          {/* left item */}
          <div className='hidden md:block md:col-span-2'></div>
          <div className=' cursor-pointer ml-1 col-span-9 md:col-span-8 text-[14px] flex-row md:flex  text-white font-Avenir items-center text-center md:text-[16px] md:font-Avenir'>

            <div className='underline'>{prom} &nbsp;</div>
            <div>{prom_1}</div>
          </div>

          {/* image   */}
          {/* <div className=" mx-2 items-end w-auto md:mr-10 md:block text-white md:max-w-1/4"> */}
          <div className='col-span-3 md:col-span-2 items-center text-center'>
            <div className='hidden md:inline-flex space-x-1 mx-auto text-white w-auto'>
              <FontAwesomeIcon icon={faUserCircle} className=' cursor-pointer text-white text-end w-6 h-6 pr-3' />
              <Link to={"/mantenance"} className=' cursor-pointer hidden md:flex items-end text-start lg:items-end lg:text-end font-thin text-[12px] md:text-[16px]'>Log&nbsp;In</Link>
              {/* <a href='#' className=' cursor-pointer hidden md:flex items-end text-start lg:items-end lg:text-end font-thin text-[12px] md:text-[16px]'>Log&nbsp;In</a> */}
            </div>
            <div className=' md:hidden inline-flex space-x-1 mx-auto text-black w-auto items-center text-center'>
              <HumbergerMenu onClose={onCLose} setOnCLose={setOnCLose} />
            </div>
          </div>
        </div>

      </section>



      {/* <section id="cta" className="bg-veryBrightRed h-30 md:h-24 md:place-items-end flex flex-col justify-between px-0 mx-auto md:py-4 md:flex-row md:space-y-0">
          <div className='grid auto-rows-fr w-full lg:grid-cols-2'>
            
              <div className="container flex flex-col justify-end items-center px-0 mx-auto md:py-4 md:flex-row md:space-y-0" >
                  <h2 className="text-sm font-bold text-center text-white md:text-sm md:max-w-xl md:text-center" >
                    <a href='#' className=' underline'>Join the Megenagna EQUB club</a> & get  discount off your next visit
                  </h2>
              </div>
              <div className='text-white pt-6 font-thin flex content-center items-center px-4 py-4 md:pr-8 md:justify-end'>
                <FontAwesomeIcon icon={faUserCircle} className=' content-center w-8 h-8 pr-3'/>
              <span className=' content-center text-white md:text-xl font-thin'>
                <a href='#'>Log In</a></span>
              </div>
            </div>
      </section> */}
    </>

  )
}

export default Promotion