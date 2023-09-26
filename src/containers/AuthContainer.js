import React from 'react';
import { useSelector } from 'react-redux';

import {
    selectData
} from '../store/initData';

import Auth from '../components/auth/AuthBlock';

export default function AuthContainer() {
    const data = useSelector(selectData);
    localStorage.removeItem("search");
    return (
        <>
            <Auth text={data.store[data.currentLanguage].login} />
        </>
    );
}