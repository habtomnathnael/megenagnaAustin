import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    }
    return <div>
        {backToTopButton && (
            <button
                className=" fixed cursor-pointer bottom-[50px] right-[50px] text-gray-800 hover:text-gray-600 w-[50px] h-[50px]"

                onClick={scrollUp}

            >
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" h-[54px] size-[40px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" h-[54px] size-[40px]">
                    <path strokeLinecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>


            </button>
        )}
    </div>
}

export default BackToTopButton