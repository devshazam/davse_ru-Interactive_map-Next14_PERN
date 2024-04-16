import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import prisma from '@/lib/prisma'


export async function POST(req:any,res:any){
      try {
        const {address} = await req.json()
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Token " + process.env.API_KEY_FIND_ADDRESS_BY_ID,
            "X-Secret": process.env.SECRET_KEY_FIND_ADDRESS_BY_ID
            };
        const fyaQ1 = await axios.post(`https://cleaner.dadata.ru/api/v1/clean/address`, JSON.stringify([address]), {headers});
        console.log(fyaQ1.data[0].geo_lat, parseFloat(fyaQ1.data[0].geo_lat))

        
        const fyaQ2 = {result: fyaQ1.data[0].result, latitude: parseFloat(fyaQ1.data[0].geo_lat), longitude: parseFloat(fyaQ1.data[0].geo_lon)};

        return NextResponse.json(fyaQ2)
    } catch (e:any) {
        try{
            await prisma.errors.create({data: {description: JSON.stringify(['Error-01', e?.status, e?.message])}})
        }catch (error) {
            console.log(error);
        }
        return NextResponse.json(
        { message: "Error-01", status: 500 }
      );
 }
}
