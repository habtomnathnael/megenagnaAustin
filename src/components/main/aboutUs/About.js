import about_us from '../../../img/about_us.png'
import svgbg from '../../../img/svgbg.svg'
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice'

const About = () => {
    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery('notesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        // content = <p className="errmsg">{error?.data?.message}</p>
        content = <div style={{ color: "red" }}>An error has occurred!</div>
    }


    if (isSuccess) {
        const { ids } = notes

        const dataResponse = ids.map((val) => {
            return notes.entities[val]
        })

        var myData = Object.keys(dataResponse).map(key => {
            return dataResponse[key];
        })

        content = (
            <>
                <div className=' container grid grid-cols-1 lg:grid-cols-2 mx-auto justify-between items-center lg:my-20 lg:gap-40'>
                    <div className=' h-auto lg:h-screen space-y-4 mx-4 lg:mx-auto'>
                        <h5 className=' text-[16px] lg:text-[18px] font-Playfair font-bold text-mainColor my-4 text-center lg:text-left'>Our Story</h5>
                        <h1 className=' text-[30px] lg:text-[46px] font-Oswald font-black my-8 w-full lg:text-justify text-center'>More than Great Food</h1>
                        <p className=' font-Avenir text-[14px] lg:text-[16px] font-black text-gray-700 my-4 text-justify lg:tracking-wider leading-60'>Megenagna Mart and Café is an inviting Mart and Cafe designed to make our customers feel comfortable, happy about our food and services. we open 7 days a week from 9:00 a.m to 9:00 p.m. we also offer free wifi to our customers. Join our community and enjoy our native Ethiopian culture, as well as relax with old friends and make new ones</p>
                        <p className='font-Avenir text-[14px] lg:text-[16px] font-black text-gray-700 my-4 text-justify tracking-wider'>We welcome you to a fresh, testy delicious and traditional inspired Ethiopian dishes in our Mart and Cafe. From breakfast to dinner, we are waiting to serve you with excellence</p>
                    </div>
                    <div className='w-auto h-screen'>
                        <img
                            className="relative w-full px-4 lg:px-0 my-8 h-5/6 lg:h-full lg:my-0 object-cover object-center"
                            src={about_us} />
                    </div>
                </div>
                <div className='container mx-auto justify-between items-center my-2 lg:my-10'>
                    {/* <div className=' relative w-full flex mx-auto justify-between'>
                        <img src={svgbg} className='w-[200px] mix-blend-overlay filter' />
                    </div> */}
                    {/* <span className='w-full'>
                    <p className='text-balance mx-auto justify-between text-center text-[18px] text-mainColor font-Oswald'>Heritage</p>
                    <p className='text-balance mx-auto justify-between text-center text-[46px] text-black font-Oswald'>Serving Greatness Since 2023</p>

                    <p className='text-balance mt-20 mx-auto justify-between text-center text-[18px] text-mainColor font-Oswald'>Join the Team</p>
                    <p className='text-balance  mx-auto justify-between text-center text-[40px]  font-Oswald'>We Are Hiring</p>
                </span> */}

                    <div className=' mx-auto justify-between items-center text-center font-Oswald text-mainColor text-[18px] mt-0 lg:mt-40'><h1>Heritage</h1></div>
                    <div className=' mx-auto justify-between items-center text-center font-Oswald text-[40px] font-semibold my-4 '><h1>Serving Greatness Since 2023</h1></div>

                    <div className=' mx-auto justify-between items-center text-center font-Playfair text-mainColor text-[18px] mt-28 '><h1>Join the Team</h1></div>
                    <div className=' mx-auto justify-between items-center text-center font-Oswald text-[40px] font-semibold my-4'><h1>We Are Hiring</h1></div>

                    {/* _____________________________hiring form */}

                    <div className=" my-10 gap-4 mx-auto md:w-[calc(100%-10rem)] lg:w-[calc(100%-20rem)] justify-between grid grid-cols-1 lg:grid-cols-2">
                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">First Name</label>

                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="bg-gray-50 border border-red-800 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">Last Name</label>

                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="bg-gray-50 border border-red-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">Email</label>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-red-800 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">Phone</label>

                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="bg-gray-50 border border-red-800 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">Position you apply for</label>
                            <select

                                className="bg-gray-50 border border-red-800 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {["", "Excutive Chef", "Food and Beverage Manager", "Kitchen Manager", "Restaurant Manager", "Waiter"].map((val, index) => (
                                    <option key={index}>{val}</option>
                                ))}
                            </select>
                        </div>

                        <div className=" w-full px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white"> Available start date*</label>
                            <div class="relative max-w-sm">

                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className=" w-full p-2.5 bg-gray-50 border border-red-700 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className=" w-full lg:col-span-2 px-4 mx-auto">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-red-600 dark:text-white">Link to your resume</label>

                            <input
                                type="text"
                                name="resume"
                                id="resume"
                                className="bg-gray-50 border border-red-700 text-red-800 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                    </div>


                    <div className='mx-4  md:mx-auto justify-center items-center text-center my-10'>
                        <button className=' w-full md:w-[200px] mx-auto justify-center items-center text-center bg-mainColor text-white p-2 md:p-3 cursor-pointer'>
                            Apply Now
                        </button>
                    </div>


                    {/* _____________________________hiring */}

                </div>
            </>
        )
    }
    return content
}

export default About