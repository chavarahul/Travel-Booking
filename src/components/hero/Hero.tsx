import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { poppin } from '@/constants'
interface Heros {
  image: any,
  mainHeader: string,
  secondaryHeader: string
}
const Hero = ({ image, mainHeader, secondaryHeader }: Heros) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <Image src={image} alt='HeroImage' />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center border border-red-500">
          <h2 className={`${poppin.className} text-5xl text-white my-5`}>{mainHeader}</h2>
          <h5 className={`${poppin.className} text-white text-2xl `}>{secondaryHeader}</h5>
        </div>
      </div>
    </div>
  )
}

export default Hero
