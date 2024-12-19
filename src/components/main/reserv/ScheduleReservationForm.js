import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useAddNewReservationMutation } from "./reservationApiSlice"
import { useNavigate } from "react-router-dom"
import ConfirmationPage from "../../confirmation/ConfirmationPage";


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validatePhone(phone) {
    const phonePattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = phone.replace(/\D/g, "");
    return phonePattern.test(digits)
}


const ScheduleReservationForm = () => {

    const [addNewReserve, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewReservationMutation()

    const location = useLocation()
    const navigate = useNavigate()

    const [reserveDate, setreserveDate] = useState(location.state.reserveDate)
    const [reserveTime, setreserveTime] = useState(location.state.reserveTime)
    const [reservationSlot, setReservationSlot] = useState(location.state.reservationSlot)
    const [partySize, setpartySize] = useState(location.state.partySize)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)
    // useEffect(() => {
    //     console.log(location.state.reservationSlot)
    // }, [])

    useEffect(() => {
        if (isSuccess) {
            // setFirstName('')
            // setLastName('')
            // setPhone('')
            // setEmail('')
            // setreserveDate('')
            // setreserveTime('')
            // setReservationSlot('')
            // setpartySize('')
            // setDescription('')
            // navigate('/')
        }

    }, [isSuccess, navigate])

    const canSave = [firstName, lastName, validateEmail(email), validatePhone(phone)].every(Boolean) && !isLoading


    const onSaveReservationClicked = async (e) => {
        e.preventDefault()

        if (canSave) {
            await addNewReserve({ firstName, lastName, email, phone, reserveDate, reserveTime, partySize, description, completed }).then(
                console.log("done")
            )
        }

    }

    const input__incomplete = "w-full bg-transparent placeholder:text-red-900 border border-red-900 transition duration-300 ease focus:outline-none focus:border-red-700 hover:border-red-700 shadow-sm focus:shadow-md"
    const input__complete = "w-full bg-transparent placeholder:text-green-900 border-green-900 duration-300 ease focus:outline-none focus:border-green-700 hover:border-green-700 shadow-sm focus:shadow-md"

    const validFirstNameClass = !firstName ? input__incomplete : input__complete
    const validLastNameClass = !lastName ? input__incomplete : input__complete
    const validEmailClass = !validateEmail(email) ? input__incomplete : input__complete
    const validPhoneClass = !validatePhone(phone) ? input__incomplete : input__complete
    const validDescription = !description ? input__incomplete : input__complete

    const content_mod = (
        <div className="container mx-auto justify-between my-6 md:my-10 h-auto">
            <div className=" w-full block md:grid md:grid-cols-2">
                <div className=" w-full">
                    <h1 className="font-osuwald font-semibold text-left text-[46px]">Complete your reservation</h1>
                    <p className=" my-3 font-Avenir text-[16px]">Please fill in your details:</p>

                    <div className="flex flex-wrap -mx-3 my-6 mb-6">
                        <div className="w-full my-3 md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">First name *</label>

                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`${validFirstNameClass}bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            />
                        </div>
                        <div className="w-full my-3 md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="countries" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">Last name *</label>
                            <div class="relative max-w-sm">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className={`${validLastNameClass}bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                            </div>
                        </div>
                        <div className=" w-full my-3 md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="countries"
                                className={`block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white`}>
                                Phone number *</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={` ${validPhoneClass} bg-gray-50 border border-gray-600 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            />
                        </div>
                        <div className="w-full my-3 md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="email" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">Email address *</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`${validEmailClass} bg-gray-50 border border-gray-600 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            />
                        </div>

                        <div class="w-full px-3 mb-6 md:mb-0">

                            <label htmlFor="description" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">
                                Description
                            </label>
                            <textarea
                                class={`${validDescription} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="description"
                                name="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <p class="text-gray-600 text-xs italic">
                                Please describe the party type...
                            </p>
                        </div>

                    </div>
                    <div className='mx-4  md:mx-auto justify-center items-center text-center my-10'>
                        <button
                            className=' w-full mx-auto justify-center items-center text-center bg-mainColor hover:bg-white hover:border-2 hover:border-gray-700 hover:border-1 hover:text-gray-800 text-white p-2 md:p-3 cursor-pointer'
                            onClick={(e) => onSaveReservationClicked(e)}
                        >
                            Complete Reservation
                        </button>
                    </div>

                </div>
                <div className="w-full mt-5 mx-10 ">
                    <p className=" ">Out of time. You can still try to complete your <br /> reservation, but availability may have changed.</p>
                    <h1 className=" my-3 font-semibold">Reservation details:</h1>
                    <p>{reserveDate}, &nbsp; {reserveTime}</p>
                    <p>{partySize} &nbsp; partySizes</p>
                    <p>Wells Branch Parkway</p>
                    <hr class="h-[2px] w-[80%] my-8 bg-gray-500 border-1 dark:bg-gray-700" />

                    <h1 className=" my-6 underline">
                        <Link to="/BookaTable" className=" underline">Change Selection</Link>
                    </h1>

                    {
                        isSuccess ? <ConfirmationPage title={"Table Reservation"} firstName={firstName} lastName={lastName} reserveDate={reserveDate} reserveTime={reserveTime} partySize={partySize} reservationSlot={reservationSlot} />
                            : isError ? <div className="py-4 rounde-lg mx-auto max-w-lg flex-row items-center overflow-hidden rounded-lg bg-red-100 px-6 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 inline-block size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                                <p>Reservation Error. Please contact us by 512-760-9342</p>
                            </div> : ''
                    }

                </div>

            </div>
        </div>
    )
    return content_mod
}

export default ScheduleReservationForm