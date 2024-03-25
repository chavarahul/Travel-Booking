import listing_image from "../../../public/assets/hr_1.jpg"
import React from 'react'
import Card from "./Card"
import { Reserve } from "@/constants/type"
const Reservations = () => {
  const data: Reserve[] = [
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: listing_image,
      location: "Dubai",
      name: "Arabian Paradise",
      startDate: new Date(),
      endDate: new Date(),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: listing_image,
      location: "Dubai",
      name: "Arabian Paradise",
      startDate: new Date(),
      endDate: new Date(),
      daysDifference: 5,
      pricePerNight: 500,
    },
    {
      id: crypto.randomUUID(),
      listingId: 1,
      image: listing_image,
      location: "Dubai",
      name: "Arabian Paradise",
      startDate: new Date(),
      endDate: new Date(),
      daysDifference: 5,
      pricePerNight: 500,
    },
  ]
  return (
    <div className="mt-24 px-16 min-h-screen w-full">
      <div className="h-full w-full flex flex-wrap gap-12">
        {data?.map((hotel: Reserve) => (
          <Card key={hotel.id} h={hotel} />
        ))}
      </div>
    </div>
  )
}
export default Reservations