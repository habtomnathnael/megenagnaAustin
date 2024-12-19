import logowhite from '../../img/logowhite.svg'
import iconyoutube from '../../img/iconyoutube.svg'
import iconfacebook from '../../img/iconfacebook.svg'
import icontwitter from '../../img/icontwitter.svg'
import iconpinterest from '../../img/iconpinterest.svg'
import iconinstagram from '../../img/iconinstagram.svg'
import { footerLinks } from '../../constants/index'

import styles from '../../styles'


const FooterM = () => {
    return (
        <>

            <section className="isolate bg-white mx-auto h-[calc(100vh-10px)] flex-col justify-center items-center">
                {/* <!-- top Footer --> */}
                <div className=' h-auto md:h-[90%] bg-mainColor mx-auto flex justify-between items-center'>

                    {/* ____________________________________2nd */}



                    <section className="container mx-auto flex justify-between">

                        <div className='block lg:grid gap-4 lg:gap-6 lg:grid-cols-2'>
                            <div className="relative mx-auto flex flex-col justify-center items-center ">

                                <h3 className="font-Oswald font-normal text-[16px] md:mx-4 text-white leading-8 md:text-[18px] lg:text-[20px] mx-2 mt-20 md:mt-0 text-center">
                                    Join the Megenagna's Notification Group & Get discount to your Next Visit
                                </h3>
                                <div
                                    className="input-form max-w-2xl max-w-3/4 md:w-full mx-auto flex flex-col md:flex-row mt-20 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5">
                                    <div className="w-full block md:mx-4 lg:flex justify-between">
                                        <input type="text" placeholder="Enter your email here*"
                                            className="py-2.5 pl-2 w-full text-white placeholder:text-sm bg-mainColor border border-white focus:outline-none focus:ring-1 focus:ring-white ring-offset-0 ring-offset-white transition duration-200" />

                                        {/* ______ */}

                                        <button
                                            className="bg-white my-4 lg:my-0 w-full lg:w-1/3 hover:shadow-md focus:ring-2 focus:ring-white ring-offset-0 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200 text-zinc-800 text-sm py-2.5 shadow-md group font-clash font-[500]">
                                            Join&nbsp;
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                                className="inline-block " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">
                                                </path>
                                            </svg>
                                        </button>


                                        {/* ____________________________________2nd */}

                                    </div>

                                </div>
                            </div>
                            <div className='relative mx-8 mb-10 text-center flex flex-col justify-center items-center '>
                                <div className=" block md:flex-[1.5] w-full md:flex-row justify-between md:inline-flex md:items-center md:mt-0 mt-10 ">
                                    {footerLinks.map((footerlink, index) => (
                                        <div key={index} className={`flex flex-col ss:my-0 w-full md:min-w-[200px]`}>
                                            <h4 className="font-Oswald font-black text-white text-[20px] text-center md:text-left">
                                                {footerlink.title}
                                            </h4>
                                            <ul className="list-none mt-4 text-center md:text-left">
                                                {footerlink.links.map((link, index) => (
                                                    <li
                                                        key={index}
                                                        className={`font-Avenir text-[16px] md:text-[16px]  text-white hover:text-blue-400 cursor-pointer ${index !== footerlink.links.length - 1 ? "md:mb-5" : "mb-10 md:mb-0"
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>


                    </section>








                    {/* ____________________________________2nd */}

                </div>
                <div className='w-full h-[10%] mx-auto flex justify-center items-center'>
                    <p className='inline-flex items-center'>© {new Date().getFullYear()} by megenagna Mart & Café.</p>
                </div>
                {/* ____ bottom footer___ */}
            </section>

            {/* ____________________________________2nd */}


        </>
    )
}

export default FooterM