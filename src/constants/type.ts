import { StaticImageData } from "next/image"
export interface City{
    city:string,
    image:StaticImageData,
    numofPlaces:number
  }

export interface Hotel{
name:string,
image:StaticImageData,
price:number,
category:string,
reviews:number,
location:string
}
