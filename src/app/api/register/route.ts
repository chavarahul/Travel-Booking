import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcryptjs from 'bcryptjs'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        console.log("gg")
        const { username, email, password }= body
        console.log(username)
        // const existUser = await prisma.user.findUnique({
        //     where: email 
        // })
        // if (existUser) {
        //     return NextResponse.json({ status: 409 })
        // }
        const hashed = await bcryptjs.hash(password, 10)
        console.log("ff")
        const users = await prisma.user.create({
            data: {
                username,
                email,
                password: hashed,
            }
        })
        console.log("hlo")
        return NextResponse.json({ users }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ status: 500 })
    }
}