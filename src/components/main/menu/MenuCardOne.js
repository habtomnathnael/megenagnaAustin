import { useState } from 'react'

import ModalCard from "./ModalCard"

const MenuCardOne = ({ title, description, price, fPicName }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                className="block max-w-[18rem] rounded-lg text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="p-6">
                    <h5 className="mb-1 text-xl font-medium leading-tight ">
                        {title}
                    </h5>
                    <h6
                        className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                    </h6>
                    <p className="mb-4 text-base leading-normal">
                        {description}
                    </p>
                    <a
                        type="button"
                        // href="#"
                        className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        $&nbsp;{price}
                    </a>
                    <a
                        type="button"
                        // href="#"
                        className="pointer-events-auto cursor-pointer inline-block rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"
                        onClick={() => {
                            setIsOpen(true)
                        }}
                    >
                        Read more...

                    </a>

                    <ModalCard
                        fPicName={fPicName}
                        title={title}
                        description={description}
                        price={price}
                        isOpen={isOpen}
                        onclose={() => {
                            setIsOpen(false)
                        }} />



                </div>
            </div>
        </>

    )
}

export default MenuCardOne