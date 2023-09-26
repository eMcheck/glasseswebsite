import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import Baner from '../components/banner/Banner';

import {
    selectData
} from '../store/initData';

export default function BannerContainer() {
    const data = useSelector(selectData);

    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);



    useEffect(() => {
        let copy = Object.assign([], items);
        for (let slid in data.baner) {
            copy.push(data.baner[slid])
        }
        setItems(copy);
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);




    return (
        <>
            <Baner
                changeSlide={changeSlide}
                slidesCount={items.length}
                slideNumber={slide}
                items={items}
            />
        </>
    );
}