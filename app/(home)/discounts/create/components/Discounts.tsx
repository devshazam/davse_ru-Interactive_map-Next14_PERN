"use client"
import React from "react";

import {
    Form,
    Input,
    Select,
    Slider, Typography, Space, Flex
  } from 'antd';
  const { TextArea } = Input;
import globalParamsObject from "@/lib/config/mainAppParameterObject";

const Discounts = ({ changeCreateObject, createObject }: any) => {
    return (
        <>


                    {/* Название */}
                        <Input placeholder="название скидки" showCount maxLength={30} status="" addonBefore="Название:" onChange={(e: any) =>
                                changeCreateObject({
                                    title: e.target.value,
                                })
                            } />
                  
                    {/* Описание */}
                        <TextArea  placeholder="Описание" showCount maxLength={500} status=""   value={createObject.description}  onChange={(e: any) =>
                                changeCreateObject({
                                    description: e.target.value,
                                })
                            } />

                    {/* Цена */}
                        <Input addonAfter="руб." placeholder="цена со скидкой без копеек!" showCount maxLength={8} status="" addonBefore="Цена:"  onChange={(e: any) =>
                                changeCreateObject({
                                    cost: +e.target.value,
                                })
                            } />

                    {/* Скидка */}
                        <Select  placeholder="Скидка (%)" value={createObject.sale} 
                        onChange={(value: any) =>
                            changeCreateObject({
                                sale: value,
                            })
                        }>
                            <Select.Option value={5}>Скидка 5%</Select.Option>
                            <Select.Option value={10}>Скидка 10%</Select.Option>
                            <Select.Option value={15}>Скидка 15%</Select.Option>
                            <Select.Option value={20}>Скидка 20%</Select.Option>
                            <Select.Option value={25}>Скидка 25%</Select.Option>
                            <Select.Option value={30}>Скидка 30%</Select.Option>
                            <Select.Option value={35}>Скидка 35%</Select.Option>
                            <Select.Option value={40}>Скидка 40%</Select.Option>
                            <Select.Option value={45}>Скидка 45%</Select.Option>
                            <Select.Option value={50}>Скидка 50%</Select.Option>
                        </Select>
                        
                    {/* Категория */}
                        <Select placeholder="Категория" value={createObject.cat} 
                            onChange={(value: any) =>
                                changeCreateObject({
                                    cat: value,
                                })
                            } >
                            {globalParamsObject.discounts.discountsCategory.map(
                                (item: string, index: number) => {
                                    return (
                                        <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                    );
                                }
                            )}
                        </Select>

                    {/* Срок */}
                        <Slider max={60} min={1} 
                            marks={{
                            1: 'день',
                            7: 'неделя',
                            30: 'разместить на месяц',
                            60: '60 дней',
                            }} 
                            value={createObject.range} 
                            onChange={(value: any) =>
                                changeCreateObject({
                                    range: value,
                                })
                            }
                        />

        </>
    );
};

export default Discounts;
