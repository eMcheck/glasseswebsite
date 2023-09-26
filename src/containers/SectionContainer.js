import React from 'react';
import { useSelector } from 'react-redux';

import {
    selectData
} from '../store/initData';

import GoodsContainer from './GoodsContainer';

import cls from './SectionContainer.module.css'

export default function SectionContainer(props) {
    const data = useSelector(selectData);
    const state = data.store[data.currentLanguage];


    return (
        <div className={cls.container}>
            <div className={cls.goods}>
                <GoodsContainer title={props.title} />
            </div>
        </div>
    );
}