"use client"
import React, { Suspense} from "react";
import { Col, Row, Image, Skeleton } from 'antd';
import ItemList from "./components/ItemList";

export default function Item({ params }: { params: { id: string } }) {

    const id = params.id;
          
    return (
            <Row gutter={[24, 24]} className="!m-5"> 
                < Suspense fallback={<Skeleton  />}>
                    <ItemList id={id}/>
                </Suspense>
                <Col span={24} lg={12}>
                    <Image alt="скидка Волгограда" src="/files/qwe.jpg"/>
                </Col>
            </Row>

    );
};

