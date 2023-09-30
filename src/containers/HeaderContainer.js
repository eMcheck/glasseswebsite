import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import HeaderMain from '../components/header/HeaderMain';
import HeaderNav from '../components/header/HeaderNav';

import {
    selectData, changeLanguage, changeMoney, search
} from '../store/initData';
import {
    selectGoods
} from '../store/cartGoods';

export default function HeaderContainer() {
    const data = useSelector(selectData);
    const cart = useSelector(selectGoods);

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const state = data.store[data.currentLanguage];

    const hendlerLangt = (event) => {
        dispatch(changeLanguage(event.target.value));
    }
    const hendlerMoney = (event) => {
        dispatch(changeMoney(event.target.value))
    }
    const hendlerSearch = (event) => {
        dispatch(search(event.target.value.trim()));
    }
    const hendlerSearchPush = (event) => {
        dispatch(search(event.target.value.trim()));
        navigate("/search");
    }
    const hendlerSearchClick = (text) => {
        dispatch(search(text.trim()));
        navigate("/search");
    }

    return (
        <>
            <HeaderMain
                state={state.header.section1}
                hendlerLangt={hendlerLangt}
                hendlerMoney={hendlerMoney}
                currentMoney={data.currentMoney}
                currentLanguage={data.currentLanguage}
            />
            <HeaderNav
                hendlerSearch={hendlerSearch}
                hendlerSearchPush={hendlerSearchPush}
                hendlerSearchClick={hendlerSearchClick}
                cart={cart}
                state={state.header.section2}
            />
        </>
    );
}