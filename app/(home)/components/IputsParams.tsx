"use client"
import React from "react";

import {
    Form,
    Input,
    Select,
    Slider, Typography, Space, Flex,
    Row, Col
  } from 'antd';
  const { TextArea } = Input;
import globalParamsObject from "@/lib/config/mainAppParameterObject";
const arrayToObject = [{sort: "asc", param: "sale"}, {sort: "desc", param: "sale"}, {sort: "asc", param: "cost"}, {sort: "desc", param: "cost"}, ]

const IputsParams = ({ changeCreateObject, createObject }: any) => {
    return (
        <>
                <Row gutter={[6, 6]}  className="m-4">
                        <Col span={24} lg={12}>

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
                                            <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                        );
                                    }
                                )}
                            </Select>
                        </Col>
                    {/* Категория */}

                    <Col span={24} lg={12}>
                       

                        <Select  placeholder="Сортировка" defaultValue={0} className="w-full "
                        onChange={(value: any) =>
                            changeCreateObject(arrayToObject[value])
                        }>
                            <Select.Option value={0}>Возрастание скидки</Select.Option>
                            <Select.Option value={1}>Убывание скидки</Select.Option>
                            <Select.Option value={2}>Возрастание цены</Select.Option>
                            <Select.Option value={3}>Убывание цены</Select.Option>
                        </Select>
                        </Col>
</Row>
        </>
    );
};

export default IputsParams;
