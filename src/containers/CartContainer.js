import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectData
} from '../store/initData';
import {
    selectGoods, minus, deleteCatd, increment
} from '../store/cartGoods';

import Cart from '../components/cart/Cart'


export default function CartContainer(props) {
    const data = useSelector(selectData);
    const cart = useSelector(selectGoods);
    const dispatch = useDispatch();
    localStorage.removeItem("search");

    const [isEmpry, setIsEmpry] = useState(true)

    useEffect(() => {
        if (cart) {
            setIsEmpry(true)
        }
        let cartLocal = JSON.parse(localStorage.getItem('cart'));
        if (cartLocal) {
            setIsEmpry(false)
        }
    })

    let handlerCart = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus-cart')) {
            dispatch(minus(t.getAttribute('data-key')))
        };
        if (t.classList.contains('delete-cart')) {
            dispatch(deleteCatd(t.getAttribute('data-key')))
        };
        if (t.classList.contains('add-cart')) {
            dispatch(increment(t.getAttribute('data-key')))
        };
    }

    return (
        <div onClick={handlerCart}>
            <Cart goods={data.goods} cart={cart} text={data.store[data.currentLanguage].cart} money={data.money[data.currentMoney]} currentMoney={data.currentMoney} isEmpry={isEmpry} setIsEmpry={setIsEmpry} />
        </div>
    );
}