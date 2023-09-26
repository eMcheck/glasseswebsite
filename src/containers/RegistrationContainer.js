import React from 'react';
import { useSelector } from 'react-redux';

import {
    selectData
} from '../store/initData';

import Registration from '../components/registration/RegistrationBlock';

export default function RegistrationContainer() {
    const data = useSelector(selectData);
    localStorage.removeItem("search");

    return (
        <>
            <Registration text={data.store[data.currentLanguage].reg} />
        </>
    );
}