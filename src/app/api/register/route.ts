import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcryptjs  from 'bcryptjs'

export const POST = async(req:NextRequest) =>{
    try {
        const body = await req.json()
        const {email,username,password} = body
        const existUser = await db.user.findUnique({
            where:email
        })
        if(existUser){
            return NextResponse.json({status:409})
        }
        const hashed = await bcryptjs.hash(password,10)

        const users = await db.user.create({
            data:{
                email,
                password:hashed,
                username
            }
        })
        return NextResponse.json({users},{status:201})
    } catch (error) {
        return NextResponse.json({status:500})
    }
}