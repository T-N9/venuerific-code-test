import { montserrat } from '@/fonts/fonts'
import React from 'react'

/* Components */
import MailSubscribe from '../mail-subscribe'
import Logo from '../common/logo'
import MailIcon from '../icons/MailIcon'
import FacebookIcon from '../icons/FacebookIcon'
import InstaIcon from '../icons/InstaIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import PinterestIcon from '../icons/PinterestIcon'
import LinkedIcon from '../icons/LinkedIcon'
import BloggerIcon from '../icons/BloggerIcon'
import PhoneIcon from '../icons/PhoneIcon'
import MailSmIcon from '../icons/MailSmIcon'
import LocationSmIcon from '../icons/LocationSmIcon'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={`${montserrat.className} my-16 text-[#868686]`}>
            <div className='container max-w-[1280px] mx-auto'>
                <MailSubscribe />

                <div className='flex flex-wrap flex-col md:flex-row gap-8 py-10 border-b-2'>
                    <div className='flex px-5 items-center md:items-start flex-col flex-[4] gap-5'>
                        <Logo width={150} height={35} />
                        <p className='hidden md:block font-medium text-sm w-[88%]'>
                            Since 2013, Venuerific has been helping people celebrate their personal and business events by connecting them to unique event venues in Singapore, Malaysia, Hong Kong, Philippines, and Indonesia.
                        </p>

                        <div className='md:flex justify-start items-center hidden gap-3 mt-5'>
                            <a href='mailto:info@venuerific.com'>
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <MailIcon />
                                </span>
                            </a>
                            <a href='https://www.facebook.com/Venuerific' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <FacebookIcon />
                                </span>
                            </a>

                            <a href='https://www.instagram.com/venuerificofficial' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <InstaIcon />
                                </span>
                            </a>

                            <a href='https://www.youtube.com/@VenuerificProduction' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <YouTubeIcon />
                                </span>
                            </a>


                            <a href='#' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <PinterestIcon />
                                </span>
                            </a>

                            <a href='https://sg.linkedin.com/company/venuerific' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <LinkedIcon />
                                </span>
                            </a>

                            <a href='https://www.venuerific.com/blog' target='_blank' rel="noreferrer">
                                <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-300'>
                                    <BloggerIcon />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className='md:hidden flex-1 text-center md:text-left'>
                            <h1 className='font-bold text-sm text-gray-800 md:text-inherit md:text-2xl mb-3'>Payment Partners</h1>
                            <ul className='flex items-center md:items-start md:flex-col flex-wrap md:flex-nowrap justify-center gap-8 text-sm'>
                                <li><a href="#"><Image src="/assets/visa.png" width={66} height={20} alt="Visa Payment"/></a> </li>
                                <li><a href="#"><Image src="/assets/mastercard.png" width={38} height={24} alt="MasterCard Payment"/></a></li>
                                <li><a href="#"><Image src="/assets/paynow.png" width={54} height={34} alt="PayNow Payment"/></a></li>
                                <li><a href="#"><Image src="/assets/duitnow.png" width={46} height={34} alt="DuitNow Payment"/></a></li>

                            </ul>
                        </div>

                    <div className='flex-[7] px-5 flex-col md:flex-row flex gap-10 md:gap-4 justify-between'>
                        <div className='flex-1 text-center md:text-left'>
                            <h1 className='font-bold text-sm text-gray-800 md:text-inherit md:text-2xl mb-3'>Menu</h1>
                            <ul className='flex md:items-start md:flex-col flex-wrap md:flex-nowrap justify-center gap-4 text-sm'>
                                <li><a href="#">Blog</a> </li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Event</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Partners</a></li>
                                <li className='md:hidden'><a href="#">Ads and Video</a></li>
                            </ul>
                        </div>

                        <div className='flex-1 text-center md:text-left'>
                            <h1 className='font-bold text-sm text-gray-800 md:text-inherit md:text-2xl mb-3'>Information</h1>
                            <ul className='flex md:items-start md:flex-col flex-wrap md:flex-nowrap justify-center gap-4 text-sm'>
                                <li><a href="#">How It Works</a> </li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>

                        <div className='flex-1 text-center md:text-left'>
                            <h1 className='font-bold text-sm text-gray-800 md:text-inherit md:text-2xl mb-3'>Office</h1>
                            <ul className='flex flex-wrap gap-4 text-sm'>
                                <li><a className='flex items-start gap-2' href="tel:+6569558770"><PhoneIcon /> +65 6955 8770</a> </li>
                                <li><a className='flex items-start gap-2' href="mailto:info@venuerific.com"><MailSmIcon />info@venuerific.com</a></li>
                                <li><a className='flex items-start gap-2' href="#"><span className='w-4 h-4'>
                                    <LocationSmIcon />
                                </span> 9 Raffles Pl, Republic Plaza, Singapore 048619</a></li>

                            </ul>
                        </div>

                        <div className='flex-1 text-center md:text-left md:hidden'>
                            <h1 className='font-bold text-sm text-gray-800 md:text-inherit md:text-2xl mb-3'>Follow Us</h1>

                            <div className='md:hidden justify-center items-center flex gap-3 mt-5'>
                                <a href='https://www.youtube.com/@VenuerificProduction' target='_blank' rel="noreferrer">
                                    <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-primary'>
                                        <YouTubeIcon fillOpacity={1} fill='#3373EF' />
                                    </span>
                                </a>
                                <a href='https://www.facebook.com/Venuerific' target='_blank' rel="noreferrer">
                                    <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-primary'>
                                        <FacebookIcon />
                                    </span>
                                </a>
                                <a href='mailto:info@venuerific.com'>
                                    <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-primary'>
                                        <MailIcon />
                                    </span>
                                </a>


                                <a href='https://sg.linkedin.com/company/venuerific' target='_blank' rel="noreferrer">
                                    <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-primary'>
                                        <LinkedIcon />
                                    </span>
                                </a>

                                <a href='https://www.instagram.com/venuerificofficial' target='_blank' rel="noreferrer">
                                    <span className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-primary'>
                                        <InstaIcon />
                                    </span>
                                </a>






                            </div>
                        </div>


                    </div>
                </div>

                <p className='text-center mt-5'>
                    Venuerific © 2021
                </p>
            </div>
        </footer>
    )
}

export default Footer