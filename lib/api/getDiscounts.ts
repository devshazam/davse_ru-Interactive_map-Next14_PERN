"use server"
import prisma from '@/lib/prisma';

export async function getOneDiscount(id: any) {

  const discount = await prisma.discounts.findUnique({
    where: {
      id: +id,
    },
  })

  return discount;
}

export async function getMapList(map: any) {

console.log(11, map)
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
}

export async function getList({page, cat}: any) {
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
}

