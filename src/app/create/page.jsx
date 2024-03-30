'use client'
import Input from '@/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import Schema from './Schema'
import Select from '@/ui/Select'
import { optionLocations, optionTypes } from '@/data/data'
import Button from '@/ui/Button'
import PopularLocations from '@/components/popular-locations/PopularLocations'
import toast from 'react-hot-toast'
import { createNewListing, postImages } from './api'
// import { Schema } from 'zod'
import { useMutation, MutationFunction, MutationKey } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
const Create = () => {
  const router = useRouter()
  const[images,setImages]=useState([])
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET
  const {mutateAsync, isLoading} = useMutation({
    mutationFn:async ( data, imageUrls ) =>await createNewListing(data, imageUrls),
    mutationKey: ["listings"]
  });
  
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      desc: "",
      beds: 5,
      hasFreeWifi: false,
      type: "luxury",
      location: "dubai",
      pricePerNight: 123
    }
  })
  useEffect(() => {
    if (Object.keys((errors)).length > 0) {
      Object.keys((errors)).map((error) => {
        // toast.error(error[keys].message)
      })
    }
  }, [errors])
  const uploadImages = async (image, index) => {
    if (!image) return
    const toastid = toast.loading(`Image ${index + 1} is being Uploaded`)
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", UPLOAD_PRESET)
    try {
      const imageUrl = await postImages(CLOUD_NAME, formData)
      toast.success(`Successfully uploaded ${index + 1}`)
      return imageUrl
    } catch (error) {
      console.log(error)
    }

  }
  const onSubmit = async (data) => {
    if (!images?.length) {
      return toast.error("Publish an image")
    }
    const imageUrls = await Promise.all(images.map((image, index) => {
      const imageUrl = uploadImages(image, index)
      return imageUrl
    }))
    const newListing = await mutateAsync({
      data, imageUrls
    })
    toast.success("Uploaded successfully")
    router.push(`/details/${newListing.id}`)
  }
  const handleImage = (e) => {
  setImages((prev)=>{
    return [...prev,e.target.files[0]]
  })
  }
  return (
    <div className='min-h-[900px] w-full fleax justify-center items-center'>
      <div className="h-2/5 w-1/5 rounded-xl border border-slate-500">
        <div className="p-3 w-full border-b border-slate-400">
          <h3 className="text-center font-semibold text-2xl">
            Create a Listing
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 py-6 flex flex-col items-center gap-8">
          <Input type="text" register={register("name")} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" />
          <Input type="text" register={register("desc")} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" />
          <Select register={register("location")} data={optionLocations} className="text-slate-400 w-2/3 outline-none ml-2 border border-blue-300" />
          <Select register={register("type")} data={optionTypes} className="text-slate-400 w-2/3 outline-none ml-2 border border-blue-300" />
          <Input type="number" register={register("pricePerNight", { valueAsNumber: true })} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" step={0.01} placeholder="$249.00" />
          <Input type="number" register={register("pricePerNight", { valueAsNumber: true })} className="text-slate-400 w-2/3 outline-none p-2 border border-blue-300" step={1} />
          <div className="text-slate-400 ml-4 w-2/3 flex items-center gap-4">
            <label htmlFor="freeWifi">
              FreeWifi
            </label>
            <Input type="checkbox" register={register("hasFreeWifi")} id="freeWifi" />
          </div>
          <label htmlFor="images" className='text-slate-400 w-1/3 ml-4'>

            <input type='file' className=' border border-red-500'  id="images" onChange={handleImage} />
          </label>
            <Button disabled={false} className="w-2/3 bg-blue-500 p-5" />
        </form>
      </div>

    </div>
  )
}

export default Create
