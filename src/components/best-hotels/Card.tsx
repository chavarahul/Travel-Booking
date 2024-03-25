import { Hotel } from '@/constants/type'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'currency-formatter'
import { AiFillStar } from 'react-icons/ai'
interface CardProps {
    loc: Hotel
}
const Card: React.FC<CardProps> = ({ loc }) => {
    return (
        <Link href={"/details/1"} className="h-[500px] w-[350px] flex flex-wrap rounded-xl cursor-pointer transition-all shadow-md">
            <div className="relative h-2/3 w-full">
                <Image
                    src={loc.image}
                    className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover"
                    alt="Locations's image"
                />
                <div className="absolute right-0 bottom-0 p-4 bg-blue-700 text-white rounded-tl-xl font-semibold">
                    {loc.location}
                </div>
            </div>
            {/* data */}
            <div className="w-full flex flex-col gap-4 p-4">
                <div className="mt-2 flex justify-between items-center">
                    <h2 className="text-left text-2xl text-slate-800 font-semibold">{loc.name}</h2>
                    <span className='p-2 rounded bg-blue-500 text-white flex gap-2 items-center'>
                        <AiFillStar color='white' />
                        <span className="text-white">
                            {loc.reviews}
                        </span>
                    </span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <span className='text-slate-600'>{format(loc.price, { locale: "en-US" })}
                        <span className='ml-2'>
                            per night
                        </span>
                    </span>
                    <button className='py-2 px-6 cursor-pointer bg-blue-500 text-white'>Book</button>
                </div>
            </div>
        </Link>
    )
}

export default Card
