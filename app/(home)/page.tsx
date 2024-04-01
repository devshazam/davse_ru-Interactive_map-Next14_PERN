'use client'
import React, { useState,  useRef, useEffect } from "react";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import DiscountsMapComp from '@/app/(home)/components/DiscountsMapComp';
import {getMapItems} from "@/lib/actions";


export default function Home() {

  const mapRef = useRef<any>();
  
  const [discounts, setDiscounts] = useState<any>(null);
  const [coordinates, setCoordinates] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState<any>(11);

  const refreshData = () => {
     if(mapRef.current && mapRef.current._bounds) {
       setMap(mapRef.current._bounds);
      }
    };

  useEffect(() => {
    if(!map) return;
    // if( zoom < 12) {
    //     setTimeout(function() {setZoom(13) }, 1000); 
    //     return;}

    async function fetchMyAPI() {
      const formData = new FormData();
          formData.append("xLatitude", map[0][0]);
          formData.append("xLongitude", map[0][1]);
          formData.append("yLatitude", map[1][0]);
          formData.append("yLongitude", map[1][1]);
          let response = await getMapItems(formData);
          setDiscounts(response)
          
          let mid2:any = []
          response.map((item:any) => {mid2 = [...mid2, [item.latitude, item.longitude]]})
          setCoordinates(mid2)
    }

    fetchMyAPI()
  
  }, [map])

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
                                { discounts &&
                                    discounts.map((item: any, index:any) => {
                                        return(
                                            <span key={index}>
                                                <DiscountsMapComp  mainDataObject={{item, coordinates, index}} />
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
