'use client'
import React, { useState,  useRef, useEffect } from "react";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import DiscountsMapComp from '@/app/(home)/components/DiscountsMapComp';
import { useQuery  } from "@tanstack/react-query";
import {getMapList} from "@/lib/api/actions";
import IputsParamsMap from "./components/IputsParamsMap";


export default function Home() {
  const mapRef = useRef<any>();
  const [createObject, setCreateObject] = useState<any>({cat: 0}); // desc
  // const [discounts, setDiscounts] = useState<any>(null);
  // const [coordinates, setCoordinates] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState<any>(11);
  
  console.log(21, map)
  const refreshData = () => {
     if(mapRef.current && mapRef.current._bounds) {
       setMap(mapRef.current._bounds);
      }
    };

    const { data, isLoading, isError } = useQuery({
      queryFn: async () => await getMapList(map, createObject),
      queryKey: ["discountMapList", map, createObject], //Array according to Documentation
      // The query will not execute until the userId exists
      enabled: !!map,
    })
 
    function changeCreateObject(agent1: any) {
      setCreateObject({ ...createObject, ...agent1 });
    }

  return (<>
            <IputsParamsMap createObject={createObject} changeCreateObject={changeCreateObject}/>
            <YMaps query={{ apikey: process.env.NEXT_PUBLIC_REACT_APP_YANDEX_KEY}}>
                <section className="map " >
                        <Map
                          className="min-h-screen"
                            defaultState={{
                                // center: [48.707067, 44.516975],
                                center: [48.512273, 44.555203],
                                zoom: 14
                            }}
                            width="100%"
                            height={800}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint', "geolocation", "geocode"]}
                            onBoundsChange={(ymaps:any) => {
                                setMap(ymaps.originalEvent.newBounds);
                                setZoom(ymaps.originalEvent.newZoom);
                            }}
                            instanceRef={mapRef}
                            onLoad={refreshData}
                                >
                                { data &&
                                    data.map((item: any, index:any) => {
                                        return(
                                            <span key={index}>
                                                <DiscountsMapComp  mainDataObject={{item, coordinates: data.map((item:any) => [item.latitude, item.longitude]), index}} />
                                            </span>
                                        );
                                    })
                                }
                        </Map>
                </section>
            </YMaps>
    </>
  );
}
