import { useState } from "react"
import { MenuTypes } from "../../../constants"
import MainCardOne from './MenuCardOne'
import { useGetNotesQuery } from "../../../features/notes/notesApiSlice"


const MenuList = () => {
    const [menuType, setMenuType] = useState("Breakfast");


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

        // console.log("=========")
        const dataResponse = ids.map((val) => {
            return notes.entities[val]
        })

        var myData = Object.keys(dataResponse).map(key => {
            return dataResponse[key];
        })

        //`+++++++++++++++++++++++++

        // console.log(menuType)
        // // +++++++++++++++++++++++++++
        // console.log("=========")



        content = (
            <>
                <div className='container mx-auto justify-between h-auto my-[10px] md:my-[46px] flex-row'>
                    <h2 className='mx-auto justify-between text-center font-Playfair text-[18px] text-mainColor font-bold '>Our Menu</h2>
                    <h1 className='mx-auto justify-between text-center w-[300px] md:w-auto text-[30px] lg:text-[46px] font-Oswald font-medium text-black my-6'>Ethiopian Inspired Kitchen</h1>
                    <ul className='mx-auto md:flex justify-center text-center mt-32 hidden'>
                        {/* {
                            MenuTypes.map((menu, index) => (
                            <li key={menu.id}>
                                <a href={menu.links}
                                className={`text-[40px] font-Oswald ${menu.title === menuType ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => {
                                    setMenuType(menu.title)
                                }}
                            >{menu.title}&nbsp;{index !== 3 ? "|" : ""} &nbsp; </a></li>
                        ))} */}
                        {
                            MenuTypes.map((menu, index) => (
                                <li key={menu.id}>
                                    <h4 href={menu.links}
                                        className={`text-[40px] font-Oswald hover:cursor-pointer ${menu.dbname === menuType ? 'text-black' : 'text-gray-500'}`}
                                        onClick={() => {
                                            setMenuType(menu.dbname)
                                        }}
                                    >{menu.title}&nbsp;{index !== 3 ? "|" : ""} &nbsp; </h4></li>
                            ))}


                    </ul>

                    {/* __________________________________ */}
                    <div className=" block md:hidden mx-6">
                        <label className="">Menu</label>
                        <select

                            onChange={(e) => setMenuType(e.target.value)}
                            value={menuType}

                            className="bg-gray-50 border focus:outline-none border-gray-700 border-spacing-1 text-gray-600 text-sm block w-full p-3.5"
                        >
                            {["Breakfast", "Lunch & Dinner Menu", "Vegetarian", "Drinks"].map((val, index) => (
                                <option key={index}>{val}</option>
                            ))}
                        </select>
                        {/* <p className='mx-auto justify-between text-center'>we serve daily between {MenuTypes.map(menu => (menu.title === menuType ? menu.servingTime : ""))}</p> */}
                    </div>

                    {/* __________________________________ */}


                    <h2 className='mx-auto justify-between text-center mt-10 font-Oswald text-[40px]'>{menuType === "lunch&Dinner" ? <h4> Lunch & Dinner Menu</h4> : menuType}</h2>
                    <p className=' mx-auto justify-between text-center'>we serve daily between {MenuTypes.map(menu => (menu.dbname === menuType ? menu.servingTime : ""))}</p>
                </div>
                <div className="lg:mb-40 container mx-auto justify-between block  md:grid md:grid-cols-2 md:gap-20 lg:grid lg:grid-cols-3 lg:gap-10">
                    {
                        // MenuTypes.map((menu, index) => (menuType === menu.title ?
                        //     menu.foodTypes.map((food, i) =>
                        //         <MainCardOne key={i} title={food.type} description={food.description} price={food.price} />
                        //     ) : ""

                        // ))

                        myData.map((menu, index) => (menuType === menu.fType && menu.completed ?

                            <MainCardOne key={index} title={menu.title} description={menu.text} price={menu.fPrice} fPicName={menu.fPicName} />
                            : ""

                        ))


                    }
                </div>
            </>
        )
    }
    return content
}

export default MenuList