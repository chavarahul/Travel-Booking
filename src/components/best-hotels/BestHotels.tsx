import React from 'react'
import image_1 from '../../../public/assets/hr_1.jpg'
import image_2 from '../../../public/assets/hr_2.jpg'
import image_3 from '../../../public/assets/hr_3.jpg'
import image_4 from '../../../public/assets/hr_4.jpg'
import image_5 from '../../../public/assets/hr_5.jpg'
import image_6 from '../../../public/assets/hr_6.jpg'
import image_7 from '../../../public/assets/hr_7.jpg'
import Card from './Card'
import { Hotel } from '@/constants/type'
const BestHotels = () => {
  const data:Hotel[] = [
    {
      name: "Arabian Paradise",
      image: image_1,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    }, {
      name: "Arabian Paradise",
      image: image_2,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
  ]
  return (
    <div className="h-full w-full my-36">
      <div className="h-full_w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          Explore Top
        </h5>
        <h2 className="text-4x1 ☐ text-slate-800 font-bold mt-6 mb-12">
          Best Hotels
        </h2>
        <div className="flex flex-wrap items-center gap-14">
          {data?.map((item:Hotel,index:number)=>(
            <Card key={index} loc={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestHotels
