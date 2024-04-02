"use client"
import React, { Suspense} from "react";
import { Col, Row, Image, Skeleton, Result } from 'antd';
import ItemList from "./components/ItemList";

export default function Item({ params }: { params: { id: string } }) {
console.log('params', params)
    const id = params.id || '';
          
    return (
        <>
        {!!id ?
            <Row gutter={[24, 24]} className="!m-5"> 
                < Suspense fallback={<Skeleton  />}>
                    <ItemList id={id}/>
                </Suspense>
                <Col span={24} lg={12}>
                    <Image alt="скидка Волгограда" src="/files/qwe.jpg"/>
                </Col>
            </Row>
            :
            <Result
            status="warning"
            title="Вы не передали ID товара!"
            // extra={
            //   <Button type="primary" key="console">
            //     Go Console
            //   </Button>
            // }
          />
        }
</>
    );
};

