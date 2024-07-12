import React from 'react'

const LoadingVenueCard = () => {
  return (
    <div className={` max-w-[334px] lg:max-w-[306px] mx-auto animate-pulse`}>
      <div className='relative'>
        <div className='w-[334px] h-[260px] lg:w-[306px] lg:h-[182px] rounded-lg bg-gray-300'></div>
        <div className='absolute bottom-3 left-0 right-0 px-4 text-white flex justify-between items-center'>
          <div className='flex gap-5'>
            <span className='w-6 h-4 bg-gray-300 rounded'></span>
            <span className='w-6 h-4 bg-gray-300 rounded'></span>
          </div>
          <div className='flex gap-1'>
            <span className='w-6 h-4 bg-gray-300 rounded'></span>
            <span className='w-8 h-4 bg-gray-300 rounded'></span>
          </div>
        </div>
      </div>
      <div className='border-2 flex bg-white justify-between flex-col p-4 rounded-br-xl rounded-bl-xl -mt-3 lg:w-[306px] w-[334px] min-h-44'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <h1 className='w-24 h-4 bg-gray-300 rounded'></h1>
            <p className='w-16 h-4 bg-gray-300 rounded'></p>
            <span className='flex gap-1 justify-start items-center'>
              <span className='w-4 h-4 bg-gray-300 rounded'></span>
              <span className='w-20 h-4 bg-gray-300 rounded'></span>
            </span>
          </div>
          <div className='w-8 h-8 bg-gray-300 rounded'></div>
        </div>
        <div className='border-t-2 pt-3'>
          <p className='text-xs'>
            <span className='w-24 inline-block h-4 bg-gray-300 rounded'></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingVenueCard