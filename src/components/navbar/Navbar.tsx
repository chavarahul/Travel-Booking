'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(true)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const toggleModal = () => setShowModal((prev) => !prev)
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true)
      return () => window.onscroll = null
    }
  }, [])
  return (
    <header className={`fixed top-0 w-full left-0 h-16 z-10 py-5 ${isScrolled ? "shadow-md backdrop-blur" : " "}`}>
      <div className="h-full w-2/3 mx-auto flex items-center justify-between ">
        <Link href={"/"} className='flex gap-2 items-center transition-all '>
          <h1 className={`${isScrolled ? "text-blue-600" : "text-white text-2xl font-bold"}`}>
            TravelGod
          </h1>
          {/* <AiOutlineHome
            size={25}
            color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
          /> */}
        </Link>
        <div>
          <div className='cursor-pointer' onClick={toggleModal}>
            <AiOutlineUser
              size={30}
              color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
            />
          </div>
          {
            showModal && (
              <div onClick={toggleModal} className="  absolute top-16 right-[250px] shadow-md flex gap-4 flex-col p-4 bg-white rounded-xl">
                <Link href={'/reservations'}>
                  Reservations
                </Link>
                <button onClick={()=>{signOut()}} className='text-slate-500 text-center'>
                  SignOut
                </button>
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Navbar
