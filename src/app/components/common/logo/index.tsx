import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
   <Image src={'/assets/logo.svg'} width={110} height={26} alt="Venuerific's Logo" priority/>
  )
}

export default Logo