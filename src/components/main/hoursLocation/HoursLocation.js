import googleMap from '../../../img/googleMapMeg.png'
import { useGetNotesQuery } from '../../../features/notes/notesApiSlice'
const HoursLocation = () => {
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
                <div className=' mt-16 mb-4'>
                    <h1 className=' mx-auto justify-between text-center font-Oswald text-[16px] md:text-[18px] text-mainColor'>Hours & Location</h1>
                </div>
                <div>
                    <h1 className='mx-auto justify-between text-center font-Oswald text-[30px]  md:text-[46px] font-semibold'>Visit Us</h1>
                </div>
                <div className=' mx-auto items-left'>
                    <button className='mx-auto flex items-center gap-1 font-Oswald text-[20px]  md:text-[32px]' disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className='mx-auto justify-between text-center size-6'>
                            <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        <h3 className=' mx-auto justify-between text-center'>Megenagna Mart & Cafe at Austin</h3>
                    </button>
                </div>
                <div className='my-6 px-6'>
                    <div className=' container max-w-[350px] mx-auto items-center justify-between gap-1'>

                        <div className='  items-center py-4 text-[12px] md:text-[14px]'>
                            <button className='flex text-center items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class=" size-4 md:size-6">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <p className='mx-auto justify-between text-left'>
                                    2013 Wells Branch Pkwy,
                                </p>
                            </button>

                            <p className='mx-auto justify-between text-left px-8'>Austin, TX 78728</p>
                        </div>
                        <div className=' flex items-center text-[12px] md:text-[14px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-6 pr-2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>

                            <p className=' text-center text-[12px] md:text-[14px]'>Mon - Sunday: 9:00am - 9:00pm</p>
                        </div>
                        <div className=' items-center py-2 space-y-2 text-[12px] md:text-[14px]'>

                            <p className='flex text-left gap-1 items-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-2 md:size-4">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>


                                : megenagna.mart.cafe@gmail.com</p>
                            <p className='text-left flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-2 md:size-4">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>


                                : <a href='#' className='underline'>(512) 291-7281</a></p>
                        </div>

                    </div>
                    <div className=' w-full mt-6'>
                        <iframe width="100%" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=2013%20Wells%20Branch%20Pkwy,%20Austin,%20TX%2078728+(Megenagna%20Mart%20&amp;%20Cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                    </div>

                </div>
            </>
        )
    }
    return content
}

export default HoursLocation