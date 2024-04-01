"use client"
import React from "react";
import { Col, Image } from 'antd';
import getMovies from "@/lib/api/getMovies";
import { useSuspenseQuery  } from "@tanstack/react-query";

export default function ItemList({ id }: { id: string } ) {
          
    const { data, isLoading, isError } = useSuspenseQuery ({
        queryFn: async () => await getMovies(id),
        queryKey: ["movies", id], //Array according to Documentation
      });
    return (
        <> 
            <Col span={24} lg={12}>
                <Image  alt="скидка Волгограда" src={data[0].image}/>
            </Col>
            <Col span={12}>
                <ul>
                    <li>
                        Название: Парикмахерская
                    </li>
                    <li>
                        Скидка (%): {10}{data[0].id}
                    </li> 
                    <li>
                        Категория скидки: Красота и здоровье
                    </li> 
                    <li>
                        Цена (руб.): {350}
                    </li>
                    
                    <li>
                        Описание: Хорошее описание
                    </li>
                    <li>
                        Адрес: Петроградская 18
                    </li>

                </ul>
            </Col>
        </>
    );
};

