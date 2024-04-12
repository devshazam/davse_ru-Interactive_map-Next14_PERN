"use client"
import React, { useEffect } from "react";
import { Col, Image, Divider } from 'antd';
import {getOneDiscount} from "@/lib/api/actions";
import { useSuspenseQuery  } from "@tanstack/react-query";
import globalParamsObject from "@/lib/config/mainAppParameterObject";
import CustomSpinner from "@/components/customSpinner";


export default function ItemList({ id }: { id: string } ) {
          
    
    const { data, isLoading, isError } = useSuspenseQuery ({
        queryFn: async () => await getOneDiscount(id),
        queryKey: ["discountOne", id], //Array according to Documentation
      });
    useEffect(() => {

    }, [])
    return (
        <> 
        {!!data &&
        <>
            <Col span={24} lg={12}>
                <Image className=" rounded" width="100%" alt="скидка Волгограда" src={data.image}/>
            </Col>
            <Col  span={24} lg={12} className=" rounded border-zinc-200 border-2">
                <h3 className="text-xl"><b>Цена (руб.):</b> { data.cost}</h3>
                <h3 className="text-xl"><b>Скидка (%):</b> {data.sale}</h3>
                <Divider />
                <h3 className="text-xl"><b>Название:</b> {data.title}</h3>
                <h3 className="text-xl"><b>Описание:</b> { data.description}</h3>
                <Divider />
                <h3 className="text-xl"><b>Категория скидки:</b> {globalParamsObject.discounts.discountsCategory[+data.cat]}</h3>
                <h3 className="text-xl"><b>Адрес:</b> { data.address}</h3>
                <h3 className="text-xl"><b>ID создателя скидки:</b> { data.authorId}</h3>
         
            </Col>
            </>
            }
        </>
    );
};

