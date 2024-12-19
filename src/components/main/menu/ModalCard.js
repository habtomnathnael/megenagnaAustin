import React from 'react'

const ModalCard = ({ isOpen, onclose, title, description, price, fPicName }) => {

    return (

        <>
            {/* backdro */}
            <div
                onClick={onclose}
                className={`
                    fixed inset-0 flex justify-center items-center transition-colors
                    ${isOpen ? "visible bg-gray-600/70" : "invisible"}
                    `}
            >
                {/* modal */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`
                     bg-white rounded-xl shadow p-6 transition-all 
                     ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                        `}
                >
                    <button
                        onClick={onclose}
                        className=' absolute top-2 right-2 p-1 rounded-lg
                         text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600
                        '
                    >
                        x
                    </button>


                    <div className='grid md:grid-cols-2 gap-3 max-w-sm md:max-w-md'>
                        <div className=''>
                            <img
                                src={`http://localhost:3500/ItemImage/${fPicName}`}
                                alt='grid_image'
                                className="object-fit"
                            />
                        </div>
                        <div className=''>

                            <div className=' my-1 font-Josefin font-semibold '>{title}</div>
                            <div>{description}</div>

                        </div>


                    </div>

                </div>

            </div>


        </>

    )
}

export default ModalCard