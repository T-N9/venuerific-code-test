import React from 'react'
import { Venue } from '@/types/venuesToJoin'
import Image from 'next/image'
import { montserrat } from '@/fonts/fonts'
import SuperVenueIcon from '@/app/components/icons/SuperVenueIcon'
import StandingGuestIcon from '@/app/components/icons/StandingGuestIcon'
import SittingGuestIcon from '@/app/components/icons/SittingGuestIcon'
import RatingIcon from '@/app/components/icons/RatingIcon'
import LocationIcon from '@/app/components/icons/LocationIcon'
import BuildingIcon from '@/app/components/icons/BuildingIcon'

const VenueCard = ({ id,
    name,
    address,
    keyword,
    super_venue,
    price,
    rating,
    total_review,
    image,
    standing_guest,
    sitting_guest, }: Venue) => {
    return (
        <div className={`${montserrat.className} max-w-[334px] lg:max-w-[306px] mx-auto`}>
            <div className='relative'>
                {
                    super_venue &&
                    <div className='absolute -left-1 -top-1'>
                        <SuperVenueIcon />
                    </div>
                }
                <Image className='w-[334px] h:[260px] lg:w-[306px] bg-gray-300 lg:h-[182px] rounded-lg object-cover object-center' width={306} height={182} alt={name} src={image}  />

                <div className='absolute bottom-3 left-0 right-0 px-4 text-white flex justify-between items-center'>
                    <div className='flex gap-5'>
                        <span className='flex justify-center items-center text-sm font-medium gap-1'>
                            <StandingGuestIcon />

                            {standing_guest}
                        </span>

                        <span className='flex justify-center items-center text-sm font-medium gap-1'>
                            <SittingGuestIcon />

                            {sitting_guest}
                        </span>
                    </div>
                    <div>
                        <span className='flex justify-center items-center text-sm font-medium gap-1'>
                            <RatingIcon />

                            <span className='font-semibold'>
                                {rating}
                            </span>
                            <span className='font-medium'>
                                ({total_review})
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='border-2 flex bg-white justify-between flex-col p-4 pt-6 rounded-br-xl rounded-bl-xl -mt-3 lg:w-[306px] w-[334px] min-h-44'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-base'>{name}</h1>
                        <p className='text-sm font-medium line-clamp-1'>{keyword}</p>
                        <span className='flex gap-1 justify-start items-center'>
                            <LocationIcon />
                            <span className='text-sm font-medium text-secondary'>{address}</span>
                        </span>
                    </div>
                    <div>
                        <BuildingIcon/>
                    </div>
                </div>
                <div className='border-t-2 pt-3'>
                    <p className='text-xs'>Starts from <span className='font-semibold text-sm'>{price}</span></p>
                </div>
            </div>
        </div>
    )
}

export default VenueCard