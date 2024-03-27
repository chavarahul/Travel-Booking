import { optionTypes,optionLocations } from "@/data/data"
import { z } from "zod"
// import {optionsLoca}

const Schema = z.object({
    name:z.string().min(1,{message:"name is required"}),
    desc:z.string().min(1,{message:"description is required"}),
    beds:z.number().min(1,{message:"Beds are required"}),
    hasFreeWifi:z.boolean().optional(),
    hasFreewifi: z.boolean().optional(),
    type: z.enum(optionTypes.map(({ value }) => value)), 
    location: z.enum(optionLocations.map(({ value }) => value)),
    pricePerNight: z.number().min(15,{message:"price must be above $15"}).max(50000,{message:"pricemust be lesss"})
})

export default Schema