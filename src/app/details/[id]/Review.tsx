import React from 'react'
import person_image from '../../../../public/assets/bianco_2.png'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
const Review = () => {
  return (
    <div className="mt-16 flex flex-col gap-24 w-1/3">
    <div className='w-full flex gap-4'>
        <div className='w-14 h-14'>
            <Image src={person_image} className='w-full h-full object-cover  rounded-full' alt='Person' />
        </div>
        <div>
            <h3 className='font-semibold text-[20px]'>John Doe</h3>
            <span className='text-slate-800'>
                2 minutes ago
            </span>
            <div className='text-slate-800 mt-4'>
                Best Hotel In Dubai!
            </div>
        </div>
        <span>
            5
            <AiFillStar
                size={22}
                color="rgb(59, 130, 246)" />
        </span>
    </div> I
</div>
  )
}

export default Review
