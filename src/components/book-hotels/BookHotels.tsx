'use client'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { format } from 'currency-formatter'
import { DateRangePicker } from 'react-date-range'
const BookHotels = ({ handleHideModal }: any) => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([new Date(), new Date(new Date().setDate(new Date().getDate() + 7))]);
  const selectrange = {
    startDate: dateRange[0],
    endDate: dateRange[1],
    key: "selection"
  }
  const calcDaysDiff = (): any => {
    const startDate = dateRange[0]
    const endDate = dateRange[1]
    if (startDate && endDate) {
      const result = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return result+1
    }
  }
  const totalPrice = calcDaysDiff() !== undefined ? 300 * calcDaysDiff() : undefined;
  return (
    <div className='fixed z-30 backdrop-blur top-0 left-0 min-h-full w-full shadow-lg'>
      <div className="bg-slate-100 w-3/4 rounded-lg top-1/2 left-1/2 bottom-0 right-0 -translate-0.5  pb-8">
        <div className="p-4 border-b border-slate-500 flex items-center justify-between">
          <h3 className='font-semibold text-2xl'>
            Book your Hotel
          </h3>
          <AiOutlineClose size={20} className='cursor-pointer' onClick={handleHideModal} />
        </div>
        <div className="p-4 flex items-center justify-between">
          <h2 className="font-semibold text-[20px]">
            Arabian Paradise
          </h2>
          <span className="☐ text-slate-800">
            {format(325.50, { locale: "en-US" })}
          </span>
        </div>
        <form className="p-4 flex flex-col gap-4">
          <DateRangePicker ranges={[selectrange]} minDate={new Date()} onChange={({ selection }: any) => {
            setDateRange([selection.startDate, selection.endDate])
          }} />
        </form>
        <div className="p-4 mt-4 border-t ☐ border-slate-500 flex items-end justify-between">
          <div className="☐ text-slate-700 flex items-center gap-2">
            <span>
              {format(300, { locale: "en-US" })}
              I
            </span>
            <span>X</span>
            <span>{calcDaysDiff()}</span>
          </div>
          <div className="☐ text-slate-700 mt-4">
            Total Price: {totalPrice !== undefined ? format(totalPrice, { locale: "en-US" }) : "N/A"}
          </div>
        </div>
        <div className="w-full flex items-center mt-6">
          <button
            className="w-3/4 mx-auto cursor-pointer rounded-1g py-3 px-6 text-x1 text-white bg-blue-500 transition-all hover:bg-lue-500"
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  )
}

export default BookHotels
