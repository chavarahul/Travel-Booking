import { Reserve } from '@/constants/type'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
interface hotelProps {
    h: Reserve
}
const Card: React.FC<hotelProps> = ({ h }) => {
    return (
        <div className='w-full flex flex-col'>
            <Link href={`/details/${h.listingId}`}>
                <Image src={h.image} height={100} width={100} alt='Image' />
            </Link>
            <div className="p-2 mt-2 flex flex-col gap-4">
                <span className="font-semibold text-lg">
                    {h.location}
                </span>
                <span>
                    {h.name}
                </span>
                <div>
                    <span className="text-slate-500">
                        {format(h.startDate, "MMM do yyyy")}
                    </span>
                    <span className='px-2'>-</span>
                    <span className="text-slate-500">
                        {format(h.endDate, "MMM do yyyy")}
                    </span>
                </div>
                <div className="">
                    TotalPrice : ${h.daysDifference * h.pricePerNight}
                </div>
                <button className='bg-red-500 p-5 w-1/3 rounded-lg text-white'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Card
