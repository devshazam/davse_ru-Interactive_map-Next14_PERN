import React from "react";

import {Placemark} from "@pbe/react-yandex-maps";

import {fspiralFromSameCoordinatesToYaMap} from '@/lib/utils/helpFunctions'


const DiscountsMapComp = ({ mainDataObject = {}}: any) => {
    // функция должно окрашивать метки в цвета в зависимости от длительности размещения, если старше 7 дней, то желтый или красный
    // let colorPoint;
    // let colorPointAgent = Math.ceil((new Date().getTime() - props.mainDataObject.item.currentTime) / 8.64e7)
    // if(colorPointAgent <= 7) colorPoint = 'red';
    // if(colorPointAgent > 7 && colorPointAgent <= 30) colorPoint = 'yellow';
    // if(colorPointAgent > 30) colorPoint = 'blue';

    return (
        <>
                <Placemark
                        geometry={[mainDataObject.item.latitude, mainDataObject.item.longitude]}
                        options={{
                            preset: 'islands#oliveStretchyIcon', // список темплейтов на сайте яндекса
                            // iconColor: colorPoint, // цвет иконкиz
                            iconColor: 'red', // цвет иконки
                            iconOffset: fspiralFromSameCoordinatesToYaMap(mainDataObject.coordinates, mainDataObject.index, mainDataObject.item), // !!!!!!!!!!!!!!
                        }}
                        properties={{
                            iconContent: `${mainDataObject.item.discount}%`, // пару символов помещается
                            hintContent: '<em>кликни меня</em>',
                            balloonContent: `<div class="my-balloon">
                                <h4>${mainDataObject.item.name}</h4>
                                <p>
                                    Цена: ${mainDataObject.item.cost}; <br />
                                    Cкидка ${mainDataObject.item.discount}%
                                </p>
                                <a href="/discounts/${mainDataObject.item.id}">Посмотреть</a>
                                </div>`,
                        }}
                    />

        </>
    );
};

export default DiscountsMapComp;
