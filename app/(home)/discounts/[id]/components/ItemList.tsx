"use client"
import React from "react";
import { Col, Image } from 'antd';
import {getOneDiscount} from "@/lib/api/getDiscounts";
import { useSuspenseQuery  } from "@tanstack/react-query";
import globalParamsObject from "@/lib/config/mainAppParameterObject";

export default function ItemList({ id }: { id: string } ) {
          
    const { data, isLoading, isError } = useSuspenseQuery ({
        queryFn: async () => await getOneDiscount(id),
        queryKey: ["discountOne", id], //Array according to Documentation
      });
    return (
        <> 
        {data && 
        <>
            <Col span={24} lg={12}>
                <Image  alt="скидка Волгограда" src={data.image}/>
            </Col>
            <Col span={12}>
                <ul>
                    <li>
                        Название: {data.title}
                    </li>
                    <li>
                        Скидка (%): {data.sale}
                    </li> 
                    <li>
                        Категория скидки: {globalParamsObject.discounts.discountsCategory[+data.cat]}
                    </li> 
                    <li>
                        Цена (руб.): { data.cost}
                    </li>
                    
                    <li>
                        Описание:{ data.description}
                    </li>
                    <li>
                        Адрес:{ data.address}
                    </li>
                    <li>
                        ID создателя скидки:{ data.authorId}
                    </li>

                </ul>
            </Col>
            </>
            }
        </>
    );
};

