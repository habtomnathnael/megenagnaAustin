import { useState, useEffect } from 'react'
import ReactCalander from 'react-calendar'
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice'
import { Link } from 'react-router-dom'

const ScheduleReservation = () => {

    const [indexTime, setIndexTime] = useState(0)
    const [partySize, setpartySize] = useState(1)
    const [reserveDate, setreserveDate] = useState(`${String((new Date()).getMonth() + 1).padStart(2, '0')}/${String((new Date()).getDate()).padStart(2, '0')}/${(new Date()).getFullYear()}`)
    const [reserveTime, setreserveTime] = useState(`${(new Date().getHours()).toString().padStart(2, '0')}:${(new Date().getMinutes()).toString().padStart(2, '0')}`)
    const [reservationSlot, setReservationSlot] = useState("")

    let timeResv = [];

    var d1 = new Date(),
        d2 = new Date(d1);

    // console.log(d2.getMinutes() + 210)
    // var d1 = new Date(),
    //     d2 = new Date(d1);

    useEffect(() => {
        handleTime();
    }, [d1]);

    let val = [], index = 0

    // for (let i = 0, m = 9; i < 12; i++, m++) {
    //     for (let k = 0; k <= 3; k++, index++) {
    //         val[index] = `${m > 12 ? m - 12 : m}:${k * 15 == 0 ? '00' : k * 15}`
    //     }
    // }



    for (let i = 0, m = 9; i <= 12; i++, m++) {
        for (let k = 0; k <= 3; k++, index++) {
            val[index] = `${m > 12 ? m : m}:${k * 15 == 0 ? '00' : k * 15}`
        }
    }


    const handleTime = () => {

        // console.log(e.target.value)

        // console.log(`new Date() is the changed time looks ${d1.getHours()}`)

        // console.log((val[2].split(":"))[0] === (9).toString() ? "true" : "false")

        // (((val[2].split(":"))[0]).toString() === ('9')) ? "true" : "false";

        // console.log(((val[10].split(":"))[0]).toString() === (11).toString())

        let foundIndex = 0;
        // console.log(`this is the time: ${d1.getHours()}`)


        for (let i = 0; i < val.length; i++) {


            let temp = ((val[i].split(":"))[0]).toString()
            // console.log(temp)
            // console.log(d1.getHours().toString())

            // console.log((temp.includes((d1.getHours()).toString())) ? val[i] : "")

            if (temp && (temp === d1.getHours().toString())) {

                foundIndex = i
                // console.log(foundIndex)
                // console.log(`index time ${(temp === d1.getHours().toString()) ? setIndexTime(i) : 0}`)

                // console.log(foundIndex)
            }
            // console.log(`the index time is ${indexTime}`);

            // (temp === (9).toString()) ? foundIndex = i : ''

            // (((val[i].split(":"))[0]).toString() === ('9')) ? "true" : "false";
            setIndexTime(foundIndex)
        }
        // console.log(val)
        // console.log(`this is the index ${foundIndex}`)


        // for (let i = 0; i < 3; i++) {
        //     for (let k = 0; k < 5; k++) {

        //         var d1 = new Date(),
        //             d2 = new Date(d1);

        //         d2.setMinutes(d1.getMinutes() + 210);
        //         const dateF = d2.getHours() + ":" + d2.getMinutes();
        //         console.log(`{this is d2: ${d2.getHours()}:${d2.getMinutes()}}: checking : ${d2.getMinutes().toString().length}`)
        //         // setDateR([...dateR, { dateF }])
        //     }
        // }


        // console.log(val)



    }


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

        const input__incomplete = "w-full bg-transparent placeholder:text-red-900 border border-red-900 transition duration-300 ease focus:outline-none focus:border-red-700 hover:border-red-700 shadow-sm focus:shadow-md"
        const input__complete = "w-full bg-transparent placeholder:text-green-900 border-green-900 duration-300 ease focus:outline-none focus:border-green-700 hover:border-green-700 shadow-sm focus:shadow-md"


        const validReserveDate = !reserveDate ? input__incomplete : input__complete
        const validReserveTime = !reserveTime ? input__incomplete : input__complete
        const validPartySize = !partySize ? input__incomplete : input__complete




        content = (
            <>
                <div className=" container mx-auto justify-between">
                    <h1 className="mx-auto justify-between items-center text-center my-10 font-Oswald text-[36px] lg:text-[46px]">Make a reservation</h1>
                    <p className="mx-auto justify-between items-center text-center font-Avenir text-[16px] my-10 px-8">To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>

                    <div className="mx-auto justify-between grid grid-cols-1 lg:grid-cols-3">
                        <div className=" w-full px-4 mx-auto">
                            <label htmlFor="partySize" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">Party size</label>

                            <input
                                type="number"
                                name="partySize"
                                id="partySize"
                                placeholder="Enter party size"
                                min="1"
                                max={1000}
                                value={partySize}
                                onChange={(e) => setpartySize(e.target.value)}
                                className={`${validPartySize} bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            />
                        </div>
                        <div className="w-full px-4 mx-auto">
                            <label htmlFor="date" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">Date</label>
                            <div class="relative max-w-sm">
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={reserveDate}
                                    onChange={(e) => setreserveDate(e.target.value)}
                                    className={`${validReserveDate} bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                />
                            </div>
                        </div>
                        <div className=" w-full px-4 mx-auto ">
                            <label htmlFor="time" className="block mb-2 text-[16px] font-Avenir text-gray-900 dark:text-white">Time</label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                value={reserveTime}
                                onChange={(e) => setreserveTime(e.target.value)}
                                className={`${validReserveTime} bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}

                            />
                        </div>

                    </div>

                    <hr className="w-full h-4 my-10 text-gray-900" />
                    <p className='mx-auto justify-between items-center text-left font-Avenir text-[16px] my-10'>Choose an available time slot:</p>

                    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>

                        {val.map((v, i) => (i >= indexTime && i < (15 + indexTime) &&
                            <button key={i}
                                onClick={(e) => setReservationSlot(e.target.innerText)}
                                className=" mx-5 my-5 bg-gray-50 border border-gray-800 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                                    {(parseInt(v.split(":")[0]) > 12 ? (parseInt(v.split(":")[0]) - 12).toString() + ":" + (v.split(":")[1]) + " " + "PM" : v + "AM")}
                                </span>
                            </button>
                        ))}

                    </div>
                    <div className='mx-4  md:mx-auto justify-center items-center text-center my-10'>
                        <button
                            className=' w-full md:w-[200px] mx-auto justify-center items-center text-center bg-mainColor text-white p-2 md:p-3 cursor-pointer'
                        >

                            <Link to="/BookaTable/new" state={{ reserveDate, reserveTime, partySize, reservationSlot }} >Reserve A Table</Link>

                        </button>
                    </div>


                </div >
            </>
        )
    }
    return content
}

export default ScheduleReservation