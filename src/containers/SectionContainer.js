import React from 'react';

import GoodsContainer from './GoodsContainer';

import cls from './SectionContainer.module.css'

export default function SectionContainer(props) {

    return (
        <div className={cls.container}>
            <div className={cls.goods}>
                <GoodsContainer title={props.title} />
            </div>
        </div>
    );
}