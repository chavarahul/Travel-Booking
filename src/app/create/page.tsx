'use client'
import Input from '@/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm,UseFormReturn } from 'react-hook-form'
import Schema from './Schema'
import Select from '@/ui/Select'
import { optionLocations, optionTypes } from '@/data/data'
import Button from '@/ui/Button'
import PopularLocations from '@/components/popular-locations/PopularLocations'
import toast from 'react-hot-toast'
import { postImages } from './api'
// import { Schema } from 'zod'

const Create = () => {
  const CLOUD_NAME:any = process.env.CLOUD_NAME
  const UPLOAD_PRESET:any = process.env.UPLOAD_PRESET
  
  // const []


  const {register,handleSubmit,formState:{errors}}:UseFormReturn<any,any,any> = useForm({
  resolver:zodResolver(Schema),
  defaultValues:{
    name:"",
    desc:"",
     beds:5,
     hasFreeWifi:false,
     type:"luxury",
     location:"dubai",
     pricePerNight:123
  }
  })
  const uploadImages = async(image:any,index:number) =>{
     if(!image)return
     const toastid = toast.loading(`Image ${index+1} is being Uploaded`)
     const formData = new FormData()
     formData.append("file",image)
     formData.append("upload_preset",UPLOAD_PRESET)
     try{
       const imageUrl = await postImages(CLOUD_NAME,formData)
       toast.success(`Successfully uploaded ${index+1}`)
       return imageUrl
     }catch(error){
      console.log(error)
     }

  }
  return (
    <div className='min-h-[900px] w-full fleax justify-center items-center'>
      <div className="h-2/5 w-1/5 rounded-xl border border-slate-500">
        <div className="p-3 w-full border-b border-slate-400">
          <h3 className="text-center font-semibold text-2xl">
                 Create a Listing
          </h3>
        </div>
        <form action="" className="w-full px-4 py-6 flex flex-col items-center gap-8">
         <Input type="text" register = {register("name")} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300"/>
         <Input type="text" register = {register("desc")} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300"/>
         <Select register={register("location")} data={optionLocations}  className="text-slate-400 w-2/3 outline-none ml-2 border border-blue-300"/>
         <Select register={register("type")} data={optionTypes}  className="text-slate-400 w-2/3 outline-none ml-2 border border-blue-300"/>
         <Input type="number" register = {register("pricePerNight",{valueAsNumber:true})} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" step={0.01} placeholder="$249.00"/>
         <Input type="number" register = {register("pricePerNight",{valueAsNumber:true})} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" step={1} />
         <div className="text-slate-400 ml-4 w-2/3 flex items-center gap-4">
          <label htmlFor="freeWifi">
            FreeWifi
          </label>
          <Input type="checkbox" register={register("hasFreeWifi")} id="freeWifi"/>
         </div>
         <label htmlFor="images" className='text-slate-400 w-1/3 ml-4'>

          <input type='file' className='text-slate-500' style={{display:'none'}} id="images" onChange={()=>{}}/>
          <Button disabled={false} className="w-2/3 bg-blue-500 p-5"/>
         </label>
        </form>
      </div>
      
    </div>
  )
}

export default Create
