import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';


export async function GET(){

  let data = await fetch("https://api.kopi34.ru/api/goods/fetch-xsl-file");
  data = await data.json();
  console.log(data);



    return NextResponse.json({data})
}

export async function POST(req: any, res: any){
    // const data  = await req.json()
    // console.log(data)
        
            const data  = [
              {
                  "id": "2",
                  "discount": "5",
                  "cost": "570",
                  "name": "Сертификат на посещение спортивного комплекса",
                  "latitude": "48.5022276",
                  "longitude": "44.5502945",
                  "currentTime": 1705311301055,
        
              },
              {
                  "id": "2",
                  "discount": "20",
                  "cost": "500",
                  "name": "Стабильные скидки от -5%, -7%, -10%.",
                  "latitude": "48.520061",
                  "longitude": "44.562268",
        
              },
              {
                  "id": "3",
                  "discount": "35",
                  "cost": "395",
                  "name": "Бизнес-обед Додо - 395руб.",
                  "latitude": "48.5144485",
                  "longitude": "44.5371639",
                  "currentTime": 1709541363476,
        
              },
              {
                  "id": "4",
                  "discount": "10",
                  "cost": "250",
                  "name": "Скидка 7% для социальных групп населения",
                  "latitude": "48.5121169",
                  "longitude": "44.5477832",
                  "currentTime": 1709541956235,
        
              }
          ]


    return NextResponse.json(data)
}