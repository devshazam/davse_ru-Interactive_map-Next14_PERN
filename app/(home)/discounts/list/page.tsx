"use client"

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Badge, Pagination  } from 'antd';
const { Meta } = Card;
import Link from 'next/link';
import { useQuery  } from "@tanstack/react-query";
import {getList } from "@/lib/api/getDiscounts";
import CustomSpinner from "@/components/customSpinner";

export default function ListDiscounts() {
    const [page, setPage] = useState(1);
    const [cat, setCat] = useState('1');

    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getList({page, cat}),
        queryKey: ["discountList", page ,cat, ], //Array according to Documentation

      })

    return (
        <>{!!data ? 
            <>
             <Row gutter={[12, 12]}>
                {data?.results.map((item, index) => {

                    return (
                    <Col  span={12} lg={6} key={index}>
                        <Link href={`/discounts/${item?.id}`}>
                            <Badge.Ribbon color="red" text={`Скидка: ${item?.sale}`}>
                                <Card hoverable cover={<img alt="example" src={item?.image} />} >
                                    <Meta title={item?.title} description={item?.description} />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    );
                })
                }
            </Row>
                <Pagination defaultCurrent={page} total={data?.numOfDiscounts} onChange={(page, pageSize) =>{setPage(page); console.log(123, page, pageSize)}} pageSize={8}/>
            </>
                :
            <CustomSpinner />
            }
        </>
    );
};
