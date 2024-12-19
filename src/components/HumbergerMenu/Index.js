import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { navLinks } from '../../constants/index'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'



const Index = ({ onClose, setOnCLose }) => {

  const [activeMenu, setActiveMenu] = useState('Home')

  return (
    <div className=''>
      {
        onClose ?
          <div onClick={() => setOnCLose(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-20 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          :

          <div className='md:hidden fixed inset-0 p-4 pt-[15vh] overflow-y-auto bg-mainColor z-20 '>

            {/* <div className='container fixed left-1O bottom-10 inline-flex space-x-1 mx-auto text-white w-auto '> */}
            <div className='flex justify-center space-x-4 container fixed bottom-20 right-10'>

              <Link onClick={() => setOnCLose(true)} to="login" className=' cursor-pointer flex items-end text-start lg:items-end lg:text-end font-thin text-[16px] text-white'>Log&nbsp;In</Link>
              <Link onClick={() => setOnCLose(true)} to="signup" className=' cursor-pointer flex items-end text-start lg:items-end lg:text-end font-thin text-[16px] text-white'>Sign&nbsp;Up</Link>

            </div>

            <button
              onClick={() => setOnCLose(true)}
              className='fixed right-1O top-10 right-10'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>

            {/* ---flex container-- */}


            <div className=" container grid grid-cols-12 gap-4 font-Avenir items-center text-center space-x-6 justify-between flex-row z-20 transition ease-out duration-500">

              <div className=' col-span-1'></div>


              <div className=' col-span-11 items-start text-left'>

                {
                  navLinks.map((navlink, index) => (
                    <p key={index} onClick={() => { setActiveMenu(navlink.title); setOnCLose(true) }} className='gap-x-4 cursor-pointer p-2 mt-2 text-white'>
                      <Link to={`/${navlink.title.replace(/\s/g, '').replace(/\&/g, '')}`} className={`${activeMenu === navlink.title ? 'text-white' : ''}`}>{navlink.title}</Link>
                    </p>
                  ))
                }
              </div>
            </div>
          </div>

      }

    </div>
  )
}

export default Index