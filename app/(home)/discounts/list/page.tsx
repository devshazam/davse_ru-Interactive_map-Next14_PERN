"use client"

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Badge, Pagination  } from 'antd';
const { Meta } = Card;
import Link from 'next/link';


export default function ListDiscounts() {
    const [page, setPage] = useState(1);

    // const {data, error, isLoading, isValidating} = useSWR(`/api/discounts/list?${page}`, fetcher)
    // useEffect(() => {

    // }, [page]);

    return (
        <>
             <Row gutter={[12, 12]}>

                <Col  span={12} lg={6} >
                    <Link href="/discounts/1">
                        <Badge.Ribbon color="red" text={"Скидка 50%"}>
                            <Card hoverable cover={<img alt="example" src="/files/93Kb.jpg" />} >
                                <Meta title={"Парикмахерские"} description={"Цена: 2000 руб."} />
                            </Card>
                        </Badge.Ribbon>
                    </Link>
                </Col>
                
            </Row>
                <Pagination defaultCurrent={page} total={2} />
        </>
    );
};
