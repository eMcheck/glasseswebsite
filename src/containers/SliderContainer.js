import React from 'react';
import { useSelector } from 'react-redux';

import {
    selectData
} from '../store/initData';

import Slider from '../components/slider/Slider';


export default function SliderContainer() {
    const data = useSelector(selectData);
    return (
        <>
            <Slider />
        </>
    );
}