'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import hotel_image_1 from '../../../../public/assets/hr_1.jpg'
import 'swiper/swiper-bundle.css';
import hotel_image_2 from '../../../../public/assets/hr_2.jpg'
import { register } from 'swiper/element/bundle';
import { AiFillStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaBed, FaWifi } from 'react-icons/fa';
import { format } from 'currency-formatter'
import Review from './Review';
import BookHotels from '@/components/book-hotels/BookHotels';

const Details = (ctx: any) => {
    const id = ctx.params.id;
    const [selectStar, setSelectStar] = useState<number>(5)
    const [showModal, setShowModal] = useState<boolean>(false)
    const swiperRef = useRef(null)
    const handlerShowModal = ():any => setShowModal(prev => true)
    const handlerHideModal = ():any => setShowModal(prev => false)
    register()
    return (
        <div className={`min-h-screen w-full mt-24  ${showModal && "overflow-hidden"}`}>
           {showModal && <BookHotels handleHideModal={handlerHideModal}/> }
            <div className="h-full w-3/4 mx-auto">
                <div className="">
                    <div className="w-full h-[750px] overflow-hidden mx-auto">
                        <div className="w-full h-full">
                            <Swiper
                                slidesPerView={1}
                                navigation
                            >
                                <SwiperSlide>
                                    <Image
                                        src={hotel_image_2}
                                        alt="Hotel"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={hotel_image_2}
                                        alt="Hotel"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="mt-12 px-6 w-full flex  items-center justify-between">
                        <h2 className="font-bold text-4xl">
                            Araian Paradise
                        </h2>
                        <div>
                            <span className='p-2 px-4 text-[22px] rounded-full bg-blue-500 text-white flex items-center gap-2'>
                                <AiFillStar color='white' />
                                <span className='text-white'>
                                    4.7
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 px-6 flex items-center gap-8">
                    <span className="flex items-center gap-2">
                        <CiLocationOn />
                        Dubai, UAE
                    </span>
                    <span className="flex items-center gap-2">{format(325.50, { locale: "en-US" })}/night</span>
                    <span className="flex items-center gap-2">2 <FaBed /></span>
                    <span className="flex items-center gap-2">Free <FaWifi /></span>
                </div>
                <div className='mt-16 px-6 w-full flex items-end justify-between'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, ipsum.</p>
                    <button onClick={handlerShowModal} className="cursor-pointer rounded py-2 px-6 text-xl text-white bg-blue-500">
                        Book
                    </button>
                </div>
            </div>
            <div className="border-t-2 border-white-800 px-6 mt-16 mx-auto">
                <h1 className="mt-16 text-3xl font-bold">
                    Reviews
                </h1>
                <div className="mt-8 flex items-center gap-6">
                    {Array.from(Array(5).keys()).map((num: number) => (
                        <span key={num} onClick={() => setSelectStar(num + 1)}
                            className={`${selectStar === num + 1 ? "scale-125" : ""} cursor-pointer flex items-center gap-2 transition-all`}
                        >
                            {num + 1}
                            <AiFillStar size={22} color='rgb(59,130,246)' />
                        </span>
                    ))}
                </div>
                <div className="mt-8 flex items-center gap-28 border rounded-lg py-4 px-6 w-max">
                    <input className="outline-none" type="text" placeholder="Leave your opinion..." />
                    <button className="cursor-pointer rounded-1g py-2 px-6 text-x1 text-white bg-blue-500 transition-all hover:bg-blue-300">
                        Post
                    </button>
                </div>
                <Review/>
                <Review/>
          
            </div>
        </div >
    )
}

export default Details
