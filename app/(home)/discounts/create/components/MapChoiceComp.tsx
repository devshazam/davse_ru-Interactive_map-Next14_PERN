"use client"
import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import {Input,} from 'antd';
import axios from "axios";
import {
    useMutation,
  } from '@tanstack/react-query'

const MapChoiceComp = ({ changeCreateObject, createObject }: any) => {

    const mutation = useMutation({
        mutationFn: (newTodo: any) => {
          return axios.post('/api/discounts/coordinates', newTodo)
        },
      })

      let callFetchYandexAddress = (address: string): void => {
        if (!address) return;
        mutation.mutate({ address })
      }
      
          if(mutation.isSuccess && !createObject.latitude && !createObject.longitude){
            const {result:address, latitude, longitude } = mutation.data.data;
            changeCreateObject({address, latitude, longitude})
        }


    return (
        <>

                <Input placeholder="Адрес" defaultValue="Волгоград, " showCount maxLength={50} addonBefore="Адрес:" onBlur={(e)=>callFetchYandexAddress(e.target.value)}/>
{!!createObject.latitude && !!createObject.longitude &&
                <div className="map-wrapper">
                    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_REACT_APP_YANDEX_KEY }} >
                        <section className="map container">
                                <Map
                                    state={{
                                        center: [createObject.latitude, createObject.longitude], // координаты центра карты 48.512741, 44.535905
                                        zoom: 13,
                                    }}
                                    width="100%"
                                    height={150}
                                >
                                    <Placemark
                                        geometry={[createObject.latitude, createObject.longitude]}
                                        options={{ preset: "islands#oliveStretchyIcon", iconColor: "red", }}
                                    />
                                </Map>
                        </section>
                    </YMaps>
                </div>
}
            
        </>
    );
};

export default MapChoiceComp;
