'use client'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
interface Child{
    children:ReactNode
}
const LayoutProvider = ({children}:Child) => {
    const path = usePathname()
  return (
    <>
   {path!=='/login' && path!=='/signup' && <Navbar/>}
   {children}
   {path!=='/login' && path!=='/signup' && <Footer/>}
   </>
  )
}

export default LayoutProvider
