import React from "react";

import {Placemark} from "@pbe/react-yandex-maps";

import {fspiralFromSameCoordinatesToYaMap} from '@/lib/utils/helpFunctions'


const DiscountsMapComp = ({ mainDataObject = {}}: any) => {
    // функция должно окрашивать метки в цвета в зависимости от длительности размещения, если старше 7 дней, то желтый или красный
    let colorPoint;
    if(+mainDataObject.item.sale <= 10){
        colorPoint = 'yellow';
    } else {
        colorPoint = 'red';
    }


    return (
        <>
                <Placemark
                        geometry={[mainDataObject.item.latitude, mainDataObject.item.longitude]}
                        options={{
                            preset: 'islands#oliveStretchyIcon', // список темплейтов на сайте яндекса
                            // iconColor: colorPoint, // цвет иконкиz
                            iconColor: colorPoint, // цвет иконки
                            iconOffset: fspiralFromSameCoordinatesToYaMap(mainDataObject.coordinates, mainDataObject.index, mainDataObject.item), // !!!!!!!!!!!!!!
                        }}
                        properties={{
                            iconContent: `${mainDataObject.item.sale}%`, // пару символов помещается
                            hintContent: '<em>кликни меня</em>',
                            balloonContent: `<div class="my-balloon">
                                <h4>${mainDataObject.item.title}</h4>
                                <p>
                                    Цена: ${mainDataObject.item.cost}; <br />
                                    Cкидка ${mainDataObject.item.sale}%
                                </p>
                                <a href="/discounts/${mainDataObject.item.id}">Посмотреть</a>
                                </div>`,
                        }}
                    />

        </>
    );
};

export default DiscountsMapComp;
