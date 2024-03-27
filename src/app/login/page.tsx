'use client'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import Paris from '../../../public/assets/paris.jpg'
import Schema from './Schema'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } }: UseFormReturn<any, any, undefined> = useForm({
    resolver: zodResolver(Schema)
  });
  const onSubmit = async(data: { email: string, password: string }) => {
    if (Object.keys(errors)?.length > 0) {
      toast.error("Enter valid data")
      return
    }
    setLoading(true)
    try {
      const res=await signIn("credentials",{...data,redirect:false})
          if(res?.error == null){
            router.push("/")
          }else{
            toast.error("Email or password invalid")
          }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          className="brightness-50 h-full w-full object-cover"
          src={Paris}
          alt="Login's image"
        />
        <div
          className="h-[350px] w-[350px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
        >
          <h2 className="text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500">
            Log into your account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col items-center w-full gap-8">
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="email"
              placeholder="John@gmail.com"
              register={register("email")}
            />
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="password"
              placeholder="*******"
              register={register("password")}
            />
            <Button
              disabled={loading}
              label="Submit"
              className="w-3/4 mx-auto mt-12 cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
