import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectData
} from '../store/initData';
import {
    increment
} from '../store/cartGoods';

import cls from './GoodsContainer.module.css'
import Goods from '../components/Goods/Goods'

export default function GoodsContainer(props) {
    const data = useSelector(selectData);
    const dispatch = useDispatch();

    let s = data.search.toLowerCase();

    let search = localStorage.getItem('search');
    if (search) {
        s = search.toLowerCase();
    }

    let pathname = window.location.pathname.slice(1)

    let folterGoods = data.goods.filter(e => {
        if (pathname === '') return true;
        if (e.gender === pathname) return true;
        if (e.gender === 'unisex' && pathname === 'other') return true;
        if (pathname === 'search') {
            let t = e.title.toLowerCase();
            let check = t.indexOf(s);
            if (check >= 0) {
                return true
            }
        }
    })
    if (folterGoods.length !== 0) {

    }

    let temp = folterGoods.map(e => < Goods
        key={e.id}
        goods={e}
        currentMoney={data.currentMoney}
        money={data.money[data.currentMoney]}
    />)
    if (temp.length === 0) {
        temp = <h1 >not faund</h1>
    }




    const hendlerGoods = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-cart')) return true;
        dispatch(increment(t.getAttribute('data')));
        console.log(t)
        t.style.transform = `rotate(-70deg)`;
        setTimeout(() => {
            t.style.transform = `rotate(0deg)`;
        }, 500)
    }

    return (
        <div >
            <div className={cls.title}>{props.title.toUpperCase()}</div>
            <div className={cls.wrapp_goods} onClick={hendlerGoods}>
                {temp}
            </div>
        </div>
    );
}