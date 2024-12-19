import React from 'react'
import FeatureImage from '../features/FeatureImage'
import HeroSection from '../hero/HeroSection'
import OurBest from '../ourBest/Index'
import Moments from '../moments/Index'
import Reservation from '../reservation/Index'
import { useGetNotesQuery } from "../../features/notes/notesApiSlice"

const Public = () => {
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
                <FeatureImage />
                <HeroSection />
                <OurBest />
                <Moments />
                <Reservation />
            </>
        )

    }

    return content
}

export default Public