import React from 'react'
import {z} from 'zod'
const Schema = z.object({
    email:z.string().min(1,{message:"Email is required"}).email("Invalid email"),
    username:z.string().min(1,{message:"Username is required"}),
    password:z.string().min(6,{message:"minimum 6 words for password"})
})

export default Schema
