import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma'
export async function GET(request : NextRequest,{ params }: { params: { id: number } }) {
    const id =  params.id
    console.log(id)
    // if (!id) {
    //     return NextResponse.error("Missing 'id' parameter");
    //   }
      
    //   const post = await prisma.post.findUnique({
    //     where: {
    //       id: parseInt(id),
    //     },
    //     include: {
    //       author: {
    //         select: { name: true },
    //       },
    //     },
    //   });

    const post = [
            
        {
            "id": id,
            "sale": "5",
            "cost": "570",
            "title": "Сертификат на посещение спортивного комплекса",
            "latitude": "48.5022276",
            "longitude": "44.5502945",
            "currentTime": 1705311301055,
            "image": "/files/93Kb.jpg",
            "description": "Описание скидки",
            "address": "Волгоградская 8",

        },
    ]
      
      return NextResponse.json(post);
}
// export async function PUT(request : NextRequest,{ params }: { params: { id: number } }) {
//     const id =  params.id
//     if (!id) {
//       return NextResponse.error("Missing 'id' parameter");
//     }
    
//    const post = await prisma.discounts.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//     }) 

//     const { title, content } = await request.json();
//      const updatedPost = await prisma.post.update({
//       where: {
//         id: parseInt(id),
//       },
//       data: {
//         title: title,
//         content: content,

//       },
//     });
     
//     return NextResponse.json({success:1,"post":updatedPost,"message":"Update success"});
// }

// export async function DELETE(request : NextRequest,{ params }: { params: { id: number } }) {
//   const id =  params.id
//   if (!id) {
//     return NextResponse.error("Missing 'id' parameter");
//   }
  
//  const deletePost = await prisma.post.delete({
//     where: {
//       id: parseInt(id),
//     },
//   }) 

   
//   return NextResponse.json({success:1,"message":"Delete success"});
// }


