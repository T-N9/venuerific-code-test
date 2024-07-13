import React from 'react'
import Button from '../common/button'
import Logo from '../common/logo'
import Link from 'next/link'
import SaveIcon from '../icons/SaveIcon'

const Navigation: React.FC = () => {
  return (
    <nav className='px-4 lg:px-0'>
      <div className='container max-w-[1280px] mx-auto flex justify-between items-center py-6 md:py-4'>
        <div className='flex items-center gap-10'>
          <Link href={'/'}>
            <Logo />
          </Link>

          <ol className='hidden md:block'>

            <li className='text-secondary font-medium hover:text-primary'>
              <Link href={'/'}>
                Learn
              </Link>
            </li>

          </ol>
        </div>

        <Button className='hidden md:flex' label='Install Venuerific' size='md' />

        <button className='block md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navigation