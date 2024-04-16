"use client"

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Badge, Pagination  } from 'antd';
const { Meta } = Card;
import Link from 'next/link';
import { useQuery  } from "@tanstack/react-query";
import {getList } from "@/lib/api/actions";
import CustomSpinner from "@/components/customSpinner";
import IputsParams from "../../components/IputsParams";

export default function ListDiscounts() {
    const [createObject, setCreateObject] = useState<any>({cat: 0, sort: "asc", param: "cost"}); // desc
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getList(page, createObject),
        queryKey: ["discountList", page , createObject], //Array according to Documentation

      })
console.log(data)
      function changeCreateObject(agent1: any) {
        setCreateObject({ ...createObject, ...agent1 });
      }
    return (
        <>
            <IputsParams createObject={createObject} changeCreateObject={changeCreateObject}/>
        {!!data ? 
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
