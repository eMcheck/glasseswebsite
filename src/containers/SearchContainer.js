import React from 'react';
import { useSelector } from 'react-redux';
import cls from './SearchContainer.module.css'

import {
    selectData
} from '../store/initData';

import GoodsContainer from './GoodsContainer'


export default function SearchContainer() {
    const data = useSelector(selectData);

    let title = data.search.toLowerCase();
    let search = localStorage.getItem('search');
    if (search && search !== '') {
        title = `"${search.toLowerCase()}"`;
    } else if (title) {
        title = `Not find`;
    }

    return (

        <div className={cls.container}>
            <div className={cls.goods}>
                <GoodsContainer title={`${title}`} />
            </div>
        </div>


    );
}