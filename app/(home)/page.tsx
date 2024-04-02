'use client'
import React, { useState,  useRef, useEffect } from "react";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import DiscountsMapComp from '@/app/(home)/components/DiscountsMapComp';
import {getMapItems} from "@/lib/actions";
import { useQuery  } from "@tanstack/react-query";
import {getMapList} from "@/lib/api/getDiscounts";


export default function Home() {

  const mapRef = useRef<any>();
  
  // const [discounts, setDiscounts] = useState<any>(null);
  // const [coordinates, setCoordinates] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState<any>(11);

  const refreshData = () => {
     if(mapRef.current && mapRef.current._bounds) {
       setMap(mapRef.current._bounds);
      }
    };

    const { data, isLoading, isError } = useQuery({
      queryFn: async () => await getMapList(map),
      queryKey: ["discountMapList", map], //Array according to Documentation
      // The query will not execute until the userId exists
      enabled: !!map,
    })

    console.log(22, data)


  return (<>
            <YMaps query={{ apikey: process.env.NEXT_PUBLIC_REACT_APP_YANDEX_KEY}}>
                <section className="map " >
                        <Map
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
