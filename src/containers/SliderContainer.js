import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import {
    selectData
} from '../store/initData';

import Slider from '../components/slider/Slider';


export default function SliderContainer() {
    const data = useSelector(selectData);
    const state = data.store[data.currentLanguage];



    return (
        <>
            <Slider />
        </>
    );
}