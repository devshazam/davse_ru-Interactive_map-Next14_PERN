"use server"
import prisma from '@/lib/prisma';
import { signOut } from '@/auth';

export async function getOneDiscount(id: any) {

    const discount = await prisma.discounts.findUnique({
      where: {
        id: +id,
      },
    })

    return discount;


}



export async function getMapList(map: any) {
  try{
    const discounts = await prisma.discounts.findMany({
      where: {
        latitude: {
          gt: String(map[0][0]),
          lt: String(map[1][0]),
        },
        longitude: {
          gt: String(map[0][1]),
          lt: String(map[1][1]),
        }, 
      },
      select: {
        id: true,
        latitude: true,
        longitude: true,
        title: true,
        cost: true,
        sale: true,
      },
    })
    
    return discounts;

  } catch (e:any) {
    try{
        await prisma.errors.create({data: {description: JSON.stringify(['Error-04', e?.status, e?.message])}})
    }catch (error) {
        console.log(error);
    }
    return [];
  }
}

export async function getList({page, cat}: any) {
  try{ 
    page = page || 1;
    cat = cat || false;
    const skip = page * 8 - 8;

    const numOfDiscounts = await prisma.discounts.count({
      where: {
        ...(cat ? { cat } : {}),
      },

    })

    const results = await prisma.discounts.findMany({
      skip,
      take: 8,
      where: {
        ...(cat ? { cat } : {}),
      },
      orderBy: [
        {
          sale: 'desc',
        },
      ],
      select: {
        id: true,
        image: true,
        description: true,
        title: true,
        cost: true,
        sale: true,
      },
    })
    
    return {numOfDiscounts, results};

  } catch (e:any) {
    try{
        await prisma.errors.create({data: {description: JSON.stringify(['Error-05', e?.status, e?.message])}})
    }catch (error) {
        console.log(error);
    }
    return {numOfDiscounts: 0, results: []};
  }
}


export async function logOut() {
  await signOut();
}

