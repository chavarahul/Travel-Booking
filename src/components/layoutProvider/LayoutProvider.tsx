'use client'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface Child {
  children: ReactNode
}
const LayoutProvider = ({ children }: Child) => {
  const path = usePathname()
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {path !== '/Login' && path !== '/signup' && <Navbar />}
        {children}
        {path !== '/Login' && path !== '/signup' && <Footer />}
      </QueryClientProvider>
    </>
  )
}

export default LayoutProvider
