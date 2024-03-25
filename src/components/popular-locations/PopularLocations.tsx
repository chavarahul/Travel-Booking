import React from 'react'
import Delhi from '../../../public/assets/delhi.jpg'
import Dubai from '../../../public/assets/dubai.jpg'
import Berlin from '../../../public/assets/berlin.jpg'
import Paris from '../../../public/assets/paris.jpg'
import { StaticImageData } from 'next/image'
import {City} from "@/constants/type"
import Card from './Card'
const PopularLocations = () => {
 const data:City[] = [
    {
        city: "Delhi",
        image: Delhi,
        numofPlaces:30
    },
    {
        city: "Dubai",
        image: Dubai,
        numofPlaces:34
    },
    {
        city: "Berlin",
        image: Berlin,
        numofPlaces:20
    },
    {
        city: "Paris",
        image: Paris,
        numofPlaces:15
    },
]

  return (
    <section className='h-full border border-red-400 w-full my-36'>
       <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full py-3 px-10 w-max">
          Explore
        </h5>
        <h2 className='text-4xl text-slate-800 font-bold mt-6 mb-12'>
          Popular Locations
        </h2>
        <div className="flex flex-wrap items-center gap-14 border border-red-500 w-full">
          {
            data.length>0 && (
              data?.map((item:City,index:number)=>(
                <Card place={item} key={index}/>
              ))
            )
          }
        </div>
       </div>
    </section>
  )
}

export default PopularLocations
