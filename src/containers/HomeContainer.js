import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import {
    selectData
} from '../store/initData';

import BannerContainer from './BannerContainer';
import SectionContainer from './SectionContainer';


export default function HomeContainer() {
    const data = useSelector(selectData);
    const state = data.store[data.currentLanguage];
    localStorage.removeItem("search");


    return (
        <div >
            <BannerContainer />
            <SectionContainer title={'All products'} />
        </div>
    );
}