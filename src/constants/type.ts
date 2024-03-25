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

export interface Reserve{
 
    id: string;
    listingId: number;
    image: StaticImageData;
    location: string;
    name: string;
    startDate: Date;
    endDate: Date;
    daysDifference: number;
    pricePerNight: number;

}