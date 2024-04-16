"use client"
import React from "react";

import {
    Form,
    Input,
    Select,
    Row, Col
  } from 'antd';
  const { TextArea } = Input;
import globalParamsObject from "@/lib/config/mainAppParameterObject";

const IputsParams = ({ changeCreateObject, createObject }: any) => {
    return (
        <>
                <Row gutter={[6, 6]}  className="m-4">
                        <Col span={24} lg={24}>

                        <Select placeholder="Категория" value={createObject.cat}  className="w-full"
                                onChange={(value: any) =>
                                    changeCreateObject({
                                        cat: value,
                                    })
                                } >
                                    <Select.Option key={0} value={0}>Все категории</Select.Option>
                                {globalParamsObject.discounts.discountsCategory.map(
                                    (item: string, index: number) => {
                                        return (
                                            <>
                                            <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                            </>
                                        );
                                    }
                                )}
                            </Select>
                        </Col>
                </Row>
        </>
    );
};

export default IputsParams;
