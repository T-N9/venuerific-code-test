import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='mt-16 relative'>
            <div className='container lg:h-[672px] flex gap-y-16 flex-col lg:flex-row max-w-[1280px] mx-auto'>
                <div className='flex-1 flex justify-center items-center w-[80%] mx-auto lg:w-full lg:items-start flex-col gap-6'>
                    <h1 className='text-[38px] lg:text-[52px] text-center lg:text-left font-semibold lg:pr-24 leading-[52px] lg:leading-[72px]'>
                        Smart Ways to Manage Your Venues
                    </h1>

                    <p className='text-secondary text-center text-lg lg:text-xl lg:text-left lg:pr-60'>
                        Take control for every enquiry that came to your venues on your mobile
                    </p>

                    <div className='flex justify-center gap-3 mt-6'>
                        <Image src={'/assets/app_store.svg'} alt='Download App from App Store' width={132} height={44} />
                        <Image src={'/assets/play_store.svg'} alt='Download App from Play Store' width={148} height={44} />

                    </div>
                </div>
                <Image className='absolute hidden lg:block bottom-0 lg:right-0' src={'/assets/hero_person.png'} alt='Venuerific User' width={650} height={612} />

                <div className='lg:hidden left-0 right-0 bg-[#DFF4FF] absolute bottom-0 h-[33.5%]'>

                </div>
                <div className='flex-1 relative'>
                    <Image quality={100} className='absolute hidden lg:block z-10 bottom-0 left-[0.65rem]' src={'/assets/hero_mockup.png'} alt='Venuerific App Mock Up' width={320} height={520} />

                    <Image quality={100} className='lg:hidden w-[284px] mx-auto h-[356px] object-cover object-top z-10 bottom-0 left-8' src={'/assets/hero_mockup.png'} alt='Venuerific App Mock Up' width={284} height={356} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection