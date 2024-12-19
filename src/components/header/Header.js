import logo from '../../img/logo.svg'
const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      {/* ---flex container-- */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo"/>
        </div>
        {/* // ---menu items---> */}
        <div className="hidden space-x-6 mr-6 md:flex">
          <a href="#" className=' hover:text-darkGrayishBlue'>Pricing</a>
          <a href="#" className=' hover:text-darkGrayishBlue'>Product</a>
          <a href="#" className=' hover:text-darkGrayishBlue'>About Us</a>
          <a href="#" className=' hover:text-darkGrayishBlue'>Careers</a>
          <a href="#" className=' hover:text-darkGrayishBlue'>Community</a>
        </div>
        <div className=' px-6 p-3'>

        </div>
        {/* <a href='#' className='hidden p-3 px-6 text-balck  baseline hover:bg-darkGrayishBlue md:block'
        >Login
        </a> */}
      </div>
    </nav>
  )
}

export default Header