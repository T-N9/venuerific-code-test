'use client'
import React from 'react'
import { useVenueData } from '@/services/venuesToJoin'

/* Components */
import VenueCard from '../common/cards/venue-card'
import Button from '../common/button'
import SaveIcon from '../icons/SaveIcon'
import { montserrat } from '@/fonts/fonts'

const JoinVenueSection = () => {

    const { data, error, isLoading } = useVenueData();
    console.log({ data });

    return (
        <section>
            <div className="container max-w-[1280px] mx-auto px-4 lg:px-0">
                <h1 className='lg:text-4xl text-3xl text-center font-semibold w-2/3 lg:w-full mx-auto'>Join now with other venues</h1>
                <p className='text-secondary text-center text-xl mt-5'>Join now and get a bunch of enquiry everyday</p>

                <div className='grid gap-y-8 gap-3 my-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                    {isLoading && <div>Loading...</div>}
                    {error && <div>Error loading data</div>}
                    {
                        data && data?.map((venue) => {
                            return (
                                <VenueCard
                                    key={venue.id}
                                    {...venue}
                                />
                            )
                        })
                    }
                </div>
                <Button label='List Your Venues' size='lg' isIcon={true} icon={<SaveIcon />} className={`${montserrat.className} mx-auto`} />
            </div>


        </section>
    )
}

export default JoinVenueSection