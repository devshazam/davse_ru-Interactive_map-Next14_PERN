import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import b64toBlob from "b64-to-blob";
import prisma from '@/lib/prisma'
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const Bucket = process.env.AMPLIFY_BUCKET;
// https://medium.com/@antoinewg/upload-a-file-to-s3-with-next-js-13-4-and-app-router-e04930601cd6
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  endpoint: "https://s3.timeweb.com",
  apiVersion: "latest",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});



// endpoint to upload a file to the bucket
export async function POST(request: NextRequest) {

    const {userEmail, range,  address, latitude, longitude, title, description, cost, sale, cat, image} = await request.json()
    
    const Key = `new-davse/${uuidv4()}.jpg`
    var base64toBlob = b64toBlob(image[0].thumbUrl.split(",")[1], 'image/jpg');
    const Body = (await base64toBlob.arrayBuffer()) as Buffer;
    const data = await s3.send(new PutObjectCommand({ Bucket, Key, Body }));
    // TODO сделать обраттотку ошибок data
    const location = `https://s3.timeweb.com/${Bucket}/${Key}`;
    
    var deadLine = new Date()
    deadLine.setDate(deadLine.getDate() + range)

    const newDiscount = await prisma.discounts.create({
        data: {address, latitude, longitude, title, description, cost, sale, cat, image: location, deadLine,
          author: {
            connectOrCreate: {
              where: {
                email: userEmail,
              },
              create: {
                email: userEmail,
                name: 'Qwerty',
                password: '123', // TODO убрать пароль!?
              },
            },
          },
        },
        include: {
            author: true,
          },
      })

  return NextResponse.json(newDiscount);
//   return NextResponse.json(response);
}









