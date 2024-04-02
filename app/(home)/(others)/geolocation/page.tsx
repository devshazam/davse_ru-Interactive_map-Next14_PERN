'use client'
import React, { useState,  useRef, useEffect } from "react";
import {Map, YMaps ,Placemark} from "@pbe/react-yandex-maps";
import CustomSpinner from "@/components/customSpinner";

export default function Home() {
  const [coordinates, setCoordinates] = useState<any>(null);
  
  useEffect(() => {
      const successCallback = (position:any) => {
        setCoordinates([position.coords.latitude, position.coords.longitude])
          console.log(position);
        };
        const errorCallback = (error:any) => {
          console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [])

  return (<>
            {!!coordinates ? 
                <YMaps query={{ apikey: process.env.NEXT_PUBLIC_REACT_APP_YANDEX_KEY }} >
                      <section className="map">
                        {!!coordinates && 
                              <Map
                                  state={{
                                      center: coordinates, // координаты центра карты 48.512741, 44.535905
                                      zoom: 13,
                                  }}
                                  width="100%"
                                  height={800}
                              >
                                  <Placemark
                                      geometry={coordinates}
                                      options={{ preset: "islands#oliveStretchyIcon", iconColor: "red", }}
                                  />
                              </Map>
                          }
                      </section>
                  </YMaps>
                  :
                  <CustomSpinner />
              }
    </>
  );
}
