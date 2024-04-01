import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import prisma from '@/lib/prisma'





export async function GET(){
    const users = await prisma.users.findMany()


    return NextResponse.json({users})
}



export async function POST(req:any,res:any){
    // const data  = await req.json()

    //   try {
        const {address} = await req.json()
console.log(address)
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Token " + process.env.API_KEY_FIND_ADDRESS_BY_ID,
            "X-Secret": process.env.SECRET_KEY_FIND_ADDRESS_BY_ID
            };
        const fyaQ1 = await axios.post(`https://cleaner.dadata.ru/api/v1/clean/address`, JSON.stringify([address]), {headers});
        // console.log(fyaQ1)
        const fyaQ2 = {result: fyaQ1.data[0].result, latitude: fyaQ1.data[0].geo_lat, longitude: fyaQ1.data[0].geo_lon};

        return NextResponse.json(fyaQ2)
    // } catch (error) {
    //     return NextResponse.json(user)
    //     return next(ApiError.internal(`601: ${error.message}`));
    // }



}
