import { useState } from "react"
import { Link } from "react-router-dom"

const Index = () => {
  const [indexTime, setIndexTime] = useState(0)
  const [partySize, setpartySize] = useState(1)
  const [reserveDate, setreserveDate] = useState(`${String((new Date()).getMonth() + 1).padStart(2, '0')}/${String((new Date()).getDate()).padStart(2, '0')}/${(new Date()).getFullYear()}`)
  const [reserveTime, setreserveTime] = useState(`${(new Date().getHours()).toString().padStart(2, '0')}:${(new Date().getMinutes()).toString().padStart(2, '0')}`)
  const [reservationSlot, setReservationSlot] = useState("")

  let val = [], index = 0
  for (let i = 0, m = 9; i <= 12; i++, m++) {
    for (let k = 0; k <= 3; k++, index++) {
      val[index] = `${m > 12 ? m : m}:${k * 15 == 0 ? '00' : k * 15}`
    }
  }

  const input__incomplete = "border border-red-900 transition duration-300 ease focus:outline-none focus:border-red-700 hover:border-red-700 shadow-sm focus:shadow-md"
  const input__complete = "border-green-900 duration-300 ease focus:outline-none focus:border-green-700 hover:border-green-700"


  const validReserveDate = !reserveDate ? input__incomplete : input__complete
  const validReserveTime = !reserveTime ? input__incomplete : input__complete
  const validPartySize = !partySize ? input__incomplete : input__complete





  return (
    <>
      <div className='relative bg-mainColor md:bg-transparent h-auto lg:h-[850px] lg:before:bg-hero-Veggie lg:before:bg-cover before:absolute lg:before:inset-0 lg:before:opacity-70 lg:before:bg-center lg:before:bg-fixed lg:before:bg-no-repeat'>
        <div className='lg:isolate h-[40px] hidden lg:block' />
        <div className='lg:isolate w-full lg:w-[80%] h-auto bg-white mx-auto md:flex-col justify-between lg:grid lg:grid-cols-2'>
          {/* <div className=' circlePostion w-[590px] h-[400px] bg-pink-500 rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]'></div> */}
          <div className=' lg:mt-8 w-auto mx-auto justify-between'>

            <h1 className='w-full mx-auto text-[46px] font-Oswald font-black text-red-800 text-center'>Reserve a Table</h1>
            <p className=' max-w-[350px] mx-auto justify-between font-Avenir font-black text-mainColor text-center my-4'>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
            {/* _______________________table res */}

            {/* <!-- component --> */}
            <div className="flex items-center justify-center p-12">
              {/* <!-- Author: FormBold Team -->
                  <!-- Learn More: https://formbold.com --> */}
              <div className="mx-auto w-full">

                <div className="-mx-3 flex flex-wrap">
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="date"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          value={reserveDate}
                          onChange={(e) => setreserveDate(e.target.value)}
                          className={`${validReserveDate} w-full rounded-xs border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}

                        // className={`${validReserveDate} bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}


                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="time"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          value={reserveTime}
                          onChange={(e) => setreserveTime(e.target.value)}
                          className={`${validReserveTime} w-full rounded-xs border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}

                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="fName"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="lName"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="Last Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div> */}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Choose an available time slot:
                  </label>
                  {/* <input
                      type="number"
                      name="guest"
                      id="guest"
                      placeholder="5"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    /> */}

                  <select className="w-full appearance-none rounded-xs border border-gray-700 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">

                    {val.map((v, i) => (i >= indexTime && i < (15 + indexTime) &&
                      <option key={i}
                        onChange={(e) => setReservationSlot(e.target.innerText)}
                        className="w-full flex justify-between appearance-none rounded-xs border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      >
                        {/* <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span> */}
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                          {(parseInt(v.split(":")[0]) > 12 ? (parseInt(v.split(":")[0]) - 12).toString() + ":" + (v.split(":")[1]) + " " + "PM" : v + "AM")}
                        </span>

                      </option>
                    ))}

                  </select>



                </div>

                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    How many guest are you bringing?
                  </label>
                  <input
                    type="number"
                    name="partySize"
                    id="partySize"
                    placeholder="Enter party size"
                    min="1"
                    max={1000}
                    value={partySize}
                    onChange={(e) => setpartySize(e.target.value)}
                    className="w-full appearance-none rounded-xs border border-gray-700 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>


                {/* <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Are you coming to the event?
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-base font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-base font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div> */}

                <div className='py-1'>
                  <button
                    className=" w-full hover:shadow-form bg-mainColor py-3 text-center text-base font-Avenir text-[16px] text-white outline-none"
                  >
                    <Link to="/BookaTable/new" state={{ reserveDate, reserveTime, partySize, reservationSlot }} >Reserve A Table</Link>

                  </button>
                </div>

              </div>
            </div>

            {/* _______________________table end res */}

          </div>
          <div className=' hidden pt-10 bg-mainColor w-full mx-auto lg:flex flex-col justify-center items-center'>

            <div className="w-full mx-auto items-center text-center"><h4 className=' text-[20px] md:text-[26px] font-Oswald font-black text-white inline-block items-center text-center'>It's Fast and Easy</h4>
            </div>
            <div className="w-full mx-auto items-center text-center pt-15 md:pt-20">
              <h1 className='w-full px-4 mx-auto text-[46px] font-Oswald font-black text-white text-center'>Order Online</h1>

            </div>
            <div className="max-w-[300px] px-6 mt-8 mx-auto justify-between">
              <p className='font-Avenir font-black text-white leading-8 text-center md:text-left '>
                Shop from home and we are very happy to deliver your order quickly to wherever you are at.
              </p>
            </div>
            {/* <div className='max-w-[300px] px-6 mx-auto justify-between font-Avenir font-black text-white leading-8 text-left mt-8'> */}
            {/* < button className="bg-white w-full"> Order Now</button>  */}
            {/* </div> */}



            <div className=' py-8 w-auto mx-auto flex justify-between items-center lg:isolate'>
              <button
                className="w-[300px] hover:shadow-form bg-white py-3 px-8 text-center text-base font-Avenir text-[16px] text-mainColor outline-none"
              >

                Order Now
              </button>
            </div>

            {/* <div className='max-w-[300px] px-6 mx-auto justify-between font-Avenir font-black text-white leading-8 text-left mt-8'>
                          <button className="        
                              bg-white px-6 mx-auto justify-between w-[300px] my-20  py-2  lg:my-40 text-[16px] border text-mainColor font-Avenir hover:bg-mainColor hover:text-white hover:border-white border-white hover:border-transparen
                              ">
                              <p className=' w-full mx-auto'>Order Now</p> 
                          </button>
                      </div> */}
          </div>
        </div>
        <div className=' lg:isolate h-[4px] hidden' />
      </div>

    </>
  )
}

export default Index