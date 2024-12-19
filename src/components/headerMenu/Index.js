import { useState, useContext, useEffect } from 'react'
import { navLinks } from '../../constants/index'
import { Link } from 'react-router-dom'

import { CartContext } from '../../features/cartContext/CartContext';


const Index = () => {


  const cart = useContext(CartContext)

  const [activeMenu, setActiveMenu] = useState('Home')
  const [windowsLocation, setWindowsLocation] = useState(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)


  // useEffect(() => {

  //   window.location.href === "http://localhost:3001/OnlineOrdering/cart" ? setWindowsLocation(true) : setWindowsLocation(false)

  // }, [windowsLocation]);


  return (
    <nav className="relative container mx-auto pt-6 pb-0 scroll-smooth">

      <button
        className=" mt-10 fixed cursor-pointer top-[80px] right-[80px] text-gray-800 z-50 hover:text-gray-600 size-8"

      // onClick={scrollUp}
      >
        {/* {windowsLocation && */}
        <Link to={"/OnlineOrdering/cart"}>
          <div className='h-[50px] w-[40px] content-center rounded-lg bg-white/20 shadow-lg ring-1 ring-black/0 backdrop-blur-md'>
            <div className=' mx-auto text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <div className='absolute -right-2 -top-2 text-slate-950 w-6 h-6 bg-red-200 rounded-full'>{productsCount}</div>
            </div>
          </div>
        </Link>
        {/* } */}
      </button>



      {/* ---flex container-- */}
      <div className=" container font-Avenir hidden items-center space-x-6 justify-between md:flex md:text-[18px]">

        {
          navLinks.map((navlink) => (
            <p onClick={() => { setActiveMenu(navlink.title) }}>


              <Link to={`/${navlink.title.replace(/\s/g, '').replace(/\&/g, '')}`} className={`hover:text-red-400 text-black ${activeMenu === navlink.title ? 'text-mainColor' : ''}`}>{navlink.title}</Link>

            </p>
            // <a key={navlink.id} href="#" className={`hover:text-darkGrayishBlue text-black ${activeMenu === navlink.title ? 'text-mainColor' : ''}`} onClick={() => { setActiveMenu(navlink.title) }}>{navlink.title}</a>
          ))
        }
      </div>
    </nav>
  )
}

export default Index