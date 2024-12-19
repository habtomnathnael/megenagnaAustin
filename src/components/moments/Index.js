import picOne from '../../img/pic1.jpg'
import picTwo from '../../img/pic2.jpg'
import picThree from '../../img/KITFOO.png'
import picFour from '../../img/ck.jpg'
import picFive from '../../img/foul_Br.jpg'
import picSix from '../../img/goredGOred.jpg'
import { moments } from '../../constants'

const Index = () => {
    return (
        <>
            {/* <!-- Flex Container --> */}
            <div
                className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
            >
                <div className="w-full text-center">
                    <h1 className="py-8 font-osuwald font-black text-[25px] md:text-[40px]">Megenagna Mart & Cafe Moments</h1>
                    <p className="px-6 md:px-16 font-Avenir font-black text-gray-800 text-[20px]">We welcome you to a fresh, tasty, delicious and traditional inspired Ethiopian dishes in our Mart and Café. From breakfast to dinner, we are waiting to serve you with excellence</p>
                </div>
            </div>

            {/* ____________________________________2nd */}
            <div className=" lg:mb-40 container mx-auto justify-between block  md:grid md:grid-cols-2 md:gap-20 lg:grid lg:grid-cols-3 lg:gap-10">
                {
                    moments.map((moment) => (


                        <div className="relative my-4 w-[95%] md:max-w-7xl mx-auto" key={moment.title}>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>

                            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

                                <div className="space-y-2 relative">

                                    <img
                                        className="w-full h-[200px] object-cover object-center"
                                        src={moment.links}
                                        alt="Woman workcationing on the beach"
                                    />

                                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                    </svg>

                                    <p className="text-slate-800">
                                        {moment.description}
                                    </p>

                                    <a href="#" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Read Details →</a>
                                    <div className=' bg-secondary-100 text-secondary-200 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                                        <span>{moment.timeToCooke}</span>
                                    </div>
                                </div>

                            </div>
                        </div>



                    ))
                }

            </div>











        </>
    )
}

export default Index