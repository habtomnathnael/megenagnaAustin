import { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { useAddNewOrderMutation } from "./notesApiSlice"
import { CartContext } from '../../../features/cartContext/CartContext'

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validatePhone(phone) {
    const phonePattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = phone.replace(/\D/g, "");
    return phonePattern.test(digits)
}



const CheckOut = () => {

    const [discount, setDiscount] = useState(0)

    const cart = useContext(CartContext)

    console.log(cart.items)

    const navigate = useNavigate()

    const [orderInfo, setOrderInfo] = useState(
        {
            userInfo:
            {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""

            },
            orders: cart.items,
            description: "",
            status: "",
            deliveryInfo:
            {
                deliveryType: "",
                streetAdress: "",
                streetAdress_1: "",
                city: "",
                state: "",
                zipCode: "",
                country: "USA"
            },
            tax: 8,
            reciveOrderStatus: false
        }
    );


    const handleFirstNameChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, userInfo: {
                ...prevInfo.userInfo, firstName: e.target.value
            }
        }));
    };

    const handleLastNameChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, userInfo: {
                ...prevInfo.userInfo, lastName: e.target.value
            }
        }));
    };

    const handlePhoneChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, userInfo: {
                ...prevInfo.userInfo, phone: e.target.value
            }
        }));
    };
    const handleEmailChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, userInfo: {
                ...prevInfo.userInfo, email: e.target.value
            }
        }));
    };

    const handleDeliveryTypeChange = (val) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, deliveryType: val
            }
        }));
    };


    const handleDeliveryStreetChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, streetAdress: e.target.value
            }
        }));
    };
    const handleDeliveryStreet_1_Change = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, streetAdress_1: e.target.value
            }
        }));
    };

    const handleDeliveryCityChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, city: e.target.value
            }
        }));
    };


    const handleDeliveryStateChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, state: e.target.value
            }
        }));
    };


    const handleDeliveryZipCodeChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, zipCode: e.target.value
            }
        }));
    };

    const handleDeliveryCountryChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, deliveryInfo: {
                ...prevInfo.deliveryInfo, country: e.target.value
            }
        }));
    };

    const handlereciveOrderStatusChange = (e) => {
        setOrderInfo((prevInfo) => ({
            ...prevInfo, reciveOrderStatus: !prevInfo.reciveOrderStatus
        }));
    };

    const validPhoneClass = !validatePhone(orderInfo.userInfo.phone) ? "form__input--incomplete" : ''
    const validEmailClass = !validateEmail(orderInfo.userInfo.email) ? "border border-indigo-red-400 outline outline-1 outline-offset-1 " : ''

    console.log("=====")
    console.log(orderInfo)


    function deliveryDueDates(val) {

        const today = new Date();

        // Add days to today's date
        today.setDate(today.getDate() + val);

        // Format the date as a string (optional)
        const formattedDate = today.toLocaleDateString(); // e.g., "12/23/2024"

        // console.log(formattedDate);
        return formattedDate

    }



    const content_mod = (
        // <div class="bg-gray-200 antialiased">
        //     <div class="w-full mx-auto pt-1">
        <div class=" text-left bg-white w-full max-w-xl">
            <form class="bg-white w-full rounded px-1 pt-6 ">
                <div class="flex flex-wrap -mx-3 mb-6 w-full">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            type="text"
                            placeholder="Jane"
                            value={orderInfo.userInfo.firstName}
                            onChange={(e) => handleFirstNameChange(e)}
                        />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="lastName">
                            Last Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="lastName"
                            type="text" placeholder="Doe"
                            value={orderInfo.userInfo.lastName}
                            onChange={(e) => handleLastNameChange(e)}
                        />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-800 text-sm font-bold mb-2"
                            for="streetAdress"
                        >
                            Address Line 1
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-address-1" type="text"
                            placeholder="1234 Main Street"
                            name="streetAdress"
                            autoComplete="off"
                            value={orderInfo.deliveryInfo.streetAdress}
                            onChange={(e) => handleDeliveryStreetChange(e)}
                        />
                        <p class="text-xs italic">Please enter your street address.</p>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-800 text-sm font-bold mb-2" for="grid-address-2">
                            Address Line 2
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="streetAdress_1"
                            type="text"
                            placeholder="Suite ABC"
                            name="streetAdress_1"
                            autoComplete="off"
                            value={orderInfo.deliveryInfo.streetAdress_1}
                            onChange={(e) => handleDeliveryStreet_1_Change(e)}
                        />
                    </div>
                </div>


                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <div class="relative">
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="city"
                                type="text"
                                name="city"
                                value={orderInfo.deliveryInfo.city}
                                onChange={(e) => handleDeliveryCityChange(e)}
                                placeholder="Los Angeles" />
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="state"
                                name="city"
                                value={orderInfo.deliveryInfo.state}
                                onChange={(e) => handleDeliveryStateChange(e)}
                            >
                                <option>California</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            name="zipCode"
                            value={orderInfo.deliveryInfo.zipCode}
                            onChange={(e) => handleDeliveryZipCodeChange(e)}
                            placeholder="90020"
                        />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-800 text-sm font-bold mb-2" for="grid-phone">
                            Phone
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="phone"
                            type="tel"
                            placeholder="+1-123-456-7890"
                            name="phone"
                            value={orderInfo.userInfo.phone}
                            onChange={(e) => handlePhoneChange(e)}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-800 text-sm font-bold mb-2" for="grid-phone">
                            Email
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="text"
                            placeholder="megenagna@gmail.com"
                            name="email"
                            value={orderInfo.userInfo.email}
                            onChange={(e) => handleEmailChange(e)}
                        />
                    </div>
                </div>

                <div className=" flex gap-6">
                    <div class="mb-6">
                        <label class="flex items-center text-gray-800 text-sm font-bold">
                            <input class="mr-2 leading-tight"
                                type="checkbox"
                                name="reciveOrderStatus"
                                value={orderInfo.userInfo.reciveOrderStatus}
                                onChange={(e) => handlereciveOrderStatusChange(e)}


                            />
                            <span class="text-sm">
                                Receive order status updates via text message
                            </span>
                        </label>
                    </div>

                    <div className=" w-full">
                        <button
                            onClick={() => handleSave}
                            type="button"
                            class="text-black gap-2 w-full bg-[#a2a5a6] hover:bg-[#050708]/98 focus:ring-4 focus:outline-none focus:ring-[#050708]/10 font-medium rounded-xs text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">

                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            save your address
                            {/* <Link to="/BookaTable" className=" underline">Change Selection</Link> */}

                        </button>
                    </div>
                </div>
            </form>
        </div>
        //</div>
        //</div>
    )

    const handleSave = () => {
        cart.addOneToCart(orderInfo)
    }

    const content = (
        <div>
            {/* <p className={errClass}>{error?.data?.message}</p> */}

            <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10">
                <div className="col-span-8">
                    <div className="flex flex-wrap -mx-3 my-6 mb-3">

                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="firstName">
                                First Name
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.userInfo.firstName}
                                onChange={(e) => handleFirstNameChange(e)}
                            />

                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="lastName">
                                Last Name
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.userInfo.lastName}
                                onChange={(e) => handleLastNameChange(e)}
                            />

                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="Phone">
                                Phone #
                            </label>
                            <input
                                className={`${validPhoneClass} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="phone"
                                name="phone"
                                type="text"
                                autoComplete="off"

                                value={orderInfo.userInfo.phone}
                                onChange={(e) => handlePhoneChange(e)}

                            />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="email">
                                Email
                            </label>
                            <input className={`${validEmailClass} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.userInfo.email}
                                onChange={(e) => handleEmailChange(e)}
                            />
                        </div>
                        <div className=" w-full">Delivery Information</div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="deliveryType">
                                Delivery Type
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="deliveryType"
                                name="deliveryType"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.deliveryInfo.deliveryType}
                                onChange={(e) => handleDeliveryTypeChange(e)}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="streetAdress">
                                Delivery Street Address
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="streetAdress"
                                name="streetAdress"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.deliveryInfo.streetAdress}
                                onChange={(e) => handleDeliveryStreetChange(e)}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="deliveryType">
                                Zip-Code
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.deliveryInfo.zipCode}
                                onChange={(e) => handleDeliveryZipCodeChange(e)}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="deliveryType">
                                State
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="deliveryType"
                                name="deliveryType"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.deliveryInfo.state}
                                onChange={(e) => handleDeliveryStateChange(e)}
                            />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="deliveryType">
                                Country
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="deliveryType"
                                name="deliveryType"
                                type="text"
                                autoComplete="off"
                                value={orderInfo.deliveryInfo.country}
                                onChange={(e) => handleDeliveryCountryChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className=" col-span-4 bg-green-300"></div>

            </div>




        </div>
    )


    const content_mod_final = (

        <div className=" block md:grid md:grid-cols-12 mx-4 my-10 ">

            <div className="col-span-5 ">
                <div className="my-4">Shipping Address</div>
                {content_mod}
            </div>
            <div className="block  col-span-3 ">
                <div className=" my-4">delivery options</div>
                <div class="flex items-center my-4">
                    <input
                        id="regular"
                        type="radio"
                        name="deliveryType"
                        value="regular"
                        onChange={() => handleDeliveryTypeChange("regular")}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="regular"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <p>Fast, Free Delivery</p>
                        <p>{
                            deliveryDueDates(7)
                        }</p>
                    </label>
                </div>
                <div class="flex items-center">
                    <input
                        id="twoDaysDelivery"
                        type="radio"
                        name="deliveryType"
                        value="twoDaysDelivery"
                        onChange={() => handleDeliveryTypeChange("twoDaysDelivery")}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label
                        for="twoDaysDelivery"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {/* <p>Wednesday, Dec 18 and Thursday, Dec 19</p> */}
                        <p>{
                            deliveryDueDates(3)
                        }</p>
                        <p>$6.99 - Delivery</p>
                    </label>
                </div>

                <div class="flex items-center my-4">
                    <input
                        id="expressDelivery"
                        type="radio"
                        name="deliveryType"
                        value="expressDelivery"
                        onChange={() => handleDeliveryTypeChange("expressDelivery")}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label
                        for="expressDelivery"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <p>{
                            deliveryDueDates(2)
                        }</p>
                        <p>$10.99 - Delivery</p>
                    </label>
                </div>
                <div class="flex items-center">
                    <input
                        id="freeDelivery"
                        type="radio"
                        name="deliveryType"
                        value="freeDelivery"
                        onChange={() => handleDeliveryTypeChange("freeDelivery")}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="freeDelivery"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <p>{
                            deliveryDueDates(10)
                        }</p>
                        <p>FREE Delivery</p>
                    </label>
                </div>

            </div>
            <div className=" col-span-4">
                <div>
                    <div>
                        <div class="mt-6 grow sm:mt-8 lg:mt-0 ">
                            <div class="space-y-4 rounded-lg border border-gray-100 bg-gray-50  p-6 dark:border-gray-700 dark:bg-gray-800">
                                <div class="space-y-2">
                                    <dl class="flex items-center justify-between gap-4">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                                            {/* $6,592.00 */}
                                            <p class="text-gray-700">$
                                                {
                                                    (cart.items.reduce((sum, product) => sum + product.quantity * parseFloat(product.product.fPrice), 0)).toFixed(2) > 0 ?
                                                        (cart.items.reduce((sum, product) => sum + product.quantity * parseFloat(product.product.fPrice), 0)).toFixed(2) : 0
                                                }</p>

                                        </dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                        <dd class="text-base font-medium text-green-500">-$0.00</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                                            <p class="mb-1 text-lg font-bold">
                                                $
                                                {
                                                    (cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) - parseFloat(discount)).toFixed(2) > 0 ?
                                                        parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) - parseFloat(discount)).toFixed(2) : 0
                                                }

                                            </p>
                                        </dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">
                                            {
                                                parseFloat(parseFloat((cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) + parseFloat(
                                                    orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                        : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                            : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                    : 0
                                                ) - parseFloat(discount)).toFixed(2) > 0 ?
                                                    parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0)
                                                        + parseFloat(
                                                            orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                                : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                                    : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                        : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                            : 0) - parseFloat(discount)).toFixed(2) : 0
                                                ) * parseFloat(orderInfo.tax) / (100)).toFixed(2)
                                            }

                                        </dd>
                                    </dl>
                                </div>

                                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd class="text-base font-bold text-gray-900 dark:text-white">                                        {/* 7,191.00 */}
                                        <p class="mb-1 text-lg font-bold">
                                            $

                                            {
                                                parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) - parseFloat(discount)).toFixed(2) > 0 ?
                                                    parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) - parseFloat(discount)


                                                        +
                                                        parseFloat(
                                                            orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                                : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                                    : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                        : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                            : 0)

                                                        +
                                                        parseFloat((cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0) + parseFloat(
                                                            orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                                : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                                    : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                        : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                            : 0
                                                        ) - parseFloat(discount)).toFixed(2) > 0 ?
                                                            parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0)
                                                                + parseFloat(
                                                                    orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                                        : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                                            : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                                : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                                    : 0) - parseFloat(discount)) : 0
                                                        ) * parseFloat(orderInfo.tax) / (100)



                                                    ).toFixed(2)

                                                    : 0


                                            }


                                            {/* {
                                                parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0)
                                                    - parseFloat(discount)).toFixed(2) > 0 ?
                                                    parseFloat(cart.items.reduce((sum, product) => sum + parseFloat(product.quantity) * parseFloat(product.product.fPrice), 0)
                                                        - parseFloat(discount)).toFixed(2)
                                                    : 0
                                                    + parseFloat(orderInfo.deliveryInfo.deliveryType === "regular" ? 0
                                                        : orderInfo.deliveryInfo.deliveryType === "freeDelivery" ? 0
                                                            : orderInfo.deliveryInfo.deliveryType === "twoDaysDelivery" ? 6.99
                                                                : orderInfo.deliveryInfo.deliveryType === "expressDelivery" ? 10.99
                                                                    : 0).toFixed(2)
                                                // +


                                            } */}

                                        </p>
                                    </dd>
                                </dl>
                            </div>

                            <Link to={"/mantenance"}>
                                <div class="mt-6 flex items-center justify-center gap-8">
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* <p class="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
                        Payment processed by <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Paddle</a> for <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Flowbite LLC</a>
                        - United States Of America
                    </p> */}
                </div>
            </div >
        </div >

    )

    return content_mod_final
}

export default CheckOut