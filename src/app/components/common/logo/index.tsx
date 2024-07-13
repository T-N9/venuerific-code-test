import React from 'react'
import Image from 'next/image'

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width = 110, height = 26} : LogoProps) => {
  return (
   <Image src={'/assets/logo.svg'} width={width} height={height} alt="Venuerific's Logo" priority/>
  )
}

export default Logo