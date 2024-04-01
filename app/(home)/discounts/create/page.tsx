"use client"
import React, { useState } from "react";

import ImageResizingComp from "@/app/(home)/discounts/create/components/ImageResizingComp";
import MapChoiceComp from "@/app/(home)/discounts/create/components/MapChoiceComp";
import Discounts from "@/app/(home)/discounts/create/components/Discounts";
import axios from "axios";
import { z } from 'zod';
import {
  useMutation,
} from '@tanstack/react-query'

import { Button, Col, Row  , Flex  } from 'antd';
import { useSession } from "next-auth/react";


export default function CreateDiscount() {
  const { data: session, update } = useSession();
  const [createObject, setCreateObject] = useState<any>({sale: "5", range: 1, cat: "1", description: "", image: null, userEmail: session?.user.email});
  console.log(createObject)

  function changeCreateObject(agent1: any) {
    setCreateObject({ ...createObject, ...agent1 });
  }

  const mutation = useMutation({
    mutationFn: (newTodo: any) => {
      return axios.post('/api/auth/discounts/create', newTodo)
    },
  })

    const sendToServer = () => {
      const parsedCredentials:any = z
      .object({ title: z.string().min(6, { message: "Привет" }),
                
      })
      .safeParse(createObject);
      console.log(12132, parsedCredentials.error.issues)
      return;
      // if(!Boolean(createObject.image)){
      //   alert("Картинка не загружена!");
      //   return;}
      // if(!Boolean(createObject.title) || !Boolean(createObject.cost)){
      //   alert("Вы не ввели название и цену!");
      //   return;}
      //   if(!Boolean(createObject.address)){
      //     alert("Вы не ввели адрес!");
      //     return;}
      // if(!Boolean(createObject.latitude) || !Boolean(createObject.longitude)){
      //   alert("Введите адрес заново, он не найден!");
      //   return;}
        // mutation.mutate(createObject)
    };

  return (
        <Row gutter={[12, 12]}  justify="center">
          <Col  span={20} lg={12} >
          <Flex vertical gap={24} className="mt-8">
            <ImageResizingComp changeCreateObject={changeCreateObject} createObject={createObject}/>

            <MapChoiceComp changeCreateObject={changeCreateObject} createObject={createObject}/>

            <Discounts  changeCreateObject={changeCreateObject} createObject={createObject}/>

            <Button type="primary" loading={false} className="mb-5"
            // disabled
            onClick={sendToServer}
            >
              Опубликовать!
            </Button>
          </Flex>
        </Col>
      </Row>
    );
};

